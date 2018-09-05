//自动生成结构 但是需要给文件的名称添加国际化内容
let locales = require('./utils')

module.exports = {
  // host: '172.21.64.75',
  base: '/vuepress-demo/',
  theme: 'craftdocs',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon-16x16.png', sizes: '16*16' }]
  ],
  title: 'Help Docs',
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
    codeLanguages: {
      js: 'javascript',
      html: 'html',
      vue: 'vue',
      java: 'java',
      sql: 'sql'
    },
    displayAllHeaders: true,
    sidebarDepth: 3,
    locales: locales
  },
  markdown: {
    anchor: { level: [2, 3] },
    config(md) {
      let markup = require('vuepress-theme-craftdocs/markup')
      md.use(markup)
    }
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
    }
  }
}
