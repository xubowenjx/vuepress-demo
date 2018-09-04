//自动生成结构 但是需要给文件的名称添加国际化内容
let locales = require('./utils')

module.exports = {
  // host: '172.21.64.75',
  //base: '/vuepress-demo/',
  evergreen: true,
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  title: 'Hello',
  dest: 'dist',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '帮助文档',
      description: '中文首页描述内容'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Help docs',
      description: 'Just playing around'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Help docs',
      description: 'Just playing around'
    }
  },
  // theme:'foo'
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 3,
    locales: locales
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
    }
  }
}
