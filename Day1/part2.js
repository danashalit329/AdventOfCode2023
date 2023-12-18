const fs = require('fs')
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function findStringNumbers (line){
  const testArray = {};
  for (let n = 0; n < numbers.length; n++) {
      if (line.includes(numbers[n])) {
        let index = line.indexOf(numbers[n]);
        while (index >= 0) {
          testArray[index] = numbers[n];
          index = line.indexOf(numbers[n], index + 1)
        }
      };
  }
  const keys = Object.keys(testArray);
  if (keys.length > 0) {
    return [[keys[0], testArray[keys[0]], numbers.indexOf(testArray[keys[0]]) + 1], [keys[keys.length - 1], testArray[keys[keys.length - 1]], numbers.indexOf(testArray[keys[keys.length - 1]]) + 1]];
  }
  return [];
    
}
let finalNum = 0;

const allContents = fs.readFileSync('Day1/inputTxt.txt', 'utf-8');
allContents.split(/\r?\n/).forEach((line) => {
  let filterFirstLastNumber;

  if (parseInt(line.charAt(0)) && parseInt(line.charAt(line.length - 1))) {
    filterFirstLastNumber = [parseInt(line.charAt(0)), parseInt(line.charAt(line.length - 1))]
  } else {
    let arrayLine = line.split("");
    let numIndexes = [];
    for (let i = arrayLine.length; i >= 0; i--) {
      if (parseInt(arrayLine[i])) {
        numIndexes.push(i)
      }
    }
    numIndexes.sort(function(a, b){return a-b});
    let firstNum;
    let lastNum;

    let preFirstNumStringSection = line.substring(0, numIndexes[0]);
    let postLastNumStringSection= line.length - 1 === numIndexes[numIndexes.length - 1] ? '' :  line.substring(numIndexes[numIndexes.length - 1]);

    const preFirstStringNumCount = findStringNumbers(preFirstNumStringSection);
    const postLastStringNumCount = findStringNumbers(postLastNumStringSection);
    if (preFirstStringNumCount.length > 0) {
      firstNum = preFirstStringNumCount[0][2];

    } else {
      firstNum = line.charAt(numIndexes[0]);
    }
    if (postLastStringNumCount.length > 0) {
      lastNum = postLastStringNumCount[postLastStringNumCount.length - 1][2]
    } else {
      lastNum = line.charAt(numIndexes[numIndexes.length - 1]);
    }
    filterFirstLastNumber = [parseInt(firstNum), parseInt(lastNum)]
  }
  const numInt = filterFirstLastNumber[0] * 10 + filterFirstLastNumber[1]
  finalNum = finalNum + numInt;
});
console.log('finalNum: ', finalNum);