import createCertainPath from './createCertainPath/createCertainPath.js';

export default function createListOfVariations(questions, listOfJumpLists) {
    
    let listOfVariations = [];
    
    for (let i = 0; i < listOfJumpLists.length; i++) {

        let jumpList = listOfJumpLists[i];
        let newPath = createCertainPath(questions, jumpList);
        
        listOfVariations.push(newPath);
    }

    return listOfVariations;
}