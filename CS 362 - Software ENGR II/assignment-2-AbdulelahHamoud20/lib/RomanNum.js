module.exports =  function convertToRomanNumeral(arabicNumber) {
    const outOfRange = arabicNumber < 0 || arabicNumber> 3999
    if (arabicNumber < 1|| arabicNumber > 3999){
        return " Invalid input, the number must be between 1 and 3999"
    }
    if (arabicNumber === 1) {
      return 'I';
    }
    if (arabicNumber === 2){
        return 'II';
    }
    if (arabicNumber === 3){
        return 'III';
    }
    if (arabicNumber === 4){
        return 'IIII';
    }

    if (arabicNumber === 5){
            return 'V';
        }

    if (arabicNumber === 10){
        return 'X'
    }
    
    if (arabicNumber === 50){
        return 'L'
    }

    if (arabicNumber === 100){
        return 'C'
    }
    
    if (arabicNumber === 1000){
        return 'M'
    }
    
  }
  