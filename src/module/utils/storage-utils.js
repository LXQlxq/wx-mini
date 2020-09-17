// /*
//   storage 主要放项目中的storage相关操作：存取等
//  */
// let storage = {}
// // web 本地存储封装
// const webStorage = {
//   setStorage: (key, value) => {
//     localStorage[key] = JSON.stringify(value)
//   },
//   getStorage: (key) => {
//     var data = localStorage[key]
//     if (data) {
//       return JSON.parse(data)
//     } else {
//       data = null
//       return data
//     }
//   },
//   removeStorage: (key) => {
//     localStorage.removeItem(key)
//   },
//   clearAllStorage: () => {
//     localStorage.clear()
//   },
//   setSession: (key, value) => {
//     sessionStorage[key] = JSON.stringify(value)
//   },
//   getSession: (key) => {
//     var data = sessionStorage[key]
//     if (!data || data === 'null') {
//       return null
//     }
//     return JSON.parse(data)
//   },
//   removeSession: (key) => {
//     sessionStorage.removeItem(key)
//   }
// }
// storage = webStorage
// export default storage
