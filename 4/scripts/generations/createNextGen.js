import selection from '../selection/selection.js';

export default function createNextGen(previouseGeneration, conditions) {
    let newGen = [];
    
    for (let i = 0; i < conditions.length; i++) {
        let bestCorrection = selection(previouseGeneration, conditions[i]);
        newGen.push(bestCorrection);
        previouseGeneration.splice(previouseGeneration.indexOf(bestCorrection), 1);
    }
    console.log("\n");
    console.log(newGen);
}