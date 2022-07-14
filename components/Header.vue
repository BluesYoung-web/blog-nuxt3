<!--
 * @Author: zhangyang
 * @Date: 2022-01-17 11:24:16
 * @LastEditTime: 2022-06-15 15:28:02
 * @Description: 头部导航栏组件
-->
<script lang="ts" setup>
import { isClient } from '@vueuse/core'
const { nav } = useConfig()
const { directions, y } = useScroll(isClient ? window : null)
const { top, bottom } = toRefs(directions)
const isScrollUp = ref(false)
watchEffect(() => {
  if (top.value)
    isScrollUp.value = true
  else if (bottom.value || y.value === 0)
    isScrollUp.value = false
})
</script>

<template>
  <nav class="nav" :class="{ up: isScrollUp }">
    <div class="left">
      <a href="/">{{ nav.title }}</a>
    </div>
    <div class="right">
      <a class="item" href="/blogs" :title="nav.doc">
        <div class="i-ic-round-menu-book" />
        <span>{{ nav.doc }}</span>
      </a>
      <a class="item" href="/about" :title="nav.love">
        <div class="text-sm i-noto-heart-suit" />
        <span>{{ nav.love }}</span>
      </a>
      <a class="item" target="_blank" :title="nav.gitee" :href="nav.gitee_addr">
        <div class="i-simple-icons-gitee text-sm" />
        <span>{{ nav.gitee }}</span>
      </a>
      <a class="item" target="_blank" :title="nav.github" :href="nav.github_addr">
        <div class="i-ci-github" />
        <span>{{ nav.github }}</span>
      </a>
      <DarkToggle class="item" />
      <!-- <a class="item" :title="button.toggle_langs" @click="toggleLocales()">
        <carbon-language />
      </a> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.up {
  position: fixed !important;
  @apply bg-white opacity-90 top-0 @light:text-gray-900 dark:bg-gray-500 @dark:text-purple-500;
}
.nav {
  @apply flex w-full font-bold text-sm lg:text-lg py-5 px-8 absolute z-1 transition duration-100 ease-linear;

  .left {
    @apply w-3/5;
  }
  .right {
    @apply w-2/5 flex justify-end text-base font-normal;
    .item {
      @apply flex justify-center items-center ml-3 lg:ml-5 hover:cursor-pointer;
      span {
        @apply hidden lg:inline-block lg:text-base;
      }
    }
  }
}
</style>
