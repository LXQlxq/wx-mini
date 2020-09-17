/**
 * @Author: lixiaoqing on 2019/1/7 16:18
 * @Description :
 */

/**
 * @Description:
 * A: 获取,格式：get + name
 * B: 创建,格式：create + name
 * C: 编辑,格式：update + name
 * D: 其他, 格式： 1、动作: name + Action 2、其他: name
 */

import {Ajax} from './ajax.js';
// 获取用户信息
export const me = {
    // 获取我的信息0
    getMeInfo: () => Ajax.get('/me/detail')
}
//
export const articles = {
   getList: (params) =>  Ajax.get('/home/articles/list', params),
   detail: (params) =>  Ajax.get('/home/articles/detail', params),
}
export const banner = {
    getList: (params) =>  Ajax.get('/home/banner/list', params)
}
export const templates = {
    getList: (params) =>  Ajax.get('/home/templates/list', params),
    detail: (params) =>  Ajax.get('/home/templates/detail', params),
}