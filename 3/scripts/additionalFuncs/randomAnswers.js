export default function randomAnswers(countOfQuestions) {
    
    let randomAnswersArray = [];

    for (let i = 0; i < countOfQuestions; i++) {
        randomAnswersArray.push((Math.random(2).toFixed(0)));
    }

    console.log("Random answers -\t" + randomAnswersArray);
    return randomAnswersArray;
}