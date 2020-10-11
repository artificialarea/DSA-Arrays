const products = (arr) => {

    let result = [];

    // We need to generate a product for each element in the array
    arr.forEach(number => {
        let product = 1;    
        // The product is the result of multiplying every element in the array
        // except the element we are currently looking at.
        for (let element of arr) {
            if (element !== number) {
                product *= element; // need to give product an initial value of 1, else this would NaN.
            }
        }
        result.push(product);
    });

    console.log(result);
    return result;
};

const arr = [1, 3, 9, 4];

products(arr);


/*
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27] // -> [ (3*9*4), (1*9*4), (1*3*4), (1*3*9)]
*/