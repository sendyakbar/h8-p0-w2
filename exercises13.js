function xo (str) {
  var tempX = ''
  var tempO = ''
  for (var index = 0; index < str.length; index++) {
    if (str[index] === 'x') {
      tempX = tempX + 1
    }else if (str[index] === 'o') {
      tempO = tempO + 1
     }
  }
  if (tempX === tempO) {
    return true
  }else if (tempX !== tempO) {
    return false
  }
}
console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))
