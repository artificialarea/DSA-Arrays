// The Maximum Sum subarray problem 
// is the task of finding a contiguous subarray with the largest sum.
// https://en.wikipedia.org/wiki/Maximum_subarray_problem

// e.g.
// [4, 6, -3, 5, -2, 1]
// Add all elements and the sum is 11, 
// but at one point earlier in that process the maxSum reached 12.


function maxSum(array) {
    let currentSum = 0;
    let currentHighest = array[0]; // Initialize this with array[0] instead of 0 in case we have an array with all negative numbers

    array.forEach(number => {
        currentSum += number;
        if (currentSum > currentHighest) {
            currentHighest = currentSum;
        }
    })

    console.log(currentHighest);
    return currentHighest;
}

const arr = [4, 6, -3, 5, -2, 1];

maxSum(arr);