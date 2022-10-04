import extractQuestions from "./extractQuestions/extractQuestions.js";

export default function simulator(questions, answers) {
    
    let pointer = 0;

    const keyList = extractQuestions(questions);
    console.log(keyList);
    
    while (pointer !== null) {

        let currentQuestion = keyList[pointer];
        let listOfAnswers = questions[pointer][currentQuestion];

        console.log("\n");
        console.log(currentQuestion);
        console.log(listOfAnswers[answers[pointer]][0]);
        
        pointer = listOfAnswers[answers[pointer]][1];

    }
    
}