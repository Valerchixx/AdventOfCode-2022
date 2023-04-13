const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\n');
const roundsObject = data.reduce((acc, item, idx) => Object.assign(acc, {[`round${idx + 1}`]: item.replace(/\s+/g, '') }), {})

const myChoice = ['X', 'Y', 'Z'];
const enemyChoice = ['A','B','C'];

const winCombinations = ['AY', 'BZ', 'CX'];
const drawCombinations = ['AX', 'BY', 'CZ'];
const loosingCombinations = ['AZ','BX','CY']

const sumInTotal = (object) => Object.values(object).reduce((acc, item) => acc += item, 0);

function game(roundsObject) {
    for(const key in roundsObject) {
        let score = myChoice.indexOf(roundsObject[key][1]) + 1;
        if(winCombinations.includes(roundsObject[key])) {
            score += 6
        } else if(drawCombinations.includes(roundsObject[key])) {
            score += 3
        }
        roundsObject[key] = score
    }

    const sum = sumInTotal(roundsObject);

    return sum

}

// part 2

function game2(roundsObject) {
    for(const key in roundsObject) {
        let score = 0;
        if(roundsObject[key][1] == 'Y') {
            score = 3 + enemyChoice.indexOf(roundsObject[key][0]) + 1;
        } else if(roundsObject[key][1] == 'X') {
           let combinationToLoose =  loosingCombinations.find((item) => item.includes(roundsObject[key][0]))
           score = myChoice.indexOf(combinationToLoose[1]) + 1
        } else {
            let combinationToWin = winCombinations.find((item) => item.includes(roundsObject[key][0]));
            score = 6 + myChoice.indexOf(combinationToWin[1]) + 1;
        }

        roundsObject[key] = score
    }

    const sum = sumInTotal(roundsObject);
    return sum

}
