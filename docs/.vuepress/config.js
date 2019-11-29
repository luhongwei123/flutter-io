const plugin = require('./pluginConfig');
const nav = require('./navConfig');
const sider = require('./siderbarConfig');

module.exports = {
    title: '依然丶',
    description: 'how are you , how old are you!!!',
    dest: './dist',//默认在.vuepress下
    base: '/flutter-io/',
    port: 8088,
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    head: [
        ['link', { rel: 'apple-touch-icon',  sizes:"180x180", href: '/img/icons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type:"image/png",  sizes:"32x32", href: '/img/icons/favicon-32x32.png' }],
        ['link', { rel: 'icon', type:"image/png",  sizes:"16x16", href: '/img/icons/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href:'/manifest.json' }],
        ['link', { rel: 'mask-icon', href: '/img/icons/safari-pinned-tab.svg', color:'#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00a300' }],
        ['meta', { rel: 'theme-color', content:'#ffffff' }]
    ],
    plugins: plugin,
    themeConfig: {
        logo: '/img/logo.png',
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        repo: 'luhongwei123/flutter-io',
        editLinks: true,
        editLinkText: '修改文档！',
        docsDir: 'docs',
        nav: nav,
        sidebar: sider
    }
}
