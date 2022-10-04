import input from "../data/input.js";
import randomAnswers from "./additionalFuncs/randomAnswers.js";
import simulator from "./additionalFuncs/simulator.js";
import counterOfVariations from './additionalFuncs/counterOfVariations/counterOfVariations.js';

let questionsList = JSON.parse(JSON.stringify(input));

console.log(main(questionsList));


function main(questions) {
    let answerArray = randomAnswers(questions.length);
    simulator(questions, answerArray);
    let result = counterOfVariations(questions);
    return result;
}
