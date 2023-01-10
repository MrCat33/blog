export default {
  title: 'MrCat',
  description: 'webSite Blog',
  base: '/blog',
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/MrCat33" }
    ]
  }
}
