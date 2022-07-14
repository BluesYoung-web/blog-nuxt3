<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-16 12:21:42
 * @Description:
-->
<script setup>
const { nav } = useConfig()
useHead({
  title: nav.title,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/styles/main.css';
</style>
