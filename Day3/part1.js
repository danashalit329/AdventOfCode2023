const fs = require('fs')

let lines = [];
let possibleNums = [];
const allContents = fs.readFileSync('Day3/inputTxt.txt', 'utf-8');
allContents.split(/\r?\n/).forEach((line) => {
    const arrayLine = line.split("");
    for (let x = 0; x < arrayLine.length; x++) {
        if (parseInt(arrayLine[x]) >=0) arrayLine[x] = parseInt(arrayLine[x]);
    }
    lines.push(arrayLine);
    const test = line.replaceAll(".", "");
    console.log('line: ', test);
});

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (typeof lines[i][j] === 'number') {
            if ((lines[i][j - 1] !== "." &&  typeof lines[i][j - 1] !== 'number') || (lines[i][j + 1] !== "." &&  typeof lines[i][j + 1] !== 'number')  ) {
                console.log('possible: ', lines[i][j]);
            }
        }
    }
}
