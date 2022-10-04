export default function extractQuestions(listOfObjects) {
    
    let result = [];
    
    for (let i = 0; i < listOfObjects.length; i++) {
        result.push(Object.keys(listOfObjects[i])[0]);
    }

    return result;
}