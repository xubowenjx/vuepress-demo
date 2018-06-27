---
home: true
heroImage: /bg.jpg
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
- title: 简单使用
  details: Vuepress使用起来十分的简单,只需简单的几个命令就可以搭建一个文档。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
# hello world
This is one demo :tada: :100:
## How to use  
```javascript
let config = require('./config.js');
let keyes = Object.keys(config);
for(let k of keyes){
    console.log(`${k} is ${keyes[k]}`);
}
```