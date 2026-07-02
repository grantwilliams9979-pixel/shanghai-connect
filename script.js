const guides = [
  {
    category: "apps",
    image: "assets/img/apps/phone-displaying-navigation-app-during-a-night-d--CcX0QdTMeho.jpg",
    title: { en: "Essential apps for Shanghai", zh: "上海必备应用" },
    summary: {
      en: "Payments, messaging, food delivery, maps, translation, travel, and the setup problems newcomers hit first.",
      zh: "涵盖支付、聊天、外卖、地图、翻译、出行，以及新来上海时最常见的设置问题。"
    },
    tags: ["Alipay", "WeChat", "Didi"],
    meta: { en: "Starter guide", zh: "入门指南" },
    link: "guides/essential-apps.html"
  },
  {
    category: "apps",
    image: "assets/img/apps/man-using-turned-on-smartphone--HjSdOirGJu8.jpg",
    title: { en: "How to use Alipay", zh: "如何使用支付宝" },
    summary: {
      en: "Link cards, verify your account, pay in shops, ride the metro, and understand common foreign-card limits.",
      zh: "绑定银行卡、完成认证、线下支付、乘坐地铁，并了解境外卡常见限制。"
    },
    tags: ["Payments", "Setup", "Metro"],
    meta: { en: "Must know", zh: "必读" },
    link: "guides/how-to-use-alipay-in-china/"
  },
  {
    category: "transport",
    image: "assets/img/transportation/a-black-and-white-photo-of-a-subway--HEF6JemDHCM.jpg",
    title: { en: "Shanghai Metro guide", zh: "上海地铁指南" },
    summary: {
      en: "Airport connections, fares, mobile payments, rush-hour habits, accessibility, and useful metro apps.",
      zh: "机场连接、票价、移动支付、高峰时段、无障碍信息和常用地铁应用。"
    },
    tags: ["Metro", "Airports", "Maps"],
    meta: { en: "Transport", zh: "交通" },
    link: "guides/shanghai-metro-guide.html"
  },
  {
    category: "transport",
    image: "assets/img/transportation/group-of-people-riding-train--BBNZK3z1osQ.jpg",
    title: { en: "Taxis, Didi, and airport transfers", zh: "出租车、滴滴与机场交通" },
    summary: {
      en: "When to hail a taxi, when to book a ride, how to pay, and what to show drivers if you do not speak Chinese.",
      zh: "什么时候打车、什么时候叫车、如何付款，以及不会中文时该给司机看什么。"
    },
    tags: ["Didi", "Taxi", "Airports"],
    meta: { en: "Practical", zh: "实用" },
    link: "guides/taxis-didi-airport-transfers.html"
  },
  {
    category: "housing",
    image: "assets/img/street-level/a-view-of-a-city-from-across-the-street--G-d47sb_Wwc.jpg",
    title: { en: "Where to live in Shanghai", zh: "上海居住区域选择" },
    summary: {
      en: "A practical comparison of Jing'an, Xuhui, Pudong, Hongqiao, Changning, Huangpu, and family-friendly areas.",
      zh: "实用对比静安、徐汇、浦东、虹桥、长宁、黄浦以及适合家庭的区域。"
    },
    tags: ["Jing'an", "Xuhui", "Pudong"],
    meta: { en: "Areas", zh: "区域" },
    link: "guides/areas-to-live.html"
  },
  {
    category: "daily-life",
    image: "assets/img/groceries/people-inside-a-traditional-asian-grocery-store--6F-XAZmDo1k.jpg",
    title: { en: "Foreign groceries and imported food", zh: "进口食品与外籍超市" },
    summary: {
      en: "International supermarkets, specialty shops, online grocery services, delivery coverage, and budget tips.",
      zh: "国际超市、特色商店、线上买菜、配送范围和省钱建议。"
    },
    tags: ["Groceries", "Delivery", "Shopping"],
    meta: { en: "Daily life", zh: "生活" },
    link: "guides/foreign-groceries.html"
  },
  {
    category: "daily-life",
    image: "assets/img/apps/smartphone-with-navigation-app-mounted-in-car--xdEeISgxyBI.jpg",
    title: { en: "SIM cards, eSIMs, and internet access", zh: "手机卡、eSIM与网络连接" },
    summary: {
      en: "Choose a phone plan, get connected after landing, understand VPN basics, and avoid common account problems.",
      zh: "选择手机套餐、落地后联网、了解 VPN 基础，并避免常见账号问题。"
    },
    tags: ["SIM", "VPN", "Internet"],
    meta: { en: "Arrival", zh: "抵达" },
    link: "guides/sim-cards-internet-access.html"
  },
  {
    category: "daily-life",
    image: "assets/img/street-level/people-walking-on-sidewalk-near-buildings-during--N43_Lz2dCWQ.jpg",
    title: { en: "Emergency contacts and healthcare", zh: "紧急电话与医疗指南" },
    summary: {
      en: "Hospitals, clinics, pharmacies, translation notes, insurance basics, and numbers to keep saved.",
      zh: "医院、诊所、药房、翻译提示、保险基础和需要保存的电话号码。"
    },
    tags: ["Healthcare", "Safety", "Hospitals"],
    meta: { en: "Safety", zh: "安全" },
    link: "guides/emergency-contacts-healthcare.html"
  }
];

