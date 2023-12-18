const fs = require('fs')
let resultTotalGames = 0;
const allContents = fs.readFileSync('Day2/inputTxt.txt', 'utf-8');
allContents.split(/\r?\n/).forEach((game) => {
  game = game.substring(0, game.length - 1)
  let setupGameStructure = {};
  const gameSplit = game.split(":");
  const gameNum = gameSplit[0].split(" ")[1]; // game numbers without the world game
  const gameRounds = gameSplit[1].split(';');
  for (let i = 0; i < gameRounds.length; i++) {
    const split = gameRounds[i].split(", ");
    for (let x = 0; x < split.length; x++) {
      let colors = split[x].split(" ");
      if (colors.length  > 2) {
        colors.shift();
      }
      if (setupGameStructure[gameNum] === undefined) {
        setupGameStructure[gameNum] = {};
      }
      if (setupGameStructure[gameNum][colors[1]] !== undefined) {
        setupGameStructure[gameNum][colors[1]] =  [...setupGameStructure[gameNum][colors[1]], parseInt(colors[0])];
      } else {
        setupGameStructure[gameNum][colors[1]] =  [parseInt(colors[0])]
      }
  
    }
  }

  const keys  = Object.keys(setupGameStructure[gameNum]);
  let totalNums = [];
  keys.forEach((key) => {
    
    let nums = setupGameStructure[gameNum][key];
    nums = nums.sort(function(a, b){return a-b});
    totalNums.push(nums[nums.length - 1])
  })
  let total = 0;
  totalNums.forEach((num) => {
    if (total === 0) {
      total = num;
    } else {
      total = total * num;
    }
  })
  resultTotalGames = resultTotalGames + total;
});
console.log('resultTotalGames: ', resultTotalGames);