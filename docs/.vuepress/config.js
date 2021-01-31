module.exports = {
  theme:"antdocs",
  lang: "zh-Hans",
  title: "Yexi Docs",
  description: "技术 生活 二次元",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
              }
            }
          }
        },
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后一次编辑时间",
    repo: "https://github.com/tangyuanpro",
    editLinks: false,
  },
  locales: {	
    '/': {	
      lang: 'zh-Hans',	
      description: '技术 生活 二次元'	
    }	
  },
};
