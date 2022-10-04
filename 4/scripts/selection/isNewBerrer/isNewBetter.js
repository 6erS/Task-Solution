export default function isNewBetter(oldChromosome, newChromosome, condition) {

    let newCorrection = newChromosome[0] + (newChromosome[1] / 2);
    let oldCorrection = oldChromosome[0] + (oldChromosome[1] / 2);

    let isNewCorrectionAcceptable = ((newCorrection <= condition) && (Math.abs(condition - newCorrection) < Math.abs(condition - oldCorrection)));

    if (isNewCorrectionAcceptable) {
        return true;
    }
    return false;
}