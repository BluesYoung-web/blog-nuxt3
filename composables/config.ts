/*
 * @Author: zhangyang
 * @Date: 2022-06-15 12:10:34
 * @LastEditTime: 2022-06-15 12:15:23
 * @Description: 
 */
export const useConfig = () => ({
  button: {
    back: '返回',
    toggle_dark: '切换深色模式',
    toggle_langs: '切换语言',
    back_to_top: '回到顶部'
  },
  nav: {
    title: '小黑博客',
    doc: '文章',
    love: '关于',
    gitee: 'Gitee',
    github: 'GitHub',
    gitee_addr: 'https://gitee.com/BluesYoung-web',
    github_addr: 'https://github.com/BluesYoung-web',
    mail: '邮箱联系',
    mail_addr: 'mailto:bluesyoung_web@163.com'
  },
  intro: {
    author: 'BluesYoung-web',
    say: '沉迷代码，无法自拔',
    doc_toc: '文章目录',
    search: '搜索'
  },
  not_found: '未找到页面',
  music: {
    api: 'https://api.i-meto.com/meting/api',
    // # 目前为播放清单的 id，可以为 歌曲id、清单id、专辑id、搜索关键词
    id: '3231649721',
    // # 歌曲服务器 netease, tencent, kugou, xiami, baidu
    server: 'netease',
    // # id 类型 song, playlist, album, search, artist
    type: 'playlist'
  },
  one_say: {
    refresh: 'https://v1.hitokoto.cn/',
    detail: 'https://hitokoto.cn?uuid='
  }
});