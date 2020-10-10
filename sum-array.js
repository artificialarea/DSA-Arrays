const sumOfArray = (arr) => {

    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];

    }

    return sum;

};

console.log(sumOfArray([4, 6, -3, 5, -2, 1]))