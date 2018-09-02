console.log('-NOMOR 1-')
var rows1 = 5
while (rows1 > 0) {
  console.log('*')
  rows1 = rows1 - 1
}

console.log('')
console.log('-NOMOR 2-')

var rows2 = 5
var cols2 = 0
while (cols2 < rows2) {
  var temp = ''
  var insideCols = 0
  while (insideCols < rows2) {
    temp = temp + '*'
    insideCols = insideCols + 1
  }
  cols2 = cols2 + 1
  console.log(temp)
}

console.log('')
console.log('-NOMOR 3-')

var counter = 0
var rows3 = 5
var temp2 = ''
while (counter < rows3) {
  temp2 = temp2 + '*'
  console.log(temp2)
  counter = counter + 1
}
