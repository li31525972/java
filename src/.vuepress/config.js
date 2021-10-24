const path = require('path')

module.exports = {
    title: 'Yahui的博客',
    description: 'java的学习之路',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpeg' }],
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: '服务', link: '/pages/server/tomcat' },
        ],
        sidebar: {
            '/pages/server/': [{
                title: '服务',
                path: '/pages/server/tomcat',
                collapsable: false,
                children: [
                    'tomcat',
                ]
            }],
            '/pages/es6/': [{
                title: 'ES6',
                path: '/pages/es6/',
                collapsable: false,
                children: [
                    ''
                ]
            }]
        },
        sidebarDepth: 2,
        lastUpdated: '更新时间',
        searchMaxSuggestions: 10,
    },
}
