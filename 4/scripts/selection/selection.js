import isNewBetter from "./isNewBerrer/isNewBetter.js";

export default function selection(currentGen, condition) {

    let bestChromosomeIndex = 0;

    let previouseChromosome = currentGen[0];

    for (let i = 1; i < currentGen.length; i++) {

        let currentChromosome = currentGen[i];

        if (isNewBetter(previouseChromosome, currentChromosome, condition)) {
            bestChromosomeIndex = i;
        }

        previouseChromosome = currentGen[bestChromosomeIndex];
    }

    let bestCorrection = currentGen[bestChromosomeIndex][0] + (currentGen[bestChromosomeIndex][1] / 2);

    if (bestCorrection <= condition) {
        return currentGen[bestChromosomeIndex];
    }
    return null;
}