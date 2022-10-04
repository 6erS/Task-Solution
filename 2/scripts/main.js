import input from './../data/input.js';
import { conditionCheck } from './conditionCheck.js';

if (input) {
    let sortedInput = conditionCheck(input);
    console.log("\nGlobal Result:");
    console.log(sortedInput);
}