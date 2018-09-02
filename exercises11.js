function balikKata (kata) {
  var hurufTerakhir = kata.length - 1
  var balik = ''
  while (hurufTerakhir >= 0) {
    balik = balik + kata[hurufTerakhir]
    hurufTerakhir = hurufTerakhir - 1
  }
  return balik
}
console.log(balikKata('Hello World and Coders'))
console.log(balikKata('John Doe'))
console.log(balikKata('I am bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))
