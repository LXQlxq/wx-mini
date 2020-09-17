/**
 * Created by Administrator on 2017/7/27.
 */
/**
 * Created by Administrator on 2017/7/27.
 */
const ScrollUtils = {
  getViewHeight: () => {
    return document.documentElement.clientHeight || document.body.clientHeight || 0
  },
  getScrollTop: () => {
    return document.documentElement.scrollTop || document.getElementsByTagName('body')[0].scrollTop || document.body.scrollTop || 0
  },
  setScrollTop: (val) => {
    document.documentElement.scrollTop = val
    document.getElementsByTagName('body')[0].scrollTop = val
    document.body.scrollTop = val
  },
  getScrollHeight: () => {
    return document.documentElement.scrollHeight || document.body.scrollHeight || 0 // 可滚动内容高度
  },
  scrollBottom: () => {
    // console.log('ScrollUtils.getScrollTop()', ScrollUtils.getScrollTop())
    // console.log('ScrollUtils.getViewHeight()', ScrollUtils.getViewHeight())
    // console.log('ScrollUtils.getScrollHeight()', ScrollUtils.getScrollHeight())
    // alert(ScrollUtils.getScrollTop() + ScrollUtils.getViewHeight() + 'ddd' + ScrollUtils.getScrollHeight())
    if (ScrollUtils.getScrollTop() + ScrollUtils.getViewHeight() >= ScrollUtils.getScrollHeight()) {
      return true
    } else {
      return false
    }
  }
}
export {ScrollUtils}
