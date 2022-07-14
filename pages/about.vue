<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 16:38:45
 * @LastEditTime: 2022-06-16 10:57:00
 * @Description:
-->
<script lang="ts" setup>
import { NTag } from 'naive-ui'
const { nav } = useConfig()
</script>

<template>
  <div>
    <h1>❤️ 关于本人</h1>
    <div class="title">
      <div class="i-flat-color-icons-contacts" />
      <div ml-1>
        联系方式
      </div>
    </div>

    <div>
      <a :href="nav.mail_addr" :title="nav.mail">
        <div class="contact-item">
          <div i-noto-open-mailbox-with-raised-flag />
          <div ml-1>{{ nav.mail_addr.slice(7) }}</div>
        </div>
      </a>
    </div>
    <div>
      <a target="_blank" :title="nav.gitee" :href="nav.gitee_addr">
        <div class="contact-item">
          <div class="i-simple-icons-gitee text-sm" />
          <div ml-1>{{ nav.gitee_addr }}</div>
        </div>
      </a>
    </div>
    <div>
      <a target="_blank" :title="nav.github" :href="nav.github_addr">
        <div class="contact-item">
          <div class="i-ci-github" />
          <div ml-1>{{ nav.github_addr }}</div>
        </div>
      </a>
    </div>

    <h2 class="title">
      <div class="i-fxemoji-notepage" />
      <div ml-1>
        简介
      </div>
    </h2>

    <p>🎓 2020 年毕业于武汉工程大学</p>
    <div>
      <NTag class="mr-2" type="success">
        三好学生
      </NTag>
      <NTag class="mr-2" type="warning">
        国家励志奖学金
      </NTag>
      <NTag class="mr-2" type="info">
        优秀毕业生
      </NTag>
    </div>

    <h2 class="title">
      <div>🔧</div>
      <div ml-1>
        技能
      </div>
    </h2>

    <p>🦸‍♂️ 熟悉 ES6+、Vue3，熟悉 TypeScript 的基本使用，<strong>习惯在 Linux 系统下工作</strong></p>
    <p>🦸‍♂️ 有中小型项目的独立开发及部署经验</p>
    <p>🦸‍♂️ 对功能模块化、组件封装及设计模式有一定的理解</p>
    <p>🦸‍♂️ 有过使用 docker 在树莓派上搭建服务器的经验</p>

    <div class="flex justify-center my-8 children:text-5xl children:not-last:mr-2">
      <div class="i-logos-javascript" />
      <div class="i-logos-html-5" />
      <div class="i-logos-css-3" />
      <div class="i-logos-vue" />
      <div class="i-logos-nodejs-icon" />
      <div class="i-logos-typescript-icon" />
    </div>

    <div class="flex justify-center mt-2 children:text-5xl children:not-last:mr-2">
      <div class="i-logos-raspberry-pi" />
      <div class="i-logos-linux-tux" />
      <div class="i-logos-nginx" />
      <div class="i-logos-docker-icon" />
    </div>

    <h2 class="title">
      <div>💻️</div>
      <div ml-1>
        工作经历
      </div>
    </h2>

    <p>🏢 武汉卓讯互动信息科技有限公司(2020 年 7 月 —— 至今)</p>

    <div>
      <div my-2>
        <strong>工作内容：</strong>
      </div>
      <ul class="list-disc">
        <li>后台管理系统及其相关的各种操作界面</li>
        <li>移动端游戏推广落地页(下载、唤端、微信支付)</li>
        <li>基于 webrtc 的低延时云钓鱼 APP(目前只实现了摄像头角度调节及内容实时播放)</li>
        <li>浏览器插件(替代人工，自动收集抖音开放平台的数据，并导出为 excel 文件)</li>
        <li>负责部分项目的代码审核，把控团队成员的代码质量以及将项目部署到开发服</li>
        <li>作为前端面试官考核面试者</li>
        <li>作为技术研究院成员负责基础框架的搭建及常用组件的封装(2022.03.21 至今)</li>
      </ul>
    </div>

    <div>
      <div my-2>
        <strong>成果：</strong>
      </div>
      <ul>
        <li>
          以 <a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">vue-element-admin</a> 为原型，
          搭建了开源项目 <a href="https://gitee.com/BluesYoung-web/admin-vue3-element3-vite2">admin-vue3-element3-vite2</a>
          并推动其在团队中的使用

          <ul>
            <li>从日常开发中以 Composition API 的形式抽象出多个可重用的代码块</li>
            <li>基于 ElementPlus 二次封装多个常用的组件，极大的提升了开发效率</li>
            <li>编写自动创建页面的 node 脚本，实现创建页面的同时自动生成前端路由，而且还拥有常用的页面模板代码可供选择</li>
            <li>编写自定义 vite 插件，通过 koa 中间件实现接口无感 mock</li>
          </ul>
        </li>
        <li>
          基于 Vue3 + Vant 搭建了拥有权限控制的移动端 SPA 模板
          <a href="https://gitee.com/BluesYoung-web/vue3-vant-app">vue3-vant-app</a>
        </li>
        <li>
          学到了微信 SDK 及 WebRTC 技术的基本使用
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-item {
  @apply flex my-2;
}

.title {
  @apply flex text-xl font-bold;
}
</style>
