import extendModule from './extend/index.js';
import constant from './constant/constant.js';
import utils from './utils/index.js';
export default class Application {
    constructor() {
        this.vm = null;
        this.config = {};
        // this.moment = moment;
        this.extend = extendModule
        this.constant = constant
        this.utils = utils
    }
    
    setVM() {
        
    }
    setLang () {

    }
    run(complete) {
        let error = null;
        wx.request({
            url:'project.json',
            data: {},
            // header,
            method: 'GET',
            success:data => {
                this.config = data || {};
            },
            fail:e => {
                error = e
                wx.showModal({
                    title: '',
                    content: e.message,
                    showCancel: false
                })

                // window.alert(`${e.name} : ${e.message}`);
            },
            complete: () => {
                complete(error);
            }
        })
    }

    /**
     * 返回服务端API地址
     * 开发环境自定义地址：cross-env SERVER_ADDRESS=http://xxxxx
     * 配置文件地址：project.json --> service
     * 默认地址：http://127.0.0.1:12006
     * .returns {*|string}
     */
    getServerAddress() {
        return process.env.SERVER_ADDRESS || this.config.service || "http://127.0.0.1:12006";
    }
}