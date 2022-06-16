---
title: ElementUI 相关
description: ElementUI 相关
date: 2022-03-07 11:42:25
---


## 模拟点击事件

> **使用 Element UI 编写的组件，无法直接通过获取元素 + `.click()` 触发点击事件**

### 源代码

```js
// https://github.com/ElemeFE/element/blob/dev/test/unit/util.js
/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
const triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

/**
 * 触发 “mouseup” 和 “mousedown” 事件
 * @param {Element} elm
 * @param {*} opts
 */
const triggerClick = function(elm, ...opts) {
  triggerEvent(elm, 'mousedown', ...opts);
  triggerEvent(elm, 'mouseup', ...opts);

  return elm;
};

let btnDecrease = document.querySelector('.el-input-number__decrease');
// https://github.com/ElemeFE/element/blob/dev/test/unit/specs/input-number.spec.js#L128
// 触发点击事件，需要下面两个方法连续执行！！！
// 点击元素
triggerEvent(btnDecrease, 'mousedown');
// 点击事件冒泡到 document
triggerClick(document, 'mouseup');
```