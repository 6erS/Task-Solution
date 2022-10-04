export default function toCountTotalCorrection(Generation) {
    let result = 0;
    
    for (let i = 0; i < Generation.length; i++) {
        result += Generation[i][0] + (Generation[i][1] / 2)
    }
    console.log("\nTotal Correction of current Gen:");
    console.log(result);
    return result;
}