module.exports = {
  theme:"antdocs",
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
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后一次编辑时间",
    repo: "https://github.com/tangyuanpro",
    editLinks: false,
  },
};
