console.log('-NOMOR 1-')

console.log('LOOPING PERTAMA')
var counter = 0
while (counter < 20) {
  counter = counter + 1
  if (counter % 2 === 0) {
    console.log(counter + ' - I love coding')
  }
}
console.log('LOOPING KEDUA')
var counter2 = 20
while (counter2 > 0) {
  if (counter2 % 2 === 0) {
    console.log(counter2 + ' - I will become fullstack developer')
  }
  counter2 = counter2 - 1
}
console.log('')
console.log('-NOMOR 2-')

console.log('LOOPING PERTAMA')
for(var counter3 = 1; counter3 <= 20; counter3++) {
  console.log(counter3 + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(var counter4 = 20; counter4 > 0; counter4--) {
  console.log(counter4 + ' - I will become fullstack developer')
}
console.log('')
console.log('-NOMOR 3-')

var counter4 = 0
while (counter4 < 100) {
  counter4 = counter4 + 1
  if (counter4 % 2 === 0) {
    console.log('GENAP')
  }
  else {
    console.log('GANJIL')
  }
}
console.log('')

var counter5 = 0
while (counter5 < 100) {
  counter5 = counter5 + 2
  if (counter5 % 3 === 0) {
    console.log(counter5 + ' kelipatan 3')
  }
  else {
    console.log('')
  }
}
var counter6 = 0
while (counter6 < 100) {
  counter6 = counter6 + 5
  if (counter6 % 6 === 0) {
    console.log(counter6 + ' kelipatan 6')
  }
  else {
    console.log('')
  }
}
var counter7 = 0
while (counter7 < 100) {
  counter7 = counter7 + 9
  if (counter7 % 10 ===0) {
    console.log(counter7 + ' kelipatan 10')
  }
  else {
    console.log('')
  }
}