const copy = {
  en: {
    navGuides: "Guides",
    navApps: "Essential apps",
    navAreas: "Areas",
    navPlan: "First week",
    crumbHome: "Home",
    crumbApps: "Essential apps",
    eyebrow: "Shanghai Starter Pack",
    heroTitle: "Shanghai starts here.",
    heroCopy:
      "A bilingual digital concierge for the apps, neighbourhoods, transport, groceries, and must-know steps that make Shanghai easier from day one.",
    searchLabel: "Search guides",
    searchPlaceholder: "Try Alipay, metro, SIM card, Jing'an",
    browseEyebrow: "Browse the essentials",
    starterTitle: "Everything newcomers ask first",
    filterAll: "All",
    filterApps: "Apps & payments",
    filterTransport: "Getting around",
    filterHousing: "Where to live",
    filterLife: "Daily essentials",
    appsCtaKicker: "Flagship guide",
    appsCtaTitle: "Essential apps starter guide",
    appsCtaCopy: "A focused 48-hour, first-week, and first-month app setup sequence for newcomers.",
    appsCtaButton: "Open guide",
    planEyebrow: "First week in Shanghai",
    planTitle: "A calmer arrival checklist",
    planCopy:
      "Shanghai Connect organizes practical decisions in the order people actually face them: get connected, pay for things, move around, settle in, then start exploring.",
    stepOneTitle: "Set up payments",
    stepOneCopy: "Alipay, WeChat Pay, cards, and common verification issues.",
    stepTwoTitle: "Get moving",
    stepTwoCopy: "Metro, Didi, airport transfers, train stations, and maps.",
    stepThreeTitle: "Find your rhythm",
    stepThreeCopy: "Groceries, healthcare, neighbourhoods, air quality, and daily basics.",
    areasEyebrow: "Neighbourhood finder",
    areasTitle: "Where Shanghai starts to feel like home",
    viewGuides: "View guides",
    viewAreasGuide: "View area guide",
    jingAn: "Central, polished, convenient, and great for first-time arrivals.",
    xuhui: "Leafy streets, cafes, schools, and easy metro access.",
    pudong: "Business districts, family compounds, parks, and airport access.",
    newsletterEyebrow: "Launch updates",
    newsletterTitle: "Get the next Shanghai guide drop",
    emailPlaceholder: "Email address",
    joinButton: "Join",
    footerPlan: "Product plan",
    footerGuides: "Starter Pack",
    noResults: "No guides found. Try another search or category.",
    appsEyebrow: "Essential Apps Starter Guide",
    appsHeroTitle: "The Shanghai apps to set up first.",
    appsHeroCopy:
      "A focused sequence for the first 48 hours, first week, and first month, plus the essential apps worth downloading before you fly.",
    jumpTimeline: "Timeline",
    jumpTop10: "Top apps",
    jumpTips: "Newcomer tips",
    appsIntroEyebrow: "MVP focus",
    appsIntroTitle: "Curated setup, not a giant directory",
    appsIntroCopy:
      "Start with the apps that unblock payment, messaging, transport, translation, and daily logistics. Everything else can wait until you have a local rhythm.",
    timelineEyebrow: "Setup timeline",
    timelineTitle: "What to install when",
    stage48Title: "First 48 hours",
    stage48Copy: "Unlock payments, messaging, rides, maps, and translation before the first real errand.",
    stage48App1: "WeChat: messaging, contacts, mini programs, and payments.",
    stage48App2: "Alipay: foreign-card payments, transport QR, and city services.",
    stage48App3: "Didi: airport rides and address-based taxi booking.",
    stage48App4: "Baidu Maps: Chinese addresses, walking routes, and transit planning.",
    stage48App5: "Google Translate: offline language backup before landing.",
    stage48App6: "VPN app: choose, install, and test your provider before you travel.",
    stageWeekTitle: "First week",
    stageWeekCopy: "Add the apps that make food, metro, and real-life Chinese easier.",
    stageWeekApp1: "MetroMan: quick Shanghai metro routing and first/last train checks.",
    stageWeekApp2: "Meituan: restaurants, local services, and delivery discovery.",
    stageWeekApp3: "Pleco: reliable Chinese dictionary for signs, menus, and forms.",
    stageMonthTitle: "First month",
    stageMonthCopy: "Set up the bigger marketplaces and travel tools once your basics are stable.",
    stageMonthApp1: "Taobao: household goods, delivery habits, and local shopping.",
    stageMonthApp2: "Trip.com: domestic hotels, flights, trains, and English-language bookings.",
    topEyebrow: "Download before you fly",
    topTitle: "Top 11 starter apps",
    sourceJump: "View sources",
    stage48Label: "First 48 hours",
    stageWeekLabel: "First week",
    stageMonthLabel: "First month",
    wechatWhy: "Why now: many people, services, landlords, and businesses use WeChat as the default contact layer.",
    alipayWhy: "Why now: payments, transport QR codes, foreign-card setup, and useful city service mini apps start here.",
    didiWhy: "Why now: airport rides and address-based booking reduce friction before you can explain locations in Chinese.",
    baiduWhy: "Why now: Chinese place names, compound gates, walking paths, and transit routing are often better locally.",
    translateWhy: "Why now: download offline language packs before arrival so menus, signs, and screenshots are easier.",
    vpnWhy:
      "Why now: if you rely on overseas services for work, school, travel, or personal accounts, install and test your chosen VPN before arriving.",
    vpnNote:
      "Provider reliability changes, so treat this as a pre-arrival setup task rather than a one-size-fits-all recommendation.",
    metroWhy: "Why now: it keeps metro routing fast while you learn line names, transfers, and last-train habits.",
    meituanWhy: "Why now: restaurants, delivery, services, and local deals become useful once you know your neighbourhood.",
    tripWhy:
      "Why now: English-language booking support helps with domestic hotels, flights, trains, and first trips out of Shanghai.",
    plecoWhy: "Why now: a proper dictionary is calmer than guessing your way through notices, forms, and ingredients.",
    taobaoWhy: "Why now: it is powerful for household setup, but easier after payments, address entry, and delivery basics.",
    tipsEyebrow: "Newcomer tips",
    tipsTitle: "A few setup rules save hours",
    tipsCopy: "Install early, verify slowly, and keep screenshots of Chinese addresses for your first week.",
    tipOneTitle: "Download before arrival",
    tipOneCopy: "Install core apps and offline translation packs before you depend on airport Wi-Fi or roaming.",
    tipTwoTitle: "Use the same phone number",
    tipTwoCopy:
      "Payment, delivery, ride-hailing, and hotel accounts are easier when verification codes reach one stable number.",
    tipThreeTitle: "Save addresses in Chinese",
    tipThreeCopy: "Keep your hotel, apartment, school, or office address as Chinese text and as a screenshot.",
    sourcesEyebrow: "Trusted source",
    sourcesTitle: "Source framing",
    sourcesCopy:
      "This starter guide is framed against the International Services Shanghai essential apps guidance and Shanghai Connect's source map, then reduced to a focused newcomer sequence.",
    officialSource: "Official essential apps reference",
    vpnFeatureEyebrow: "VPN setup",
    vpnFeatureTitle: "Choose and test your VPN before you fly",
    vpnFeatureCopy:
      "VPN performance in China can change by network, device, and timing. Compare newcomer-friendly options, understand the tradeoffs, and install your VPN before arriving in Shanghai.",
    vpnFeatureButton: "Compare VPNs for China",
    crumbAreas: "Areas to live",
    areasNavChecklist: "Checklist",
    areasGuideEyebrow: "Areas to Live Guide",
    areasGuideHeroTitle: "Choose your first Shanghai base.",
    areasGuideHeroCopy:
      "A focused newcomer guide to shortlist neighbourhoods by commute, school needs, lifestyle, budget, and airport access.",
    areasJumpDecision: "Decision guide",
    areasJumpProfiles: "Area profiles",
    areasJumpChecklist: "Viewing checklist",
    areasIntroEyebrow: "MVP focus",
    areasIntroTitle: "Pick a practical first base, then refine later",
    areasIntroCopy:
      "For a first lease, prioritize commute, school or office access, reliable transit, and daily errands over the perfect cafe street. Shanghai rewards being close to your real routine.",
    decisionEyebrow: "Decision guide",
    decisionTitle: "Start with the constraint you cannot change",
    decisionCommuteTitle: "Commute first",
    decisionCommuteCopy:
      "Choose a metro line or drive corridor that makes your daily trip predictable before comparing lifestyle details.",
    decisionSchoolTitle: "School or family rhythm",
    decisionSchoolCopy:
      "Families often trade central nightlife for school-bus routes, larger apartments, green space, and compound facilities.",
    decisionLandingTitle: "Landing comfort",
    decisionLandingCopy:
      "If you are new to China, start somewhere easy for errands, transport, food delivery, and English-language services.",
    profilesEyebrow: "Curated shortlist",
    profilesTitle: "Six areas newcomers compare first",
    profileJinganCopy:
      "Best for first-time arrivals who want central convenience, strong metro access, polished apartments, restaurants, and quick errands.",
    profileXuhuiCopy:
      "Best for leafy streets, cafes, older apartments with character, schools, and a softer daily pace near the former French Concession.",
    profileChangningCopy:
      "Best for international families, Hongqiao airport and rail access, quieter compounds, and west-side office commutes.",
    profilePudongCopy:
      "Best for Pudong office access, family compounds, larger homes, parks, and easier links toward Pudong airport.",
    profileHuangpuCopy:
      "Best for walkable city life, heritage streets, nightlife, restaurants, and a very central base with smaller apartment tradeoffs.",
    profileMinhangCopy:
      "Best for more space, school-driven moves, suburban compounds, and families who are comfortable being farther from the city core.",
    tagCentral: "Central",
    tagMetro: "Metro access",
    tagFirstTimers: "First timers",
    tagLeafy: "Leafy",
    tagCafes: "Cafes",
    tagSchools: "Schools",
    tagFamilies: "Families",
    tagHongqiao: "Hongqiao",
    tagCompounds: "Compounds",
    tagBusiness: "Business",
    tagParks: "Parks",
    tagPVG: "PVG access",
    tagWalkable: "Walkable",
    tagDining: "Dining",
    tagHeritage: "Heritage",
    tagSpace: "More space",
    tagSuburban: "Suburban",
    tagValue: "Value",
    checklistEyebrow: "Viewing checklist",
    checklistTitle: "Check the daily-life details before you sign",
    checklistCopy:
      "A beautiful apartment can still be the wrong choice if the commute, noise, or document process is painful.",
    checkOneTitle: "Test the commute",
    checkOneCopy: "Run the route at your real travel time, including walking from the station or compound gate.",
    checkTwoTitle: "Map daily errands",
    checkTwoCopy:
      "Check groceries, pharmacies, delivery coverage, gyms, cafes, parks, and how easy taxis are at night.",
    checkThreeTitle: "Confirm paperwork",
    checkThreeCopy:
      "Ask about lease terms, fapiao needs, residence registration support, utilities, repairs, and agent fees.",
    areasSourcesCopy:
      "This guide uses Shanghai Connect's source map for neighbourhood scope and cross-checks newcomer themes against expat accommodation guidance. It is a practical shortlist, not a rent-price database.",
    areasOfficialSource: "Accommodation guide reference",
    heroStartCta: "New to Shanghai? Start here →",
    stageSelectorLabel: "Where are you in your journey?",
    stageArriving: "Arriving soon",
    stageJustArrived: "Just arrived",
    stageSettlingIn: "Getting settled"
  },
  zh: {
    navGuides: "指南",
    navApps: "必备应用",
    navAreas: "区域",
    navPlan: "第一周",
    crumbHome: "首页",
    crumbApps: "必备应用",
    eyebrow: "上海入门包",
    heroTitle: "从这里开始上海生活。",
    heroCopy: "双语城市生活指南，帮你快速搞定应用、居住区域、交通、超市和抵达后的关键事项。",
    searchLabel: "搜索指南",
    searchPlaceholder: "试试 支付宝、地铁、手机卡、静安",
    browseEyebrow: "浏览重点内容",
    starterTitle: "新来上海最常问的问题",
    filterAll: "全部",
    filterApps: "应用与支付",
    filterTransport: "出行交通",
    filterHousing: "居住区域",
    filterLife: "日常必备",
    appsCtaKicker: "重点指南",
    appsCtaTitle: "上海必备应用入门指南",
    appsCtaCopy: "按抵达 48 小时、第一周和第一个月整理的新手应用设置顺序。",
    appsCtaButton: "打开指南",
    planEyebrow: "抵达上海第一周",
    planTitle: "更从容的落地清单",
    planCopy: "Shanghai Connect 按真实生活顺序整理信息：先联网和支付，再解决交通、居住与日常探索。",
    stepOneTitle: "设置支付",
    stepOneCopy: "支付宝、微信支付、银行卡和常见认证问题。",
    stepTwoTitle: "开始出行",
    stepTwoCopy: "地铁、滴滴、机场交通、火车站和地图应用。",
    stepThreeTitle: "进入节奏",
    stepThreeCopy: "超市、医疗、居住区域、空气质量和生活基础。",
    areasEyebrow: "居住区域",
    areasTitle: "找到更像家的上海",
    viewGuides: "查看指南",
    viewAreasGuide: "查看区域指南",
    jingAn: "中心、精致、便利，适合初到上海的人。",
    xuhui: "梧桐街区、咖啡馆、学校和便捷地铁。",
    pudong: "商务区、家庭社区、公园和机场通达性。",
    newsletterEyebrow: "上线更新",
    newsletterTitle: "获取下一批上海指南",
    emailPlaceholder: "邮箱地址",
    joinButton: "加入",
    footerPlan: "产品计划",
    footerGuides: "入门包",
    noResults: "没有找到相关指南。请换个关键词或分类。",
    appsEyebrow: "必备应用入门指南",
    appsHeroTitle: "先把这些上海应用设置好。",
    appsHeroCopy: "聚焦抵达 48 小时、第一周和第一个月的应用顺序，并列出飞来上海前建议下载的必备应用。",
    jumpTimeline: "时间线",
    jumpTop10: "必备应用",
    jumpTips: "新手提示",
    appsIntroEyebrow: "MVP 重点",
    appsIntroTitle: "精选设置顺序，不做大型目录",
    appsIntroCopy: "先解决支付、聊天、交通、翻译和日常生活。其他应用可以等你熟悉本地节奏后再慢慢添加。",
    timelineEyebrow: "设置时间线",
    timelineTitle: "什么时候安装什么",
    stage48Title: "抵达 48 小时内",
    stage48Copy: "先解决支付、沟通、打车、地图和翻译，再开始处理真正的日常事务。",
    stage48App1: "微信：聊天、联系人、小程序和支付。",
    stage48App2: "支付宝：境外卡支付、交通码和城市服务。",
    stage48App3: "滴滴：机场打车和按地址叫车。",
    stage48App4: "百度地图：中文地址、步行路线和公共交通规划。",
    stage48App5: "谷歌翻译：抵达前下载离线语言包，作为翻译备份。",
    stage48App6: "VPN 工具：出发前选择、安装并测试你要使用的服务。",
    stageWeekTitle: "第一周",
    stageWeekCopy: "加入能解决吃饭、地铁和中文理解的应用。",
    stageWeekApp1: "MetroMan：快速查上海地铁路线和首末班车。",
    stageWeekApp2: "美团：餐厅、本地服务和外卖发现。",
    stageWeekApp3: "Pleco：查标识、菜单和表格时更可靠的中文词典。",
    stageMonthTitle: "第一个月",
    stageMonthCopy: "等基础稳定后，再设置更复杂的购物和旅行工具。",
    stageMonthApp1: "淘宝：购买家居用品，熟悉本地购物和快递。",
    stageMonthApp2: "Trip.com：预订国内酒店、机票、火车票和英文服务。",
    topEyebrow: "飞行前下载",
    topTitle: "十一款新手应用",
    sourceJump: "查看来源",
    stage48Label: "48 小时内",
    stageWeekLabel: "第一周",
    stageMonthLabel: "第一个月",
    wechatWhy: "为什么现在：很多人、服务、房东和商家都会默认用微信沟通。",
    alipayWhy: "为什么现在：支付、交通码、境外卡绑定和城市服务都从这里开始。",
    didiWhy: "为什么现在：机场打车和按地址叫车能减少不会中文时的出行压力。",
    baiduWhy: "为什么现在：中文地名、小区门、步行路线和本地交通规划通常更准确。",
    translateWhy: "为什么现在：抵达前下载离线语言包，菜单、标识和截图都会更容易处理。",
    vpnWhy: "为什么现在：如果工作、学习、旅行或个人账号需要海外服务，建议抵达前安装并测试你选择的 VPN。",
    vpnNote: "不同服务的可用性会变化，所以这里把它作为出发前设置任务，而不是固定推荐某一个服务。",
    metroWhy: "为什么现在：在熟悉线路、换乘和末班车习惯前，它能快速规划地铁路线。",
    meituanWhy: "为什么现在：熟悉住处附近后，餐厅、外卖、服务和优惠都会很有用。",
    tripWhy: "为什么现在：英文预订支持能帮助你安排国内酒店、机票、火车票和第一次离沪旅行。",
    plecoWhy: "为什么现在：看通知、表格和配料时，可靠词典比猜测更省心。",
    taobaoWhy: "为什么现在：适合添置家居用品，但最好等支付、地址和快递习惯稳定后再用。",
    tipsEyebrow: "新手提示",
    tipsTitle: "几个设置习惯能省下很多时间",
    tipsCopy: "提前安装，慢慢认证，并在第一周保存好中文地址截图。",
    tipOneTitle: "抵达前下载",
    tipOneCopy: "先安装核心应用和离线翻译包，不要完全依赖机场 Wi-Fi 或漫游。",
    tipTwoTitle: "尽量使用同一个手机号",
    tipTwoCopy: "支付、外卖、打车和酒店账号都需要验证码，一个稳定号码会简单很多。",
    tipThreeTitle: "保存中文地址",
    tipThreeCopy: "把酒店、公寓、学校或办公室地址保存为中文文字，也保存一张截图。",
    sourcesEyebrow: "可信来源",
    sourcesTitle: "来源说明",
    sourcesCopy: "本指南参考 International Services Shanghai 的必备应用说明和 Shanghai Connect 来源地图，再压缩成适合新人的精选顺序。",
    officialSource: "官方必备应用参考",
    vpnFeatureEyebrow: "VPN 设置",
    vpnFeatureTitle: "出发前选择并测试你的 VPN",
    vpnFeatureCopy:
      "VPN 在中国的表现会因网络、设备和时间而变化。先比较适合新人的选项，了解取舍，并在抵达上海前完成安装。",
    vpnFeatureButton: "比较中国 VPN",
    crumbAreas: "居住区域",
    areasNavChecklist: "看房清单",
    areasGuideEyebrow: "居住区域指南",
    areasGuideHeroTitle: "选择你在上海的第一个落脚点。",
    areasGuideHeroCopy: "面向新人的精选区域指南，按通勤、学校、生活方式、预算和机场通达性来缩小选择范围。",
    areasJumpDecision: "选择方法",
    areasJumpProfiles: "区域介绍",
    areasJumpChecklist: "看房清单",
    areasIntroEyebrow: "MVP 重点",
    areasIntroTitle: "先选实用的第一站，再慢慢优化",
    areasIntroCopy:
      "第一份租约应优先考虑通勤、学校或办公室、稳定交通和日常采购，而不是完美的咖啡街区。离真实生活节奏近，会让上海更容易适应。",
    decisionEyebrow: "选择方法",
    decisionTitle: "先看最难改变的条件",
    decisionCommuteTitle: "先看通勤",
    decisionCommuteCopy: "先确定能让每日出行稳定的地铁线路或驾车方向，再比较生活方式细节。",
    decisionSchoolTitle: "学校或家庭节奏",
    decisionSchoolCopy: "家庭常常会用市中心夜生活换取校车路线、更大户型、绿地和小区配套。",
    decisionLandingTitle: "落地舒适度",
    decisionLandingCopy: "如果你刚来中国，先选择办事、交通、外卖和英文服务都更容易的区域。",
    profilesEyebrow: "精选区域",
    profilesTitle: "新来上海最常比较的六个区域",
    profileJinganCopy: "适合初到上海、想要市中心便利、地铁通达、成熟公寓、餐厅和日常采购的人。",
    profileXuhuiCopy: "适合喜欢梧桐街区、咖啡馆、有特色老公寓、学校资源和法租界附近慢节奏生活的人。",
    profileChangningCopy: "适合国际家庭、需要虹桥机场或火车站通达、更安静小区和西区通勤的人。",
    profilePudongCopy: "适合浦东办公、家庭社区、更大住房、公园，以及需要更方便前往浦东机场的人。",
    profileHuangpuCopy: "适合喜欢步行城市生活、历史街区、夜生活、餐厅和非常中心位置的人，但通常要接受户型取舍。",
    profileMinhangCopy: "适合重视更大空间、学校驱动搬家、郊区社区，并能接受离市中心更远的家庭。",
    tagCentral: "市中心",
    tagMetro: "地铁便利",
    tagFirstTimers: "新手友好",
    tagLeafy: "梧桐街区",
    tagCafes: "咖啡馆",
    tagSchools: "学校",
    tagFamilies: "家庭",
    tagHongqiao: "虹桥",
    tagCompounds: "小区配套",
    tagBusiness: "商务",
    tagParks: "公园",
    tagPVG: "浦东机场",
    tagWalkable: "适合步行",
    tagDining: "餐饮",
    tagHeritage: "历史街区",
    tagSpace: "空间更大",
    tagSuburban: "郊区",
    tagValue: "性价比",
    checklistEyebrow: "看房清单",
    checklistTitle: "签约前先检查日常生活细节",
    checklistCopy: "漂亮的房子也可能不适合你，尤其是通勤、噪音或证件流程很麻烦时。",
    checkOneTitle: "测试通勤",
    checkOneCopy: "按真实出行时间跑一遍路线，包括从地铁站或小区门口步行的时间。",
    checkTwoTitle: "确认日常采购",
    checkTwoCopy: "检查超市、药房、外卖覆盖、健身房、咖啡馆、公园，以及夜间打车是否方便。",
    checkThreeTitle: "确认文件流程",
    checkThreeCopy: "询问租约条款、发票、住宿登记支持、水电网、维修责任和中介费。",
    areasSourcesCopy:
      "本指南使用 Shanghai Connect 来源地图确定区域范围，并参考外籍人士住宿指南中的新人常见关注点。这是实用精选清单，不是租金价格数据库。",
    areasOfficialSource: "住宿指南参考",
    heroStartCta: "初来上海？从这里开始 →",
    stageSelectorLabel: "你现在在哪个阶段？",
    stageArriving: "即将抵达",
    stageJustArrived: "刚刚到达",
    stageSettlingIn: "正在安顿"
  }
};

