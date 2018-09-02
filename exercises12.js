function konversiMenit (angka) {
  var menit = Math.floor(angka / 60)
  var detik = angka % 60
  if (String(detik).length === 1) {
    detik = '0' + detik
  }
  var hasil = menit + ':' + detik
  return hasil
}
console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
