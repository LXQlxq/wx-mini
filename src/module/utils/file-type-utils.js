const fileType = {
  nameSuffix: (fileName) => {
    return fileName.substr(fileName.lastIndexOf('.')).toLowerCase()
  },
  isVideo: (fileName) => {
    let photoExt = fileType.nameSuffix(fileName)
    if (photoExt === '.qlv' || photoExt === '.mp4' || photoExt === '.avi' || photoExt === '.mkv' || photoExt === '.mov' || photoExt === '.ogv' || photoExt === '.Webm') {
      return true
    } else {
      return false
    }
  },
  isPdf: (fileName) => {
    let photoExt = fileType.nameSuffix(fileName)
    if (photoExt === '.pdf') {
      return true
    } else {
      return false
    }
  },
  isImg: (fileName) => {
    let photoExt = fileType.nameSuffix(fileName)
    if (photoExt === '.jpg' || photoExt === '.png') {
      return true
    } else {
      return false
    }
  }
}
export default fileType
