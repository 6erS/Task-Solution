// Additional functionality

import converter from "./additionalFunctions/converter.js";

// Data 

import input from './../data/input.js';
import { rules, addRule } from './../data/rules.js';

// Main

//__________________________________________________________

// Default Test with input.js


const convertation = input.map(
    testItem => console.log(converter(testItem, rules))
);

//__________________________________________________________

// Dynamic convercion

document.getElementById('convertButton').onclick = convertClick;

function convertClick() {

    let unit = document.getElementById('unit').value;
    document.getElementById('unit').value = '';

    let value = document.getElementById('convertValue').value;
    document.getElementById('convertValue').value = '';

    let convertTo = document.getElementById('convertTo').value;
    document.getElementById('convertTo').value = '';

    console.log("From\t" + unit);
    console.log("How much\t" + value);
    console.log("To\t" + convertTo);

    let preConvertObj = {
        "distance": { "unit": unit, "value": value },
        "convert_to": convertTo
    };

    console.log(converter(preConvertObj, rules));
}

//__________________________________________________________

// Additional rules

document.getElementById('addTheRuleButton').onclick = addClick;

function addClick() {

    let dimension = document.getElementById('dimension').value;
    document.getElementById('dimension').value = '';

    let coefficient = parseFloat(document.getElementById('coefficient').value);
    document.getElementById('coefficient').value = '';

    let newRule = {
        [dimension]: coefficient
    }

    console.log(newRule);

    addRule(newRule);

    console.log(rules);
}
