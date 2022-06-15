<!--
 * @Author: zhangyang
 * @Date: 2022-01-10 16:16:14
 * @LastEditTime: 2022-01-25 09:56:21
 * @Description: 所有文章的布局
-->
<script lang="ts" setup>
</script>
<template>
  <div class="main">
    <Header class="dark:text-gray-100" />
    <div class="container">
      <article class="artical">
        <router-view />
      </article>
    </div>
    <Footer />
    <ScrollTop :show="120" />
    <PlumBg />
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply w-full ;

  .container {
    @apply w-full pt-20 pb-8 m-auto;
  }
  .artical {
    @apply text-gray-700 dark:text-gray-100 min-h-78vh;
  }
}
</style>