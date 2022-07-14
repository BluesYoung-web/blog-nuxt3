<!--
 * @Author: zhangyang
 * @Date: 2022-06-16 10:59:32
 * @LastEditTime: 2022-06-16 11:53:19
 * @Description:
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'blog',
})
</script>

<template>
  <main id="main-content">
    <DocList is-list />
    <MyDoc class="card my-doc" />
  </main>
</template>

<style lang="scss" scoped>
#main-content {
  @apply min-h-100vh flex justify-center;

  .card {
    @apply absolute <lg:hidden lg:right-2 xl:right-20 2xl:right-20;
  }
  .my-doc {
    @apply top-30;
  }
}
</style>
