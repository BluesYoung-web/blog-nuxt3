/*
 * @Author: zhangyang
 * @Date: 2022-01-16 14:49:24
 * @LastEditTime: 2022-08-28 10:02:01
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
    const { data: sayObj, refresh } = await useLazyFetch<OneSay>(one_say.refresh)
    const { copy, isSupported } = useClipboard()
    const copyContent = async () => {
      if (isSupported)
        await copy(sayObj.value?.hitokoto ?? '')
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

    // eslint-disable-next-line react/display-name
    return () => (
      <div
        className="hover:cursor-pointer"
        title="左键刷新，中键复制，右键跳转详情"
        onClick={eventDiapatcher}
        onAuxclick={eventDiapatcher}
        onContextMenu={(e: { preventDefault: () => any }) => e.preventDefault()}
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
