<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 16:38:45
 * @LastEditTime: 2022-06-15 20:00:02
 * @Description: 
-->
<script lang="ts" setup>
import { NTag } from 'naive-ui';
const { nav } = useConfig();
</script>
<template>
  <div text-2xl font-bold my-4>❤️ 关于本人</div>
  <div flex my-4 text-xl font-bold>
    <div class="i-flat-color-icons-contacts" />
    <div ml-1>联系方式</div>
  </div>

  <ul>
    <li>
      <a :href="nav.mail_addr" :title="nav.mail">
        <div class="contact-item">
          <div i-noto-open-mailbox-with-raised-flag></div>
          <div ml-1>{{ nav.mail_addr.slice(7) }}</div>
        </div>
      </a>
    </li>
    <li>
      <a target="_blank" :title="nav.gitee" :href="nav.gitee_addr">
        <div class="contact-item">
          <div class="i-simple-icons-gitee text-sm" />
          <div ml-1>{{ nav.gitee_addr }}</div>
        </div>
      </a>
    </li>
    <li>
      <a target="_blank" :title="nav.github" :href="nav.github_addr">
        <div class="contact-item">
          <div class="i-ci-github" />
          <div ml-1>{{ nav.github_addr }}</div>
        </div>
      </a>
    </li>
  </ul>

  <div flex my-4 text-xl font-bold>
    <div class="i-fxemoji-notepage" />
    <div ml-1>简介</div>
  </div>

</template>

<style lang="scss" scoped>
a {
  @apply flex;
  .contact-item {
    @apply flex my-2;
  }
}
</style>