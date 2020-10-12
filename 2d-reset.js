const reset2D = (arr) => {

    let zeroes = []; // captures all instances of 0 by coordinates [row, column]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                // console.log('zero! row:', i, 'column:', j);
                zeroes.push([i, j]);
            }
        }
    }
    // console.log(zeroes);

    // parse array and modify each item within its sub-array items to zero when appropriate
    zeroes.forEach(zero => {
        let row = zero[0];
        let column = zero[1];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i === row || j === column) {
                    arr[i][j] = 0;
                }
            }
        }
    });

    console.log(arr);
    return arr;


};

const arr = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

reset2D(arr);