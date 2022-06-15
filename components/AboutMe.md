# ❤️关于本人

## <flat-color-icons-contacts /> 联系方式

<script lang="ts" setup>
const { nav } = useConfig();
</script>

<a :href="nav.mail_addr" :title="nav.mail">📬 {{ nav.mail_addr.slice(7) }}</a>

<p>
  <a target="_blank" :title="nav.gitee" :href="nav.gitee_addr">
    <simple-icons-gitee class="text-sm" /> {{ nav.gitee_addr }}
  </a>
</p>

<p>
  <a target="_blank" :title="nav.github" :href="nav.github_addr">
    <ci-github /> {{ nav.github_addr }}
  </a>
</p>

## 📝 简介

🎓 2020 年毕业于武汉工程大学

<n-tag class="mr-2" type="success"> 三好学生 </n-tag>
<n-tag class="mr-2" type="warning"> 国家励志奖学金 </n-tag>
<n-tag class="mr-2" type="info"> 优秀毕业生 </n-tag>

## 🔧 技能

🦸‍♂️ 熟悉 ES6+、Vue3，熟悉 TypeScript 的基本使用，**习惯在 Linux 系统下工作**

🦸‍♂️ 有中小型项目的独立开发及部署经验

🦸‍♂️ 对功能模块化、组件封装及设计模式有一定的理解

🦸‍♂️ 有过使用 docker 在树莓派上搭建服务器的经验

<div class="text-center mt-8 children:text-5xl">
  <logos-javascript class="mr-2" />
  <logos-html-5 class="mr-2" />
  <logos-css-3 class="mr-2" />
  <logos-vue class="mr-2" />
  <logos-nodejs-icon class="mr-2" />
  <logos-typescript-icon />
</div>

<div class="text-center mt-2 text-5xl">
  <logos-raspberry-pi class="mr-2" />
  <logos-linux-tux class="mr-2" />
  <logos-nginx class="mr-2" />
  <logos-docker-icon class="mr-2" />
</div>

## 💻️ 工作经历

🏢 武汉卓讯互动信息科技有限公司(2020 年 7 月 —— 至今)

**工作内容：**
- 后台管理系统及其相关的各种操作界面
- 移动端游戏推广落地页(下载、唤端、微信支付)
- 基于 webrtc 的低延时云钓鱼 APP(目前只实现了摄像头角度调节及内容实时播放)
- 浏览器插件(替代人工，自动收集抖音开放平台的数据，并导出为 excel 文件)
- 负责部分项目的代码审核，把控团队成员的代码质量以及将项目部署到开发服
- 作为前端面试官考核面试者
- 作为技术研究院成员负责基础框架的搭建及常用组件的封装(2022.03.21 至今)

**成果：**
- 以 [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/) 为原型，搭建了开源项目 [admin-vue3-element3-vite2](https://gitee.com/BluesYoung-web/admin-vue3-element3-vite2) 并推动其在团队中的使用
  - 从日常开发中以 Composition API 的形式抽象出多个可重用的代码块
  - 基于 ElementPlus 二次封装多个常用的组件，极大的提升了开发效率
  - 编写自动创建页面的 node 脚本，实现创建页面的同时自动生成前端路由，而且还拥有常用的页面模板代码可供选择
  - 编写自定义 vite 插件，通过 koa 中间件实现接口无感 mock
- 基于 Vue3 + Vant 搭建了拥有权限控制的移动端 SPA 模板 [vue3-vant-app](https://gitee.com/BluesYoung-web/vue3-vant-app)
- 学到了微信 SDK 及 WebRTC 技术的基本使用
