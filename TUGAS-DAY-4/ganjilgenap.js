console.log("------------SOAL GANJIL ATAU GENAP--------------");

function ganjilgenap(angka) {
    if (angka % 2 === 0) {
      return 'GENAP';
    } else {
      return 'GANJIL';
    }
  }
  
  console.log(ganjilgenap(43));
  console.log(ganjilgenap(1032));