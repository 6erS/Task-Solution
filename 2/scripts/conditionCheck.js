import exclude from './sorting/exclude.js';
import sortBy from './sorting/sortBy.js';
import include from './sorting/include.js';
import nullExecution from './sorting/nullExecution/nullExecution.js';

export function conditionCheck(wholeInput) {
    let rules = Object.keys(wholeInput.condition);
    let copy = wholeInput.data;
    
    rules.forEach(statement => {
        switch (statement) {
            case 'include': copy = include(copy, wholeInput.condition.include, nullExecution); break;
            case 'exclude': copy = exclude(copy, wholeInput.condition.exclude, nullExecution); break;
            case 'sort_by': copy = sortBy(copy, wholeInput.condition.sort_by); break;
            default:
                console.log("Unknown condition!");
                break;
        }
    });

    return copy;
}