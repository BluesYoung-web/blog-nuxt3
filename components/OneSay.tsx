/*
 * @Author: zhangyang
 * @Date: 2022-01-16 14:49:24
 * @LastEditTime: 2022-06-15 14:28:45
 * @Description: 一言
 */
interface OneSay {
  commit_from: string
  created_at: string
  creator: string
  creator_uid: number
  from: string | null
  from_who: string | null
  hitokoto: string
  id: number
  length: number
  reviewer: number
  type: string
  uuid: string
}

export default defineComponent({
  async setup() {
    const { one_say } = useConfig()
    const { data } = await useFetch(one_say.refresh)
    const sayObj = ref(data.value as OneSay)
    const refresh = async () => {
      const res = await (await fetch(one_say.refresh)).json()
      sayObj.value = res
    }
    const { copy, isSupported } = useClipboard()
    const copyContent = async () => {
      if (isSupported) {
        await copy(sayObj.value?.hitokoto ?? '')
        alert('已复制到剪切板')
      }
      else {
        alert('很遗憾，你的浏览器不支持该操作')
      }
    }
    const goDetail = () => {
      const a = document.createElement('a')
      a.setAttribute('target', '_blank')
      a.setAttribute('href', `${one_say.detail}${sayObj.value?.uuid}`)
      a.click()
    }
    const eventDiapatcher = (e: MouseEvent) => {
      switch (e.button) {
        case 0:
          refresh()
          break
        case 1:
          copyContent()
          break
        case 2:
          goDetail()
          break
        default:
          refresh()
          break
      }
    }

    return () => (
      <div
        className="hover:cursor-pointer"
        title="左键刷新，中键复制，右键跳转详情"
        onClick={eventDiapatcher}
        onAuxclick={eventDiapatcher}
        onContextMenu={e => e.preventDefault()}
      >
        <p>{ sayObj.value?.hitokoto ?? '' }</p>
        <p>
          <span style={{ display: sayObj.value ? 'inline' : 'none' }}>出自：</span>
          {
            `
              ${sayObj.value?.from ?? ''}
              ${sayObj.value?.from_who ? ` —— ${sayObj.value?.from_who}` : ''}
            `
          }
        </p>
      </div>
    )
  },
})
