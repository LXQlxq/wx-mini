import routes from '@/router/routes.js'
/*获取当前页带参数的url*/
const getCurrentPageUrlWithArgs = () => {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    var options = currentPage.options    //如果要获取url中所带的参数可以查看options

    //拼接url的参数
    var urlWithArgs = url + '?'
    for(var key in options){
        var value = options[key]
        urlWithArgs += key + '=' + value + '&'
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length-1)

    return encodeURIComponent(urlWithArgs)
}

const getArgs = (params = {}) => {
    let urlWithArgs = ''
    for(var key in params){
        var value = params[key]
        urlWithArgs += key + '=' + value + '&'
    }
    return urlWithArgs
}

const getUrl = (name, query = {}) => {
    if (routes.hasOwnProperty(name)) return '/' + routes[name].component + '?' + getArgs(query)
    else return ''
}

const router = {
    push ({name, query = {}, success = () => {}, fail = () => {}} = {}) {
        console.log('query',query);
        console.log('url',getUrl(name, query));
        wx.navigateTo({
            url: getUrl(name, query),
            events: {}, // Object		否	页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持。
            success: () => success(),
            fail: () => fail()
        })
    },
    replace ({name, query = {}, success = () => {}, fail = () => {}} = {}) {
        wx.redirectTo({
            url: getUrl(name, query),
            success: () => success(),
            fail: () => fail()
        })
    },
    /**
      * @description: 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
      * @param ${number} delta 否 返回的页面数， 如果 delta 大于现有页面数，则返回到首页。
      * @return ${return_type}
      */
    back (delta = 1) {
        wx.navigateBack({
            delta
        })
    },
    /**
      * @description: 关闭所有页面，打开到应用内的某个页面 需要跳转的应用内页面路径 (代码包路径)，
     * 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
      * @param ${string} url
      * @return ${return_type}
      */
    reLaunch ({name, query = {}, success = () => {}, fail = () => {}} = {}) {
        wx.reLaunch({
            url: getUrl(name, query),
            success: () => success(),
            fail: () => fail()
        })
    },
    /**
      * @description: 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * 需要跳转的 tabBar 页面的路径 (代码包路径)（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
      * @param ${string} url
      */
    switchTab ({name, success = () => {}, fail = () => {}} = {}) {
        wx.switchTab({
            url: getUrl(name),
            success: () => success(),
            fail: () => fail()
        })
    },
    route () {
        try {
            var pages = getCurrentPages()    //获取加载的页面
            console.log('pages============', pages)
            var currentPage = pages[pages.length-1] || {}    //获取当前页面的对象
            console.log('pages============', pages)
            var options = currentPage.options || {}    //当前页面url
            return options
        } catch (e) {
            return {}
        }
    },
    location () {
        return getCurrentPageUrlWithArgs()
    }
}
export default  router