/**
 * auth true登录才能访问，false不需要登录，默认true
 */
let routes = {
    home: {
        path: '/home',
        name: 'home',
        meta: {title: '登录', navType: 2, auth: false},
        component: 'pages/index/index/index.js'
    },
    articleDetail: {
        path: '/article-detail',
        name: 'articleDetail',
        meta: {title: '登录', navType: 2, auth: false},
        component: 'pages/article/article-detail/article-detail'
    },
    templatesDetail: {
        path: '/templates-detail',
        name: 'templatesDetail',
        meta: {title: '登录', navType: 2, auth: false},
        component: 'pages/templates/templates-detail/templates-detail'
    }
}
export default routes
