<!--
 * @Author: zhangyang
 * @Date: 2022-01-10 16:16:14
 * @LastEditTime: 2022-06-16 14:45:32
 * @Description: 
-->
<script lang="ts" setup>
import PlumBg from '~/components/PlumBg.vue';
import { NConfigProvider, darkTheme, NMenu } from 'naive-ui';
import type { TocItem } from '~/pages/[...slug].vue';
const color = useColorMode();

const router = useRouter();
const content = ref<HTMLDivElement>();

const navigate = () => {
  if (location.hash) {
    const target = document.querySelector(decodeURIComponent(location.hash));
    target?.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleAnchors = (event: MouseEvent & { target: HTMLElement }) => {
  const link = event.target.closest('a');
  // const menu = document.querySelector('.table-of-contents');
  if (
    //  文章标题锚点
    link?.className === 'router-link-active router-link-exact-active'
    // ||
    // @ts-ignore 菜单锚点
    // Array.from(event.path).some((ele) => ele === menu)
    ) {
    const url = new URL(`${link?.href ?? location.href}`);
    event.preventDefault();
    const { pathname, hash } = url;
    if (hash && (!pathname || pathname === location.pathname)) {
      window.history.replaceState({}, '', hash);
      navigate();
    }
    else {
      router.push({ path: pathname, hash });
    }
  }
};

onMounted(() => {
  useEventListener(window, 'hashchange', navigate);
  useEventListener(content.value!, 'click', handleAnchors, { passive: false });

  navigate();
  setTimeout(navigate, 500);
});
const title = ref('');
const setTitle = (e: string) => {
  title.value = e;
};

const tocTree = ref<TocItem[]>([]);
const setToc = (e: TocItem[]) => {
  tocTree.value = e;
};

const navHandler = (key: string) => {
  window.history.replaceState({}, '', `#${key}`);
  navigate();
};
</script>
<template>
  <NConfigProvider :theme="color.value === 'dark' ? darkTheme : undefined">
    <div class="main">
      <Header class="dark:text-gray-100" />
      <div class="container">
        <article ref="content" class="artical">
          <h1 v-if="title" class="text-3xl text-center mb-5">{{ title }}</h1>
          <NuxtPage
            class="prose prose-sm m-auto text-left"
            @change-title="setTitle"
            @change-toc="setToc"
          />
        </article>
      </div>
      <div
        v-if="tocTree.length"
        class="hidden lg:block fixed right-20 w-100 top-100px max-h-200 overflow-y-scroll"
      >
        <NMenu
          key-field="id"
          label-field="text"
          :options="tocTree"
          default-expand-all
          @update-value="navHandler"
        />
      </div>
      <Footer />
      <ScrollTop :show="120" />
      <PlumBg />
    </div>
  </NConfigProvider>
</template>

<style lang="scss" scoped>
.main {
  @apply w-full ;

  .container {
    @apply w-49/50 lg:w-2/5 pt-20 pb-8 m-auto;
  }
  .artical {
    @apply text-gray-700 dark:text-gray-100 min-h-78vh;
  }
}
</style>