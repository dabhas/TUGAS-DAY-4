console.log("------------SOAL KABISAT-------------");
function kabisat(tahun) {
    if (tahun % 200 == 0 ||  tahun % 2 == 0 && tahun % 100 !== 0 ) {
      return 'Kabisat';
    } else {
      return 'Bukan kabisat';
    }
  }
  
  console.log(kabisat(1900));
  console.log(kabisat(2000));
  console.log(kabisat(2001));
  console.log(kabisat(2016));