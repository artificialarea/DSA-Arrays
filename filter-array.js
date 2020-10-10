const filterLessThanFive = (arr) => {
    
    let newArr = [];

    for (let i = 0; i < arr.length; i++ ) {

        if (!(arr[i] < 5)) {
            newArr.push(arr[i]);
        } 
    }

    return newArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 4, 9, 10];

console.log(filterLessThanFive(arr));