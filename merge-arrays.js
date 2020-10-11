function mergeArrays(arr1, arr2) {

    const mergeArray = [...arr1, ...arr2]
        .sort((a, b) => a - b);

    console.log(mergeArray);
    return mergeArray;
}

const arr1 = [11, 20, 3, 8, 7];
const arr2 = [1, 2, 34];

mergeArrays(arr1, arr2);