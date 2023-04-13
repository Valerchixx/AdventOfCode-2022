const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\n');

const arrayOfPairs = data.map((item) => item.split(',').map((item) => item.split('-')));

function findPairs(array) {
    let count = 0;
    let countIntersection = 0;
    for(let i = 0; i < array.length; i++) {
        const pair1 = array[i][0];
        const pair2 = array[i][1];

        if((+pair1[0] >= pair2[0] && +pair1[0] <= +pair2[1]) || (+pair2[0] >= +pair1[0] && +pair2[0] <= +pair1[1])) {
            countIntersection++
        }

        if((+pair1[0] >= +pair2[0] && +pair1[1] <= +pair2[1]) || (+pair1[0] <= +pair2[0] && +pair1[1] >= +pair2[1])) {
            count = count + 1
        }
    }
    return countIntersection
}
