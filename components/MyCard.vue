<!--
 * @Author: zhangyang
 * @Date: 2022-01-20 14:33:40
 * @LastEditTime: 2022-06-15 16:23:37
 * @Description: 个人卡片
-->
<script lang="ts" setup>
import { NCard, NImage } from 'naive-ui';

const { nav, intro } = useConfig();
const sendMail = () => {
  const a = document.createElement('a');
  a.href = nav.mail_addr;
  a.click();
};
</script>

<template>
  <div class="main">
    <NCard hoverable>
      <div class="container">
        <NImage src="/img/lufei_siwangningshi.jpg" :width="120" class="img" />
        <p class="title">{{ intro.author }}</p>
        <p class="intro">{{ intro.say }}</p>
        <div class="btn" :title="nav.mail_addr" @click="sendMail">
          <div class="i-mdi-light-email mr-1" />
          <div>{{ nav.mail }}</div>
        </div>
      </div>
    </NCard>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply w-80;
  .container {
    @apply flex flex-col justify-center items-center;

    .img {
      will-change: transform;
      @apply rounded-full transform hover:rotate-360 transition duration-1000;
    }

    .title {
      @apply text-lg font-bold my-1;
    }

    .intro {
      @apply text-sm font-thin;
    }


    .btn {
      @apply flex justify-center items-center w-7/8 mt-4 px-4 py-1 rounded inline-block bg-sky-600 text-white cursor-pointer hover:bg-sky-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
    }
  }
}
</style>