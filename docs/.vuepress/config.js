module.exports = {
    host: '172.21.64.75',
    base: '/vuepress-demo/',
    evergreen: true,
    head: [['link', { rel: 'icon', href: '/logo.ico' }]],
    title: 'Hello',
    dest: 'dist',
    description: 'Just playing around',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress-zh',
            description: '中文首页描述内容'
        },
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Just playing around'
        }
    },
    // theme:'foo'
    themeConfig: {
        locales: {
            '/': {
                selectText: '语言',
                label: '中文',
                editLinkText: '编辑此页面内容',
                algolia: {},
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '指南',
                        link: '/guide/',
                        items: [
                            {
                                text: '首页',
                                link: '/guide/'
                            },
                            {
                                text: '第一个界面',
                                link: '/guide/first'
                            },
                            {
                                text: '第二个节目',
                                link: '/guide/second'
                            },
                            {
                                text: '第三个界面',
                                link: '/guide/third'
                            },
                            {
                                text: '文档',
                                link: '/guide/docs1'
                            }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com/vuejs/vuepress' },
                   
                ],
                sidebar: {
                    '/guide/': ['', 'first', 'second', 'third', 'docs1']
                }
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                algolia: {},
                nav: [
                    { text: 'Home', link: '/en/' },
                    {
                        text: 'Guide',
                        link: '/guide/',
                        items: [
                            {
                                text: 'home',
                                link: '/en/guide/'
                            },
                            {
                                text: 'first',
                                link: '/en/guide/first'
                            },
                            {
                                text: 'secode',
                                link: '/en/guide/second'
                            },
                            {
                                text: 'third',
                                link: '/en/guide/third'
                            },
                            {
                                text: 'docs',
                                link: '/en/guide/docs1'
                            }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com/vuejs/vuepress' }
                ],
                sidebar: {
                    '/en/guide/': ['', 'first', 'second', 'third', 'docs1']
                }
            }
        }
    }
}
