---
title: CSS 相关
description: CSS 相关
date: 2021-12-09 17:42:25
---

[[toc]]

## 移动端拖动不跟手

PC 端的拖动非常流畅，但是切换到移动端之后就会断触(只能移动一小段距离，之后就不再跟手)


```css
.el {
  /* 禁用默认的触摸事件，移动端的拖动就恢复正常了 */
  touch-action: none;
}
```

## 点击穿透

### 具体场景

- A 元素在 B 元素上层
- B 元素需要处理各种鼠标事件
- A 元素需要在除了 B 元素所在位置的其他元素处理鼠标事件

### 解决方案

- **给 A 元素添加 CSS 属性(`pointer-events: none;`)** ，实现**点击 A 穿透到 B**
- **给 A 元素中需要处理鼠标事件的元素添加 `pointer-events: all;` 属性**，恢复需要处理事件的元素处理事件的能力
- JS 阻止点击穿透，`event.stopPropagation()`

```scss
.A {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  .A1, .A2 {
    pointer-events: all;
  }
}
.B {
  position: absolute;
  z-index: 2;
}
```

