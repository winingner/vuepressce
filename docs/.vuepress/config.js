import { defaultTheme } from '@vuepress/theme-default'
export default ({
  title: '微控工业网关',
  description: '解释说明文档',
  plugins: ['fulltext-search'],
  theme: defaultTheme({
    logo: '/assets/img/tu.png',
    // 在这里进行配置
    navbar: [
        { text: '主页', link: '/' },
        { text: '导航', link: '/guide/' },
        { text: '链接', link: 'https://github.com/winingner/vuepressfour' }
      ],
    sidebar: [
        // 字符串 - 页面文件路径
        {text:'导航首页',link:'/guide/'},
        {text:'图形界面',link:'/graphic_pageone.md'}
    ],
  }),
})