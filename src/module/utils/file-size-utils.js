const fileSize = function (size) {
  // console.log('size', size)
  if (size < 1024) {
    size = size.toFixed(2) + 'B'
    return size
  }
  if (size < (1024 * 1024)) {
    size = (size / 1024).toFixed(2) + 'KB'
    return size
  }
  size = (size / (1024 * 1024)).toFixed(2) + 'MB'
  return size
}
export default fileSize
