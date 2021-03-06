---
title: 0-设计模式的基本原则
description: 0-设计模式的基本原则
date: 2022-04-03 16:05:41
image: /img/design-mode.jpeg
---


## 基本原则

### 单一职责

**一个对象(方法)只做一件事**

**相关的设计模式：**
- [代理模式](/notebook/design-patterns/03-proxy-mode)
- [迭代器模式](/notebook/design-patterns/04-iterator-mode)
- [生成器模式](/notebook/design-patterns/17-generator-mode)
- [单例模式](/notebook/design-patterns/01-singleton)
- [命令模式](/notebook/design-patterns/06-command-mode)
- [装饰器模式](/notebook/design-patterns/12-decorator-mode)
- [桥接模式](/notebook/design-patterns/19-bridge-mode)
- [访问者模式](/notebook/design-patterns/22-visitor-mode)

**优点：**
- 降低单个类或对象的复杂度
- 利于代码复用及单元测试
- 一个职责变更时不会影响其他职责

**缺点：**
- 增加代码复杂度
- 增加对象之间相互联系的难度

### 最少知道

**一个软件实体应当尽可能少的与其他实体发生相互作用，减少对象之间的联系**

**相关的设计模式：**
- [中介者模式](/notebook/design-patterns/11-mediator-mode)
- [外观模式](/notebook/design-patterns/20-appearance-mode)

### 开闭

**对扩展开放，对修改关闭**

在程序需要扩展时，不能去修改原有的代码

**使程序扩展性更好，易于维护和升级**

使用**接口**和**抽象类**

**相关的设计模式：**
- [发布订阅(观察者)模式](/notebook/design-patterns/05-observer-mode)
- [组合模式](/notebook/design-patterns/07-composite-mode)
- [模板方法模式](/notebook/design-patterns/08-template-mode)
- [策略模式](/notebook/design-patterns/02-strategy-mode)
- [代理模式](/notebook/design-patterns/03-proxy-mode)
- [责任链模式](/notebook/design-patterns/10-cor-mode)
- [状态模式](/notebook/design-patterns/13-state-mode)
- [适配器模式](/notebook/design-patterns/14-adapter-mode)
- [工厂模式](/notebook/design-patterns/15-factory-mode)
- [抽象工厂模式](/notebook/design-patterns/16-abstract-factory-mode)
- [原型模式](/notebook/design-patterns/18-prototype-mode)
- [备忘录模式](/notebook/design-patterns/21-memo-mode)

### 里氏替换

**任何基类可以出现的地方，其派生类一定可以出现**

只有当派生类完全替换掉基类，且原有的功能不受影响时，基类才能真正被复用

对实现抽象化的具体步骤的规范

### 依赖倒置

**针对接口编程，依赖抽象而非具体**

### 接口隔离

**使用多个隔离的接口，比使用单个接口要好，降低类之间的耦合度**

### 合成复用

**尽量采用合成/聚合的方式，而不是使用继承**

## 代码重构

合并重复的代码片段

把条件分支语句提炼成函数

合理使用循环

提前让函数退出代替嵌套条件分支

以对象传参替代过长的参数列表，尽量减少参数的数量

少用三元表达式

合理使用链式调用

分解大类型

使用 `return` 退出多重循环