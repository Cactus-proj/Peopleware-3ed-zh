import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《人件3》中文版",
  // meta 标签 <= 80 中文字符
  description: "人件：项目与团队高效管理 (第3版) 汤姆·德马科"
    + "; Peopleware3 中文翻译"
    + "; 人件 (原書第3版) 迪馬可、利斯特"
  ,
  lang: 'zh-CN',
  base: '/Peopleware-3ed-zh/',

  lastUpdated: true,
  // https://vitepress.dev/zh/guide/sitemap-generation#options
  sitemap: {
    hostname: 'https://cactus-proj.github.io/Peopleware-3ed-zh/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '章节正文', link: '/ch1' }
    ],

    sidebar: [
      {
        text: '章节',
        items: [
          {
            text: '前言',
            link: '/preface',
          },
          {
            text: '第一部分 管理人力资源',
            link: '/part1',
            items: [
              { text: '第 1 章：此时此刻，一个项目正在走向失败', link: '/ch1' },
              { text: '第 2 章：干酪汉堡，做一个，卖一个', link: '/ch2' },
              { text: '第 3 章：维也纳在等你', link: '/ch3' },
              { text: '第 4 章：质量—如果时间允许', link: '/ch4' },
              { text: '第 5 章：再谈帕金森定律', link: '/ch5' },
              { text: '第 6 章：苦杏素', link: '/ch6' }
            ]
          },
          {
            text: '第二部分 办公环境',
            link: '/part2',
            items: [
              { text: '第 7 章：家具警察', link: '/ch7' },
              { text: '第 8 章："朝九晚五在这里啥也完成不了。"', link: '/ch8' },
              { text: '第 9 章：在空间上省钱', link: '/ch9' },
              { text: '问奏曲：生产效率度量和不明飞行物', link: '/ch9b' },
              { text: '第 10 章：大脑时间与身体时间', link: '/ch10' },
              { text: '第 11 章：电话', link: '/ch11' },
              { text: '第 12 章：门的回归', link: '/ch12' },
              { text: '第 13 章：采取保护步骤', link: '/ch13' }
            ]
          },
          {
            text: '第三部分 正确的人',
            link: '/part3',
            items: [
              { text: '第 14 章：霍恩布洛尔因素', link: '/ch14' },
              { text: '第 15 章：谈谈领导力', link: '/ch15' },
              { text: '第 16 章：雇一名杂耍演员', link: '/ch16' },
              { text: '第 17 章：与他人良好合作', link: '/ch17' },
              { text: '第 18 章：童年的终结', link: '/ch18' },
              { text: '第 19 章：在这儿很开心', link: '/ch19' },
              { text: '第 20 章：人力资本', link: '/ch20' }
            ]
          },
          {
            text: '第四部分 高效团队养成',
            link: '/part4',
            items: [
              { text: '第 21 章：整体大于部分之和', link: '/ch21' },
              { text: '第 22 章：黑衣团队', link: '/ch22' },
              { text: '第 23 章：团队自毁', link: '/ch23' },
              { text: '第 24 章：再谈团队自毁', link: '/ch24' },
              { text: '第 25 章：竞争', link: '/ch25' },
              { text: '第 26 章：一顿意面晚餐', link: '/ch26' },
              { text: '第 27 章：敞开和服', link: '/ch27' },
              { text: '第 28 章：团队形成的化学反应', link: '/ch28' }
            ]
          },
          {
            text: '第五部分 沃土',
            link: '/part5',
            items: [
              { text: '第 29 章：自我愈复系统', link: '/ch29' },
              { text: '第 30 章：与风险共舞', link: '/ch30' },
              { text: '第 31 章：会议、独白和交流', link: '/ch31' },
              { text: '第 32 章：终极管理罪恶得主是…', link: '/ch32' },
              { text: '第 33 章："邪恶"电邮', link: '/ch33' },
              { text: '第 34 章：让改变成为可能', link: '/ch34' },
              { text: '第 35 章：组织型学习', link: '/ch35' },
              { text: '第 36 章：构建社区', link: '/ch36' }
            ]
          },
          {
            text: '第六部分 快乐地工作',
            link: '/part6',
            items: [
              { text: '第 37 章：混乱与秩序', link: '/ch37' },
              { text: '第 38 章：自由电子', link: '/ch38' },
              { text: '第 39 章：霍尔加·丹斯克', link: '/ch39' }
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cactus-proj/Peopleware-3ed-zh' }
    ],

    editLink: {
      pattern: 'https://github.com/Cactus-proj/Peopleware-3ed-zh/edit/main/docs/:path'
    },
  }
})
