module.exports = {
  theme:"antdocs",
  title: "Yexi Docs",
  lang: zh-CN,
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
    lastUpdated: "帮助我们编辑文档",
    repo: "https://github.com/tangyuanpro",
    editLinks: false,
  },
};
