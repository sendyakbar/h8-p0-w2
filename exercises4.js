var nama = 'Sendy'
var peran = 'Ksatria'

if (nama === '' && peran === '') {
  console.log('Nama harus di isi!')
}
else if (nama !== '' && peran === '') {
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!')
}
else if (nama !== '' && peran === 'Ksatria') {
  console.log('Selamat datang di dunia Proxytia, ' + nama)
  console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
}
else if (nama !== '' && peran === 'Tabib') {
  console.log('Selamat datang di dunia Proxytia, ' + nama)
  console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka!')
}
else if (nama !== '' && peran === 'Penyihir') {
  console.log('Selamat datang di dunia Proxytia, ' + nama)
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else if (nama === '' && (peran === 'Ksatria' || peran === 'Tabib' || peran === 'Penyihir')) {
  console.log('Nama harus di isi!')
}
else {
  console.log('Halo ' + nama + ', pilih peran: Ksatria, Tabib atau Penyihir')
}
