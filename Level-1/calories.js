const fs = require('fs');

const arrayOfCalories = fs.readFileSync('input.txt', "utf-8").split('\n').map(Number);

function maxCalories(inputArray) {
    let calories = 0
    const sumOfCalories = inputArray.reduce((acc, item) => {
        if(item) {
            calories += item
        } else {
            acc.push(calories)
            calories = 0
        }
        return acc
    }, []);

    let maxValue = 0;
    for(let i = 0; i < sumOfCalories.length; i++) {
        if(sumOfCalories[i] > maxValue) {
            maxValue = sumOfCalories[i]
        }
    }

    return maxValue;
}

function maxOfThreeElfs(inputArray) {
    let calories = 0
    const sumOfCalories = inputArray.reduce((acc, item) => {
        if(item) {
            calories += item
        } else {
            acc.push(calories)
            calories = 0
        }
        return acc
    }, []);

    const arrayOfThreeFirst = sumOfCalories.sort((a,b) => b - a).slice(0,3);
    const sumOfThreeFirst = arrayOfThreeFirst.reduce((acc, item) => acc += item,0)
    return sumOfThreeFirst;
}
