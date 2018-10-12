# vuepress-demo

[![Build Status](https://img.shields.io/travis/xubowenjx/vuepress-demo.svg)](https://travis-ci.org/xubowenjx/vuepress-demo)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## 注意

修改主题文件包中的 `config.styl` 文件内容,加上这一段在头部:

```styl
@import '~@temp/override.styl
```

## 如何打包成 jar 包

注意`config.js`文件的`base`属性, 需要注意部署上线的基本路径和 jar 包基本路径，如：`amber2_server/docs`,
运行打包命令后将 dist 文件夹内的文件复制到 java 工程的 face 目录下，将 index.html 改成 index.jsp 并禁用 EL 表达式。加上下面这段代码：

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="true" %>
```

## 修改默认展示语言类型

根节点`/`为展示的默认语言，其他的则需要加上语言的路径如：`/en/`,
在`docs`文件夹下，带语言的就是其他语言的资源，不带的就是根路径的。因此如果需要将英文的修改成默认的，则需要将原来其他的内容复制到所属语言下去，将英文的复制到根下（以 docs 为根）
修改`docs\.vuepress\utils\default-language.js`内的对应属性

## 将 word（要求 docx）转化为 md 文件

控制台运行下面的命令,将把`word`文件下的 word 文件进行转化，可以运行`word\del-md.bat`删除`word`文件夹下的 md 文件

```bash
npm run docx
```

## ls-loader

这个 loader 工具使得你在 docx 中可以使用下面的语法
在本文件中添加超链接将其他文件的内容进行引用，使得在 web 上可以直接进行访问

```code
[描述](文件的相对路径#具体的章节)
```
