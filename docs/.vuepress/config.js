module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
   // theme:'foo'
   themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', 
        link: '/guide/',
        items:[
            {
                text:'home',
                link:'/guide/'
            },
            {
                text:'first',
                link:'/guide/first'
            },{
                text:'secode',
                link:'/guide/second'
            },{
                text:'third',
                link:'/guide/third'
            },{
                text:'docs',
                link:'/guide/docs1'
            }
        ] },
      { text: 'Github', link: 'https://github.com/vuejs/vuepress' },
    ],
    sidebar:{
        '/guide/':[
            '','first','second','third','docs1'
        ]
    }
  }
}