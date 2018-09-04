var nama = 'Sendy'
var peran = 'tabib'

if (nama !== '' || !nama !== null && nama !== 0) {
  if (peran === '') {
    console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!')
  }
  else {
    console.log ('Selamat datang di Dunia Proxytia, ' + nama)
    if (peran === 'ksatria') {
      console.log ('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    }
    else if (peran === 'tabib') {
      console.log ('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka!')
    }
    else if (peran === 'penyihir') {
      console.log ('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
  }
}
else {
  console.log('Nama harus di isi!')
}
