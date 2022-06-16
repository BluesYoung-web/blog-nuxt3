<!--
 * @Author: zhangyang
 * @Date: 2022-06-15 08:59:22
 * @LastEditTime: 2022-06-16 14:04:57
 * @Description: 
-->
<script lang="ts" setup>
export type TocItem = {
  id: string;
  text: string;
  children?: TocItem[];
};

const route = useRoute();
const doc = await queryContent(route.path).findOne();

const emit = defineEmits<{
  (e: 'change-title', v: string): void;
  (e: 'change-toc', v: TocItem[]): void;
}>();
emit('change-title', doc.title ?? '');
emit('change-toc', doc?.body?.toc?.links ?? []);
</script>
<template>
  <div>
    <ContentDoc />
  </div>
</template>
