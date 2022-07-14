<!--
 * @Author: zhangyang
 * @Date: 2022-01-10 16:16:14
 * @LastEditTime: 2022-06-15 12:15:59
 * @Description:
-->
<script setup lang="ts">
const { nav } = useConfig()
</script>

<template>
  <footer class="footer">
    &copy;2022 - Current &nbsp;&nbsp; By <a :href="nav.gitee_addr" target="_blank">BluesYoung-web</a>
    <br>
    Powerd By <a href="https://github.com/antfu/vitesse-nuxt3" target="_blank">Vitesse</a>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply w-full text-center text-gray-600 py-6;
}
</style>
