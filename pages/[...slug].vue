<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-16 09:53:54
 * @Description: 
-->
<script lang="ts" setup>
const route = useRoute();
const doc = await queryContent(route.path).findOne();

const emit = defineEmits<{
  (e: 'change-title', v: string): void;
}>();
emit('change-title', doc.title ?? '');
</script>
<template>
  <div>
    <ContentDoc />
  </div>
</template>
