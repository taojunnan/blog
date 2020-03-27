module.exports = {
  title: '世外陶源',
  description: 'Yesterday is history，Tomorrow is a mystery，Today is a gift',
  port: '5578',
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    type: 'blog',
    logo: '/avatar.png',
    author: 'Junan',
    authorAvatar: '/avatar.png',
    sidebar: 'auto',
    sidebarDepth: 2,
    nav: [
      { text: '首页', link: '/' , icon: 'reco-home'},
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
    ],
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    valineConfig: {
      appId: 'iUwNTL34H1OX7b4OOVjh4EVk-gzGzoHsz',
      appKey: 'EVUnmqjTtL5S5nP9TBmdsA0Y',
      visitor: true, // 访问量开启/关闭
      placeholder: '我要发表看法'
    }
  }
}