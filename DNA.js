let dna = prompt("Введите цепь ДНК: ");

const transcription = (a) => {

let str = String(a).toUpperCase();
let rnaStr = '';


  for (let i = 0; i < str.length; i++){

    if (str.substr(i, 1) === 'G') {
      rnaStr = rnaStr + 'C';
    } else if (str.substr(i, 1) === 'C'){
      rnaStr = rnaStr + 'G';
    } else if (str.substr(i, 1) === 'T'){
      rnaStr = rnaStr + 'A';
    } else if (str.substr(i, 1) === 'A') {
      rnaStr = rnaStr + 'U';
    } else {
      rnaStr = rnaStr + '?';
    }

    }
  return (console.log("Цепь РНК: " + rnaStr));
}

transcription(dna);
