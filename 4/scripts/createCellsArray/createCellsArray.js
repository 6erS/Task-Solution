export default function createCellsArray(cells, countOfCorrections) {
    let cellsCount = countOfCorrections * 2;
    let resultArray = [];

    for (let i = 0; i < cellsCount; i++) {
        if (cells[i] !== undefined) {
            resultArray.push(cells[i]);
            continue;
        }
        resultArray.push(0);
    }
    console.log("Cells:");
    console.log(resultArray);
    console.log("\n");
    return resultArray;
}