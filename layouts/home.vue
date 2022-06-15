<!--
 * @Author: zhangyang
 * @Date: 2022-01-16 14:16:48
 * @LastEditTime: 2022-06-15 16:14:20
 * @Description: 
-->
<script lang="ts" setup>
const { nav } = useConfig();
const scorll = () => {
  const { offsetTop } = document.querySelector('#main-content') as HTMLElement;
  window.scrollTo({
    top: offsetTop || 0,
    behavior: 'smooth'
  });
};
</script>
<template>
  <div class="main">
    <div class="header">
      <Header />
      <div class="h-full flex flex-col justify-center items-center">
        <p class="text-2xl font-bold mb-1 lg:text-4xl">{{ nav.title }}</p>
        <OneSay class="text-xl lg:text-2xl text-center" />
      </div>
      <div class="down">
        <div class="i-ri-arrow-down-s-line icon" @click="() => scorll()" />
      </div>
    </div>
    <NuxtPage />
    <Music />
    <Footer />
    <ScrollTop />
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply text-gray-50 dark:text-purple-500;
}
.header {
  background-image: url('/img/poster-filter.png'), linear-gradient(60deg, rgba(255, 165, 150, 0.5) -6%, rgba(0, 228, 255, 0.35)), url('/img/goldenmeili.png');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #49b1f5;
  background-position: center;
  @apply w-full h-100vh transition-all duration-500;
  .down {
    @apply absolute bottom-2 w-full text-center z-1 font-bold text-4xl;
    
    @keyframes icon-jump {
      0% {
        opacity: 0.4;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
      100% {
        opacity: 0.4;
        transform: scale(0.8)
      }
    }
    .icon {
      animation: icon-jump 2s infinite ease-in-out;
      @apply hover:cursor-pointer m-auto;
    }
  }
}
</style>
