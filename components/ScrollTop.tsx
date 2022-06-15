/*
 * @Author: zhangyang
 * @Date: 2022-01-21 11:03:14
 * @LastEditTime: 2022-06-15 15:54:48
 * @Description: 回到顶部
 */
import { isClient } from '@vueuse/core';

export default defineComponent({
  props: {
    show: { type: Number, default: 720 }
  },
  setup(props) {
    const { button } = useConfig();
    const scorll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    const { y } = useScroll(isClient ? window : null);

    return () => (
      <>
        {
          y.value > props.show
            ? <div
                class="fixed right-2 bottom-2 lg:right-10 lg:bottom-10 text-2xl text-gray-400 dark:text-purple-500 hover:cursor-pointer"
                title={button.back_to_top}
                onClick={() => scorll()}
              >
                <div class="i-bi-arrow-up-circle" />
              </div>
            : null
        }
      </>
    )
  }
})