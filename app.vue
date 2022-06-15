<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-15 16:12:46
 * @Description: 
-->
<script setup>
import { NConfigProvider, darkTheme } from 'naive-ui';
const color = useColorMode();

const { nav } = useConfig();
useHead({
  title: nav.title,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.svg',
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NConfigProvider :theme="color === 'dark' ? darkTheme : undefined">
      <NuxtPage />
    </NConfigProvider>
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/styles/main.css';
</style>