let locale = "en";
let activeCategory = "all";
let searchQuery = "";

const grid = document.querySelector("#guide-grid");
const searchInput = document.querySelector("#guide-search");
const languageToggle = document.querySelector(".language-toggle");
const header = document.querySelector(".site-header");

function updateCopy() {
  document.documentElement.lang = locale;
  const languageLabel = document.querySelector("[data-lang-label]");
  if (languageLabel) {
    languageLabel.textContent = locale === "en" ? "中文" : "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = copy[locale][node.dataset.i18n];
    if (value) {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = copy[locale][node.dataset.i18nPlaceholder];
    if (value) {
      node.placeholder = value;
    }
  });
}

function guideMatches(guide) {
  const inCategory = activeCategory === "all" || guide.category === activeCategory;
  const haystack = [
    guide.title.en,
    guide.title.zh,
    guide.summary.en,
    guide.summary.zh,
    guide.category,
    ...guide.tags
  ]
    .join(" ")
    .toLowerCase();

  return inCategory && haystack.includes(searchQuery.toLowerCase());
}

function renderGuides() {
  if (!grid) {
    return;
  }

  const visibleGuides = guides.filter(guideMatches);

  if (!visibleGuides.length) {
    grid.innerHTML = `<article class="guide-card"><p>${copy[locale].noResults}</p></article>`;
    return;
  }

  grid.innerHTML = visibleGuides
    .map(
      (guide) => `
        <article class="guide-card">
          ${guide.link ? `<a href="${guide.link}" class="guide-card-link" aria-label="${guide.title[locale]}"></a>` : ""}
          ${guide.image ? `<img class="guide-card-img" src="${guide.image}" alt="${guide.title[locale]}" loading="lazy" />` : ""}
          <div>
            <span class="card-kicker">${guide.meta[locale]}</span>
            <h3>${guide.title[locale]}</h3>
            <p>${guide.summary[locale]}</p>
          </div>
          <div class="card-tags">
            ${guide.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
  renderGuides();
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => setCategory(chip.dataset.category));
});

const searchPanel = document.querySelector(".search-panel");
if (searchPanel && searchInput) {
  searchPanel.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery = searchInput.value.trim();
    renderGuides();
    document.querySelector("#starter-pack")?.scrollIntoView({ block: "start" });
  });

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim();
    renderGuides();
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    locale = locale === "en" ? "zh" : "en";
    updateCopy();
    renderGuides();
  });
}

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector("button").textContent = locale === "en" ? "Joined" : "已加入";
  });
}

function updateHeader() {
  if (header) {
    header.dataset.elevated = window.scrollY > 20 ? "true" : "false";
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });

// Pre-filter from URL param (e.g. ?category=transport)
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get("category");
if (categoryParam && ["apps", "transport", "housing", "daily-life"].includes(categoryParam)) {
  activeCategory = categoryParam;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === categoryParam);
  });
}

// Handle internal category-filter links without page reload
document.querySelectorAll("a[href^='?category=']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const raw = link.getAttribute("href");
    const [query, hash] = raw.split("#");
    const cat = new URLSearchParams(query).get("category");
    if (cat) setCategory(cat);
    const target = hash ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

updateCopy();
renderGuides();
updateHeader();
