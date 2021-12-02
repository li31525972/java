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
            { text: '基础知识', link: '/pages/basic/' },
            { text: '服务', link: '/pages/server/tomcat' },
            { text: 'Servlet', link: '/pages/servlet/' },
            { text: '数据库', link: '/pages/dataBase/' },
            { text: 'JDBC', link: '/pages/JDBC/' },
        ],
        sidebar: {
            '/pages/basic/': [{
                title: '基础知识',
                path: '/pages/basic/',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/pages/server/': [{
                title: '服务',
                path: '/pages/server/tomcat',
                collapsable: false,
                children: [
                    'tomcat',
                ]
            }],
            '/pages/servlet/': [{
                title: 'Servlet',
                path: '/pages/servlet/',
                collapsable: false,
                children: [
                    '',
                ]
            }],
            '/pages/dataBase/': [{
                title: '数据库',
                path: '/pages/dataBase/',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/pages/JDBC/': [{
                title: 'JDBC',
                path: '/pages/JDBC/',
                collapsable: false,
                children: [
                    ''
                ]
            }],
        },
        sidebarDepth: 2,
        lastUpdated: '更新时间',
        searchMaxSuggestions: 10,
    },

}
