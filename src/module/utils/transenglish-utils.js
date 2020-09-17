class Transenglish {
  readNumber (num) {
    // Define basic maps of number and suffix
    let numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let suffix = ['兆', '亿', '万']
    let inputArr = num.toString().split(/(?=(?:....)*$)/) // 从后面四位分割
    let result = ''
    function readPartial (partialNum) {
      var suffix = ['千', '百', '十']
      var numArr = partialNum.toString().split('')
      var partialOutput = ''
      var position = 0
      numArr.forEach(function (digit) {
        if (digit === '0') {
          if (partialOutput.slice(-1) !== '零') {
            partialOutput += numMap[0]
          }
        } else {
          partialOutput += numMap[parseInt(digit)]
          if (position < 3) {
            partialOutput += suffix[position + 4 - numArr.length] || ''
          }
        }
        position += 1
      })
      if (partialNum.slice(-1) === '0') {
        partialOutput = partialOutput.slice(0, -1)
      }
      partialOutput = partialOutput.replace(/一十/g, '十')
      return partialOutput
    }
    var resultPosition = 0
    inputArr.forEach(function (group) {
      result += readPartial(group)
      result += suffix[resultPosition + 4 - inputArr.length] || ''
      resultPosition += 1
    })
    return result
  }
}
export {Transenglish}
