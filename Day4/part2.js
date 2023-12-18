const fs = require('fs')


const allContents = fs.readFileSync('Day4/inputTxt.txt', 'utf-8');
let result = 0;
allContents.split(/\r?\n/).forEach((line) => {
    let resultNums = [];
    let cardTotal = 0;
    let count = 1;
    const cardNums = line.split(":")[1];
    const winningNums = cardNums.split("|")[0].split(" ").filter((num) => num.length > 0);
    const numsPlayed = cardNums.split("|")[1].split(" ").filter((num) => num.length > 0);

    for (let x = 0; x < numsPlayed.length; x++) {
        if (winningNums.includes(numsPlayed[x])) resultNums.push(numsPlayed[x])

    }
    if (resultNums.length >= 1) cardTotal = 1;
    
    while (count < resultNums.length) {
        cardTotal = cardTotal*2;
        count++;
    }
    result = result + cardTotal;
});
console.log('result: ', result);
