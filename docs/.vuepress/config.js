module.exports = {
  title: '世外陶源',
  description: 'Yesterday is history，Tomorrow is a mystery，Today is a gift',
  base: '/',
  port: '5578',
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    type: 'blog',
    logo: '/avatar.png', // 左上角logo
    author: 'Junan',
    authorAvatar: '/avatar.png',
    sidebar: 'auto',
    sidebarDepth: 2,
    mode: null, // 显示切换明暗风格按钮，null: 隐藏, true: 显示
    showSiteName: false, // 显示或隐藏左上角的网站名称
    showFooterThemeLink: false, // 显示或隐藏底部主题的链接
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
    },
    lastUpdated: '最后编辑'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          var date = new Date(timestamp);

          var year = date.getFullYear();
          var month = date.getMonth();
          var day = date.getDate();

          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();

          if (hour < 10) {
            hour = '0' + hour;
          }
          if (minute < 10) {
            minute = '0' + minute;
          }
          if (second < 10) {
            second = '0' + second;
          }

          return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        }
      }
    ],
    ['@vuepress/medium-zoom', true],
    ['vuepress-plugin-smooth-scroll', true],
    ['@vuepress/medium-zoom', false],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162146357-1'
      }
    ]
  ]
}