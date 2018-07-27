---
title: Second page
author: xubowen
---
# Second page
::: tip
在markdown中使用Vue组件
:::
### template
```vue
<template>
  <div class="root">
      <table>
        <thead>
          <th v-for="(h,index) in thead" :key="h.name">{{h.text}}</th>
        </thead>
        <tbody>
          <tr v-for="(data,index) in tbody" :key="index">
            <td v-for="(h1,idx) in thead" :key="index+idx">{{data[h1.name]}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</i-table>
</template>
<script>
export default {
  name: "i-table",
  props: {
    heads: {
      type: Array,
      required: true
    },
    body: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      thead: this.heads,
      tbody: this.body
    };
  }
};
</script>

```
### use in md file
```html
<i-table 
    :heads="[
        {name:'name',text:'名称'},
        {name:'age',text:'年龄'},
        {name:'addr',text:'地址'}
        ]"
    :body="[
        {name:'徐博文',age:12,addr:'wuxi'},
        {name:'徐博文1',age:22,addr:'wuxi1'},
        {name:'徐博文2',age:22,addr:'wuxi2'}
        ]"
>
</i-table>
```
### render as this

<i-table 
:heads="[{name:'name',text:'名称'},{name:'age',text:'年龄'},{name:'addr',text:'地址'}]"
:body="[{name:'徐博文',age:12,addr:'wuxi'},{name:'徐博文1',age:22,addr:'wuxi1'},{name:'徐博文2',age:22,addr:'wuxi2'}]"
>
</i-table>
<i-over>
  <div slot="box">dsdfdfdsg</div>
  <div slot="popover">4325reqraf</div>
</i-over>
<span style="width:200px;display:inline-block;"></span>
<i-over>
  <div slot="box">dasdsafad</div>
  <div slot="popover">gsdgdsgs</div>
</i-over>
