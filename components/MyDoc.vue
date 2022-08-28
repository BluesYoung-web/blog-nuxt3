<!--
 * @Author: zhangyang
 * @Date: 2022-01-20 14:33:40
 * @LastEditTime: 2022-08-28 10:03:50
 * @Description: 文章目录
-->
<script lang="ts" setup>
import { NCard, NInput, NSpace, NTree } from 'naive-ui'
import type { DocTree } from '~/server/api/dirs'
const router = useRouter()
const { intro } = useConfig()
const { data } = await useLazyFetch('/api/dirs')
const pattern = ref('')

const jump = (_: any, [v, ...__]: DocTree[]) => {
  if (v.path)
    router.push(v.path as string)
}
</script>

<template>
  <div class="main">
    <NCard hoverable>
      <div class="container">
        <p class="title">
          {{ `${intro.doc_toc}(${data?.total ?? 0})` }}
        </p>
        <div class="data">
          <n-space vertical :size="12" class="w-80">
            <n-input v-model:value="pattern" :placeholder="intro.search" />
            <n-tree
              :pattern="pattern"
              :data="data?.tree || []"
              block-line
              class="max-h-120 overflow-auto"
              :on-update:selected-keys="jump"
            />
          </n-space>
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

    .title {
      @apply text-lg font-bold my-1;
    }

    .data {
      @apply flex justify-around w-full my-4;
    }
  }
}
</style>
