'use strict';


// DATE
const monthFunct = (month, year) => {
  let today = new Date();
  let year4Dig = today.getFullYear();
  let year2Dig = year4Dig.toString().substr(-2);

  let num2DigMonthTest = /^[0-9]{2}$/.test(month);
  let num2DigYearTest = /^[0-9]{2}$/.test(year);
  
  // months
  if (num2DigMonthTest === true && month < 13) {
    return true;
  } else {
    return false;
  }
  // years
  if (num2DigYearTest === false && year < year2Dig) {
    return false;
  } else {
    return true;
  }
// validar que la tarjeta solo sean numeros y 16 numeros
const validateNumCard = (creditNumber) => {
  creditNumber = creditNumber.replace(' ','');
  return  /^([0-9]){16}$/.test(creditNumber);
}

// validar cvv solo sean numeros y 3 digitos
const validateNumCvv = (cvv) => {
  cvv = cvv.replace(' ','');
  return  /^([0-9]){3}$/.test(cvv);
}

// Validar nombre que solo contenga letras
const validateName = (name) => {
  return /^[a-zA-Z]*$/.test(name);
}
console.log(monthFunct(12,18));
console.log(monthFunct(13,17));
console.log(monthFunct("12","18"));
console.log(monthFunct("13","17"));


// Validar los numeros de tarjeta por Lunm
const isValidCard = (creditNumber) => {
  let creditNumberReverse = (creditNumber.split("")).reverse();
  let pairNumbers = [];

  for (let i = 0; i < creditNumberReverse.length; i++) {
    if (i % 2 !== 0) {
      let multiplication = creditNumberReverse[i] * 2;
      if (multiplication >= 10) {
        let sum = 0;
        while (multiplication) {
          sum += multiplication % 10;
          multiplication = Math.floor(multiplication / 10)
        }
        pairNumbers.push(sum)
      } else {
        pairNumbers.push(multiplication);
      }
    } else
      pairNumbers.push(parseInt(creditNumberReverse[i]));
  }
  let numberValidate = 0;
  for (let j = 0; j < pairNumbers.length; j++) {
    numberValidate += pairNumbers[j];
  }
  if (numberValidate % 10 === 0) {
    return true;
  } else {
    return false
  }
}

console.log(validateNumCard("4152313380623160"));
console.log(validateNumCvv("415"));
console.log(validateName("Elizabeth"));
console.log(isValidCard("4152313380623160"));
// 4152313380623160
