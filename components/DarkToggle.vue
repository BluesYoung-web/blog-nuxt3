<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-15 14:32:59
 * @Description: 
-->
<script setup lang="ts">
const color = useColorMode();

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
