// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    const lowerCaseInput = input.toLowerCase()
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split('')
  
  // const string = 'word';
  // string.split('');
  // Result : ['w', 'o', 'r', 'd']
    let result = []
  
    for (let i=0; i<alphabetArray.length; i++){
      if ( alphabetArray.indexOf(alphabetArray[i]) !== alphabetArray.lastIndexOf(alphabetArray[i]) ){
        return false
      }
    }
    for(let i =0; i<lowerCaseInput.length; i++){
      if(lowerCaseInput[i]=== " "){
        result.push(" ")
      }

      for(let j=0; j<trueAlphabet.length; j++){
        if(encode && trueAlphabet[j]===lowerCaseInput[i]){
          result.push(alphabet[j]) 
  }
}

          for(let j =0; j<alphabet.length; j++){
            if(encode ===false && alphabet[j] ===lowerCaseInput[i]){
                result.push(trueAlphabet[j])
       }
    }
   }

  return result.join('')
  }
  return {
    substitution,
  }
})()
module.exports = { substitution: substitutionModule.substitution }