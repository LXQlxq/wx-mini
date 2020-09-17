import './assets/css/global.less';
import './app.less';

import Application from '@/module/application'
process.App = new Application();
App({
    // 初始化完成触发
    onLaunch: function () {},
    // 小程序启动触发
    onShow: function (options) {},
    onHide: function (options) {},
    // 脚本错误触发
    onError: function (msg) {
        console.log('onError', msg)
    },
    globalData: { // getApp();
        userInfo: {}
    }
});
