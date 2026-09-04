#!/usr/bin/env python3
"""Regenerate sitemap.xml from the pages that exist on disk.

Every public page on Shanghai Connect is a `<route>/index.html` served at the
clean URL `<route>` (see vercel.json "cleanUrls"). This script walks the repo,
keeps the pages that are actually indexable, and rewrites sitemap.xml so new
guides, neighbourhoods, and sections are picked up without hand-editing.

A page is excluded when it:
  * carries a `noindex` robots meta tag (404, coming-soon, anything staged),
  * lives under an excluded directory (docs, assets, .git, ...),
  * is a redirect target rather than a real file.

Usage:
    python3 scripts/generate_sitemap.py           # rewrite sitemap.xml
    python3 scripts/generate_sitemap.py --check   # exit 1 if it is stale
"""

from __future__ import annotations

import datetime as dt
import os
import re
import subprocess
import sys

SITE = "https://shanghai-connect.com"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITEMAP = os.path.join(ROOT, "sitemap.xml")

SKIP_DIRS = {".git", ".claude", ".github", "node_modules", "assets", "docs",
             "public", "scripts"}

# Google ignores <priority>, but it documents intent for us. Rules are applied
# top to bottom; the first match wins, so new pages get a sensible default.
PRIORITY_RULES = [
    (r"^/$", "1.0"),
    (r"^/(privacy-policy|disclaimer|affiliate-disclosure)$", "0.3"),
    (r"^/guides/(essential-apps|best-vpns-for-china|shanghai-metro-guide)$", "0.9"),
    (r"^/guides/", "0.8"),
    (r"^/neighbourhoods/", "0.7"),
    (r"^/", "0.7"),
]

NOINDEX = re.compile(r'<meta\s+name="robots"[^>]*content="[^"]*noindex', re.I)


def find_pages() -> list[str]:
    """Every index.html in the repo, as a clean route."""
    routes = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames
                       if d not in SKIP_DIRS and not d.startswith(".")]
        if "index.html" not in filenames:
            continue
        rel = os.path.relpath(dirpath, ROOT)
        routes.append("/" if rel == "." else "/" + rel.replace(os.sep, "/"))
    return sorted(routes)


def is_indexable(route: str) -> tuple[bool, str]:
    path = os.path.join(ROOT, route.strip("/"), "index.html")
    html = open(path, encoding="utf-8").read()
    if NOINDEX.search(html):
        return False, "noindex robots meta"
    return True, ""


def lastmod(route: str) -> str:
    """Last commit date for the page, falling back to file mtime."""
    rel = os.path.join(route.strip("/"), "index.html").lstrip("/")
    try:
        out = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", rel],
            cwd=ROOT, capture_output=True, text=True, timeout=15)
        if out.returncode == 0 and out.stdout.strip():
            return out.stdout.strip()
    except (OSError, subprocess.SubprocessError):
        pass
    mtime = os.path.getmtime(os.path.join(ROOT, rel))
    return dt.date.fromtimestamp(mtime).isoformat()


def priority(route: str) -> str:
    for pattern, value in PRIORITY_RULES:
        if re.search(pattern, route):
            return value
    return "0.5"


def build() -> tuple[str, list[tuple[str, str]]]:
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    excluded = []
    for route in find_pages():
        ok, reason = is_indexable(route)
        if not ok:
            excluded.append((route, reason))
            continue
        loc = SITE + ("/" if route == "/" else route)
        lines += ["  <url>",
                  f"    <loc>{loc}</loc>",
                  f"    <lastmod>{lastmod(route)}</lastmod>",
                  f"    <priority>{priority(route)}</priority>",
                  "  </url>"]
    lines.append("</urlset>")
    return "\n".join(lines) + "\n", excluded


def main() -> int:
    xml, excluded = build()
    current = open(SITEMAP, encoding="utf-8").read() if os.path.exists(SITEMAP) else ""

    if "--check" in sys.argv:
        if xml == current:
            print("sitemap.xml is up to date")
            return 0
        print("sitemap.xml is stale — run: python3 scripts/generate_sitemap.py")
        return 1

    open(SITEMAP, "w", encoding="utf-8").write(xml)
    print(f"sitemap.xml: {xml.count('<url>')} URLs"
          f"{' (unchanged)' if xml == current else ' (updated)'}")
    for route, reason in excluded:
        print(f"  excluded {route} — {reason}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
