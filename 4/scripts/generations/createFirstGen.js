export default function createFirstGen(listOfCells) {
    let generation = [];
    let chromosome = [];

    for (let i = 0; i < listOfCells.length; i++) {
        // Creating of a chromosome
        if ((i % 2 !== 0)&&(i != 0)) {
            chromosome.push(listOfCells[i]);
            generation.push(chromosome);
            chromosome = [];
        } else {
            chromosome.push(listOfCells[i]);
        }
        //_________________________
    }

    return generation;
}