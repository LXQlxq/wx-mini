/**
 * Created by Administrator on 2017/7/27.
 */
class Verification {
  constructor (obj) {
    this.value = obj
  }
  verifyPhone () {
    let re = /^1\d{10}$/
    if (re.test(this.value)) {
      return true
    } else {
      return false
    }
  }
  verifyPassword () {
    let re = /^\w{6,12}$/
    if (re.test(this.value)) {
      return true
    } else {
      return false
    }
  }
}
export {Verification}
