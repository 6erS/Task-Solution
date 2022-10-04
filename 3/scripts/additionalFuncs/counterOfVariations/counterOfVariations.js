import findThePath from './findThePath.js';
import createListOfVariations from './createListOfVariations/createListOfVariations.js';

export default function counterOfVariations(questions) {
    let pointer = 0;
    
    let allVariations = (findThePath(pointer, [], null));

    console.log(allVariations);

    let result = {
        paths: { 
            number: allVariations.length,
            list: createListOfVariations(questions, allVariations)
        }
    }

    return result;
}