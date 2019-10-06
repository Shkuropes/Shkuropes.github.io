//let str = 'abba';
const substr = (str, index, len) => {
    let outputString = '';
    let strLength = str.length;
    let startIndex = index;
    let endIndex = len;
    
    if ((index + len - 1) > strLength){
      startIndex = index;
      endIndex = strLength - 1;
    }
    if (len < 0){
      endIndex = 1;
    } else if (len === 0) {
      return outputString = '';
    } else if (len > strLength) {
      endIndex = strLength;
    }
    if ((index + len - 1) > strLength){
      startIndex = index;
      endIndex = strLength - index;
    }
    if (index < 0) {
      startIndex = 0;
    }
    if (index > (strLength - 1)){
      return outputString = '';
    }
    for (let i = startIndex; i < (startIndex + endIndex); i++){
      outputString = outputString + str[i];
    }
    return outputString;
}
//console.log(substr(str, 1, 2));

export default substr;