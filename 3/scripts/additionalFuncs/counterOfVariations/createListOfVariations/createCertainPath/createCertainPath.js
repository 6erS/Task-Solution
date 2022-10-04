export default function createCertainPath(questions, jumpList) {
    let resultPath = [];

    for (let i = 0; i < jumpList.length; i++) {
        
        let pointer = jumpList[i+1];
        
        let questObj = questions[jumpList[i]];
        let questText = Object.keys(questObj)[0];

        let allAnswers = questObj[questText];

        let answerText;

        if (allAnswers[0][1] === allAnswers[1][1]) {
            answerText = allAnswers[0][0] + "/" + allAnswers[1][0];
        } else if (allAnswers[0][1] === pointer) {
            answerText = allAnswers[0][0];
        } else {
            answerText = allAnswers[1][0];
        }

        let pathItem = {
            [questText]: answerText
        }
        resultPath.push(pathItem);
    }
    return resultPath;
}