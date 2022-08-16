
const concatArrays = (a, ...arrays) => {
    const flatArray = [...arrays].flat();
    const array = [...new Set(flatArray)];
    const cleanArray = array.filter(item => !item.includes(a));
    const trimmedArray = cleanArray.map(item=> item.trimEnd());

    return trimmedArray;
};


export default concatArrays;