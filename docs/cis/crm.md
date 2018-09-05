---
split: true
---

# CRM <Badge text="重要模块"/>

```html {3}
<i-over>
  <span slot="box">hellow</span>
  <span slot="popover">hellow popover</span>
</i-over>
```

::: tip 温馨提示
`CRM`是 CIS 系统中的重要一员
:::

```html
<i-table :heads="[{name:'name',text:'名称'},
                {name:'age',text:'年龄'}]"
         :body="[{name:'徐博文',age:'22'},
                {name:'系纪念品',age:'21'}]">
</i-table>
```

---

<div>
<i-over>
  <span slot="box">hellow</span>
  <span slot="popover">hellow popover</span>
</i-over>
</div>
<div>
<i-table :heads="[{name:'name',text:'名称'},{name:'age',text:'年龄'}]"
         :body="[{name:'徐博文',age:'22'},{name:'系纪念品',age:'21'}]">
</i-table>
</div>
