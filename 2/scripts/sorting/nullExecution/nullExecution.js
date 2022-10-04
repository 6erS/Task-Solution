export default function nullExecution(obj) {
    let resultWithoutNulls = [];
    
    for (let i = 0; i < obj.length; i++) {
        if (obj[i]) {
            resultWithoutNulls.push(obj[i]);
        }       
    }
    return resultWithoutNulls;
}