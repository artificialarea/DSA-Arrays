function mergeArrays(arr1, arr2) {

    const mergeArray = [...arr1, ...arr2].sort((a, b) => a - b);

    return mergeArray;
}

const arr1 = [11, 20, 3];
const arr2 = [1, 2, 34];

console.log(mergeArrays(arr1, arr2));