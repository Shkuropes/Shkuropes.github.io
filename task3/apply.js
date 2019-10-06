const apply = (num, funcName, arg) => {
  let result;
  for(let i = 0; i < num; i++){
      result = funcName(arg);
      arg = result;
  }
  return result;
}
//console.log(apply(1, v => v ** 2, 3));

export default apply;