<!--
 * @Author: zhangyang
 * @Date: 2022-01-18 14:28:36
 * @LastEditTime: 2022-06-16 11:32:39
 * @Description: 文章列表
-->
<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { NButton, NCard, NImage, NTime } from 'naive-ui'

const props = withDefaults(defineProps<{
  isList?: boolean
}>(), ({ isList: false }))

const page = ref(0)
const hasMore = ref(props.isList)
const allData = ref<ParsedContent[]>([])

const getList = async () => {
  const data = await queryContent()
    .sort({ date: -1 })
    .skip(page.value * 10)
    .limit(10)
    .find()
  if (data.length)
    allData.value.push(...data)
  else
    hasMore.value = false

  if (props.isList)
    page.value++
}

await getList()
</script>

<template>
  <div class="list">
    <div
      v-for="(item, index) in allData"
      :key="index"
      class="item"
    >
      <NCard class="my-4 rounded" :title="item.title" hoverable @click="$router.push(item._path as string)">
        <template v-if="isList === false" #cover>
          <NImage :src="item.image ?? '/img/default.jpg'" fallback-src="/img/default.jpg" object-fit="fill" @click.prevent="null" />
        </template>
        {{ item.description }}
        <template #action>
          <NTime :time="new Date(item.date)" format="yyyy年MM月dd日 kk:mm:ss" />
        </template>
      </NCard>
    </div>
    <NButton v-if="hasMore" block @click="getList">
      More...
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.list {
  @apply w-49/50 lg:w-1/3;

  .item {
    @apply first:mt-10 hover:cursor-pointer;
  }
}
</style>
