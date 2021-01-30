module.exports = {
  theme:"antdocs",
  title: "Yexi Docs",
  description: "好教程就在夜夕文库",
  base: "/docs/",
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
    lastUpdated: "夜夕樱落的Github",
    repo: "https://github.com/tangyuanpro",
    editLinks: false,
  },
};
