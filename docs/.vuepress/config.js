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
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Yexi Docs',
      description: '技术 生活 二次元'
    }
  }
};
