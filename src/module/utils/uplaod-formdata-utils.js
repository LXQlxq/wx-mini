/**
 * @Author: lixiaoqing on 2019/1/7 18:03
 * @Description :
 */
const formDataUtils = {
  // 单文件
  single: (params) => {
    let formData = new window.FormData()
    for (let p in params) {
      if (typeof params[p] === 'object' && toString.apply(params[p]) !== '[object File]') {
        for (let obj in params[p]) {
          formData.append(p + '[' + obj + ']', params[p][obj])
        }
      } else {
        formData.append(p, params[p])
      }
    }
    return formData
  },
  // 多文件
  multiple: (params) => {
    console.log('params>>>>>>>>>>', params)
    let formData = new FormData()
    for (let p in params) {
      // 判断是否多个文件上传，如果是的话就得append多次,否则识别不了，具体请了解form-data提交，后台直接可取req.body下面的其他字段，文件字段名是为req.files
      if (params[p] instanceof Array) {
        let arr = params[p]
        for (let i = 0; i < arr.length; i++) {
          // 判断是否是文件格式，若果是，就得循环append添加多个
          if (toString.apply(arr[i]) === '[object File]') {
            formData.append(p, arr[i])
          } else if (typeof arr[i] === 'object' && toString.apply(arr[i]) !== '[object File]') {
            formData.append(p, JSON.stringify(arr))
          } else {
            formData.append(p, JSON.stringify(arr))
          }
        }
      } else {
        if (isObject(params[p])) {
          // 处理对象
          formData.append(p, JSON.stringify(params[p]))
        } else {
          formData.append(p, params[p])
        }
      }
    }
    console.log('formData>>>>>>>>>>', formData)
    return formData
  }
}

function isObject (item) {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

export default formDataUtils
