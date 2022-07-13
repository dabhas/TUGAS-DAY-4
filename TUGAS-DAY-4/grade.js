console.log("------------SOAL GRADE--------------");

function grade(nilai) {
    if (nilai >= 90) {
      return 'GRADE A';
    } else if (nilai >= 80 && nilai <= 89) {
      return 'GRADE B';
    } else if (nilai >= 70 && nilai <= 79) {
      return 'GRADE C';
    } else if (nilai >= 60 && nilai <= 69) {
      return 'GRADE D';
    } else {
      return 'GRADE E';
    }
  }
  
  console.log(grade(30));
  console.log(grade(75));