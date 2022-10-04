import input from '../data/input.js';
import createCellsArray from './createCellsArray/createCellsArray.js';
import createFirstGen from './generations/createFirstGen.js';
import createNextGen from './generations/createNextGen.js';
import toCountTotalCorrection from './toCountTotalCorrection/toCountTotalCorrection.js';

main();

function main() {
    
    let bestGeneration;
    let conditions = input.corrections;

    let cellsArray = createCellsArray(input.cells, conditions.length);
    let firstGeneration = createFirstGen(cellsArray);

    let bestTotalCorrection;
    let tmp = toCountTotalCorrection(firstGeneration);

    if (tmp <= maxTotalCorrection()) {
        bestTotalCorrection = tmp;
    }

    createNextGen(firstGeneration, conditions);


}

function maxTotalCorrection() {
    let result = 0;
    input.corrections.forEach(element => {
        result += element;
    });
    
    console.log("\nMax Total Correction:");
    console.log(result);
    
    return result;
}