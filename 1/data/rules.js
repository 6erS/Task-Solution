export let rules = {
    "m": 1.00,
    "cm": 100.00,
    "in": 39.37,
    "ft": 3.28
}

export function addRule(newRule) {
    Object.assign(rules, newRule);
}

/*


    <script type="module" src="/data/input.js"></script>
    <script type="module" src="/data/rules.js"></script>
    <script type="module" src="/scripts/main.js"></script>
    <script type="module" src="/scripts/additionalFunctions/converter.js"></script>
    <script type="module" src="/scripts/additionalFunctions/addFunctionality.js"></script>
*/