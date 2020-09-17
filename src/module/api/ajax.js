/**
 * @Author: lixiaoqing on 2019/1/7 16:18
 * @Description :
 */

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://muzzi.top' : 'http://127.0.0.1:8360';
const CONFIG = {
  header: {
      'content-type': 'application/json'
  }
}
export class Ajax {
    static  request ({url, data = {}, method, header = CONFIG.header} = {}) {
        const  objToParams = (obj) => {
            let str = ''
            for (let key in obj) {
                if (str !== '') {
                    str += '&'
                }
                str += key + '=' + obj[key]
            }
            return str
        }
        const toUrl = data.query ? `${baseUrl}${url}?` + objToParams(data.query || {}) : `${baseUrl}${url}`
        return  new Promise((resolve, reject) => {
            wx.request({
                url: toUrl,
                data: data.params || {},
                header,
                method: method.toLowerCase(),
                success: res => {
                    console.log('request',res)
                    if (res.statusCode === 200) {
                        resolve(res.data)
                    } else {
                        reject(res.data)
                    }
                },
                fail: err => {
                    reject(err.data)
                }
            })
        })
    }
    static  get(url, data) {
        return Ajax.request({url, data, method: 'GET'})
    }
    static  post (url, data) {
        return  Ajax.request({url, data, method: 'POST'})
    }
    static put (url, data) {
        return  Ajax.request({url, data, method: 'PUT'})
    }
    static  del (url, data) {
        return  Ajax.request({url, data, method: 'DELETE'})
    }
}
