/*
import input from "../../../data/input.js";

export default function findThePath(pointer, currentAnswers) {
    if (pointer === null) {
        return [currentAnswers];
    }

    let currentQuestion = input[pointer];
    let questKey = Object.keys(currentQuestion)[0];


    let answers = [];
    currentAnswers.forEach(element =>
        answers.push(element)
    );

    let result = [];
    let tmp = [];
        debugger
    let valueOfTheFirstAnswer = currentQuestion[questKey][0][1];
    let valueOfTheSecondAnswer = currentQuestion[questKey][1][1];

    if (valueOfTheFirstAnswer === valueOfTheSecondAnswer) {
        answers.push(2);
        tmp = (findThePath(valueOfTheFirstAnswer, answers));
        tmp.forEach(element => {
            result.push(element);
        });
        return result;
    } else {
        answers.push(0);
        tmp = (findThePath(valueOfTheFirstAnswer, answers));
        tmp.forEach(element => {
            result.push(element);
        });
        answers.push(1);
        tmp = (findThePath(valueOfTheSecondAnswer, answers));
        tmp.forEach(element => {
            result.push(element);
        });
        return result;
    }
}

*/


import input from "../../../data/input.js";

export default function findThePath(pointer, currentPath, currentAnswers) {
    if (pointer === null) {
        return [currentPath];
    }
    
    let currentQuestion = input[pointer];
    let questKey = Object.keys(currentQuestion)[0];
    
    let path = [];
    currentPath.forEach(element => {
        path.push(element);
    });
    path.push(pointer);

    let answers = [];
    answers.push(currentAnswers);
    
    let result = [];
    let tmp = [];

    let valueOfTheFirstAnswer = currentQuestion[questKey][0][1];
    let valueOfTheSecondAnswer = currentQuestion[questKey][1][1];
    
    if (valueOfTheFirstAnswer === valueOfTheSecondAnswer) {
        tmp = (findThePath(valueOfTheFirstAnswer, path, [0, 1]));
        tmp.forEach(element => {
            result.push(element);
        });
        return result;
    } else {
        tmp = (findThePath(valueOfTheFirstAnswer, path, 0));
        tmp.forEach(element => {
            result.push(element);
        });
        tmp = (findThePath(valueOfTheSecondAnswer, path, 1));
        tmp.forEach(element => {
            result.push(element);
        });
        return result;
    }
}
