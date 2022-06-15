<!--
 * @Author: zhangyang
 * @Date: 2022-01-17 16:46:09
 * @LastEditTime: 2022-03-09 16:41:08
 * @Description: 纵向展示
-->
<script lang="ts" setup>
type Item = {
  title: string;
  time: string;
  img?: string;
} | string;

interface Props {
  title: string;
  data: Item[];
};

defineProps<Props>();
</script>

<template>
  <div>
    <NTimeline size="large">
      <NTimelineItem type="info">
        <div class="text-2xl">{{ title }}</div>
      </NTimelineItem>
      <NTimelineItem v-for="(item, index) in data" :key="index" type="info">
        <div v-if="typeof item === 'string'" v-html="item" />
        <div v-else>{{ item }}</div>
      </NTimelineItem>
    </NTimeline>
  </div>
</template>

<style lang="scss" scoped>

</style>