# vuepress-demo

[![Build Status](https://img.shields.io/travis/xubowenjx/vuepress-demo.svg)](https://travis-ci.org/xubowenjx/vuepress-demo)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Notice

we should modify the theme `config.styl` file that:

```styl
@import '~@temp/override.styl
```

## package as a jar

U should check the config.js#base attrtibute , it must be like `ROOT_PATH/docs`,the `ROOT_PATH` depends on your server
when U build over and then
copy the file from dist to face , change the index.html to index.jsp
and disable the el expression

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="true" %>
```

## change a default lang

default language is zh-CN,if U want change another language as default, U should make a dir 'zh' and copy the original language sources
into it .
then copy the language you want souces outside .
change the default-language.js content as you want
the config.js#locales also should modify ,the default as '/',
