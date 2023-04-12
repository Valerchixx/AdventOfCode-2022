const fs = require('fs');

const arrayOfData = fs.readFileSync('input.txt', 'utf-8').split('\n').map(String);

const findPriority = (arr) => arr.map((item) => item === item.toLowerCase() ? item.charCodeAt(0) - 96: item.charCodeAt(0) - 38);
const sumOfPriorities = (arr) => arr.reduce((acc, item) => acc += item,0);


function sortBackPack(array) {
    const letters = []
    for(let i = 0; i < array.length; i++) {
        let str1 = array[i].slice(0, array[i].length / 2);
        let str2 = array[i].slice(array[i].length / 2);
        let char = str1.split('').filter((item) => str2.includes(item)).slice(0,1).join('');
        letters.push(char)
    }

    const nums = findPriority(letters);
    const sum = sumOfPriorities(nums);
    return sum

}

// part 2

function findBadges(array) {
    const badges = [];
    const size = 3;

    for(let i = 0; i < Math.ceil(array.length / 3); i++) {
        const arr = array.slice((i * size), (i * size) + size);
        let badge = arr[0].split('').find((char) => arr.every((item) => item.includes(char)));
        badges.push(badge);
    }

    const badgesPriority = findPriority(badges);
    const sum = sumOfPriorities(badgesPriority);

    return sum
}