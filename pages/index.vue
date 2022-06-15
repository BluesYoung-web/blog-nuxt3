<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 10:54:23
 * @LastEditTime: 2022-06-15 15:58:56
 * @Description: 
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})
</script>
<template>
  <main id="main-content">
    <DocList />
    <MyCard class="card my-card" />
    <MyDoc class="card my-doc" />
  </main>
</template>

<style lang="scss" scoped>
#main-content {
  @apply w-full min-h-100vh flex justify-center relative;

  .card {
    @apply absolute <lg:hidden lg:right-2 xl:right-20 2xl:right-60;
  }
  .my-card {
    @apply top-10;
  }
  .my-doc {
    @apply top-90;
  }
}
</style>
