let textShortener = (text, num = 20) => {
  let arr = [];
  for(let i = 0; i < num; i++ ) {
    arr.push(text[i])
  }
  let newStr = arr.join('') + '...';

  return newStr;
}

export default textShortener;