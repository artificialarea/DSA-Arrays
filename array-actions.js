const Array = require('./array-v1'); 
// const Array = require('./array-v2'); 

function main(){

    Array.SIZE_RATIO = 3;
    
    // Create an instance of the Array class
    let arr = new Array();

    // 1) Add an item to the array
    arr.push(3);
    console.log(arr);

    // 2) Add some more items
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);

    // 2b) Add some more to increase capacity and pointer further
    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);
    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);
    // console.log(arr);

    // 3) Remove some elements from the array
    arr.pop()
    arr.pop()
    arr.pop()
    console.log(arr);

}

main();