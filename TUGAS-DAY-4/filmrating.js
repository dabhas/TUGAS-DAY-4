console.log("------------SOAL FILM RATING--------------");
function filmrating(usia) {
    if (usia >= 21) {
      return 'DEWASA';
    } else if (usia >= 13) {
      return 'REMAJA';
    } else if (usia >= 9) {
      return 'BIMBINGAN ORANG TUA';
    } else {
      return 'SEMUA USIA';
    }
  }
  
  console.log(filmrating(15));
  console.log(filmrating(32));
