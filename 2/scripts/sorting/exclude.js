export default function exclude(dataList, keyWords, nullExecution) {

    let searchKey;
    
    for (let i = 0; i < dataList.length; i++) {
        for (let j = 0; j < keyWords.length; j++) {
            
            searchKey=Object.keys(keyWords[j]);
            
            if (dataList[i] === undefined) {
                break;
            }
            if (dataList[i][searchKey] === keyWords[j][searchKey]) {
                delete dataList[i];
                break;
            }
        }
    }

    let resultWithoutNulls = nullExecution(JSON.parse(JSON.stringify(dataList)));

    console.log("\nExclude:");
    console.log(resultWithoutNulls);
    return resultWithoutNulls;
}