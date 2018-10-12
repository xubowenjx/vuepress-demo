//自动生成结构 但是需要给文件的名称添加国际化内容
let locales = require('./utils')

module.exports = {
  //host: '172.21.64.35',
  // port: 8090,
  base: '/vuepress-demo/',
  //base: '/amber2_server/docs/',
  //base: '/help-docs/',
  theme: 'craftdocs',
  evergreen: true,
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/favicon-16x16.png', sizes: '16*16' }
    ],
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
  title: 'Help Docs',
  dest: 'dist',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '帮助文档1',
      description: '中文首页描述内容1'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Help docs'
      // description: 'Just playing around'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Help docs',
      description: 'Just playing around'
    }
  },
  // theme:'foo'
  themeConfig: {
    //collapsable:false,
    codeLanguages: {
      js: 'javascript',
      html: 'html',
      vue: 'vue',
      java: 'java',
      sql: 'sql'
    },
    sidebar: 'auto',
    displayAllHeaders: false,
    sidebarDepth: 3,
    locales: locales
  },
  markdown: {
    anchor: { level: [2, 3, 4] },
    config(md) {
      let markup = require('vuepress-theme-craftdocs/markup')
      md.use(markup)
    }
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
    }
  },
  //添加loader ,https://github.com/xubowenjx/ls-loader
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('ls-loader')
      .loader('ls-loader')
      .options({
        prepath: ''
      })
      .end()
  }
}
