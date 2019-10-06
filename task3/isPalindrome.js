import substr from './substr';

//let verifiableWord = "topot topot";
const isPalindrome = (word) => {
  let ignoreRegister = String(word).toUpperCase();
  let verifiableWord = ignoreRegister.split(" ").join("");
  let wordLength = verifiableWord.length;
    
  if (wordLength < 2) {
    return true;
  } else if (verifiableWord.substr(0, 1) !== substr(verifiableWord, wordLength - 1, 1)) {  //verifiableWord.substr(wordLength - 1, 1)
    return false;
  } else {
    return isPalindrome(substr(verifiableWord, 1, wordLength - 2)); //verifiableWord.substr(1, wordLength - 2)
  }
};
//console.log(isPalindrome(verifiableWord));

export default isPalindrome;