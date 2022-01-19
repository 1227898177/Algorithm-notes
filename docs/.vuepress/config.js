module.exports = {
  title: '算法思维',
  description: 'Just playing around',
  themeConfig: {
    sidebar: {
      sidebarDepth: 3,
      '/file/': [
        {
          title: '算法性能分析',
          path: '/file/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
            ['', '快速了解'],      	/* /guide/ */
            ['algorithmPerformance', '复杂度分析'], /* /guide/fastIn.html */
            ['memoryManagement', '内存管理'],
          ],
          initialOpenGroupIndex: 0
        },
        {
          title:'排序',
          path:'/file',
          children:[
            'sort'
          ]
        },  {
          title:'搜索',
          path:'/file',
          children:[
            'search'
          ]
        },
        {
          title: '数组',
          path: '/file/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
            ['arrayBasics', '数组基础知识'], /* /guide/fastIn.html */
            ['array', '数组经典算法题'],
          ],
          initialOpenGroupIndex: 0
        },
        {
          title: '链表',
          path: '/file/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
            ['listBasics', '链表基础知识'], /* /guide/fastIn.html */
            ['list', '链表经典算法题'],
          ],
          initialOpenGroupIndex: 0
        },
        {
          title: 'leetcode算法题',
          path: '/file/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
            ['leetcode', '每日一练'], /* /guide/fastIn.html */
          ],
          initialOpenGroupIndex: 0
        },{
          title: '算法拓展学习',
          path: '/file/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false,   // 可选的, 默认值是 true,
          sidebarDepth: 2,      // 可选的, 默认值是 1
          children: [
            ['expandAlgorithm', '拓展算法学习'], /* /guide/fastIn.html */
          ],
          initialOpenGroupIndex: 0
        }

      ],
      '/':[
        ''
      ]
    }
  }
}