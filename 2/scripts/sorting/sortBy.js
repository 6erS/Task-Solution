export default function sortBy(dataList, sortState) {
    console.log("\nSort Rules");
    console.log(sortState);
    console.log('Sort_By:');
    
    let counter = 0;
    let sortedResult = JSON.parse(JSON.stringify(dataList)).sort(dataSortingByFirstAttribute);

    for (counter = 1; counter < sortState.length; counter++) {
        sortedResult = sortedResult.sort(dataSortingByTheFollowingAttribute);
    }

    console.log(sortedResult);

    return sortedResult;

    function dataSortingByFirstAttribute(x, y) {
        if (x[sortState[counter]] < y[sortState[counter]]) { return -1; }
        if (x[sortState[counter]] > y[sortState[counter]]) { return 1; }
        return 0;
    }

    function dataSortingByTheFollowingAttribute(x, y) {
        if (x[sortState[counter - 1]] === y[sortState[counter - 1]]) {
            if (x[sortState[counter]] < y[sortState[counter]]) { return -1; }
            if (x[sortState[counter]] > y[sortState[counter]]) { return 1; }
            return 0;
        }
        return 0;
    }
}