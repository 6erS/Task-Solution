function converter(convertFromTo, rules) {
    let intermidiateCoefficient, aimsCoefficient;

    intermidiateCoefficient = rules[convertFromTo.distance.unit];
    aimsCoefficient = rules[convertFromTo.convert_to];

    return {
        "unit": convertFromTo.convert_to,
        "value": ((convertFromTo.distance.value / intermidiateCoefficient) * aimsCoefficient).toFixed(2)
    }
}

export default converter;