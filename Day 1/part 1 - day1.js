const fs = require('fs')

let finalNum = 0;
const allContents = fs.readFileSync('inputTxt.txt', 'utf-8');
allContents.split(/\r?\n/).forEach((line) => {
  let filterNums = line.split("").filter((n) =>{
    return parseInt(n)
  })

  const filterFirstLastNumber = [filterNums[0], filterNums[filterNums.length -1]];
  const numInt = parseInt(filterFirstLastNumber.join(""))
  finalNum = finalNum + numInt;
  
});

console.log('finalNum: ', finalNum);