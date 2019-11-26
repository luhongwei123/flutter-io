const plugin = require('./pluginConfig');
const nav = require('./navConfig');
const sider = require('./siderbarConfig');

module.exports = {
    title: '依然丶',
    description: 'how are you , how old are you!!!',
    dest: './dist',//默认在.vuepress下
    base: '/notes/',
    port: 8088,
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
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
