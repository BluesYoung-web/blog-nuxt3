/*
 * @Author: zhangyang
 * @Date: 2022-01-16 16:04:50
 * @LastEditTime: 2022-06-15 12:23:14
 * @Description: 音乐播放器
 */
import 'aplayer/dist/APlayer.min.css'
import './styles/music.scss'

export default defineComponent({
  setup() {
    const { music } = useConfig()
    onMounted(async () => {
      // 确保到了浏览器端挂在的时候再动态载入，解决编译报错
      const APlayer = await (await import('aplayer')).default
      const res = await fetch(`${music.api}?server=${music.server}&type=${music.type}&id=${music.id}&r=${Math.random()}`)
      const conf = await res.json()
      const mountTarget = document.querySelector('#young-player')
      mountTarget && new APlayer({
        container: mountTarget,
        fixed: true,
        mini: true,
        audio: conf,
        lrcType: 3,
      })
    })
    return () => (
      <div id="young-player"></div>
    )
  },
})
