const Array = require('./array-v1'); 
// const Array = require('./array-v2'); 

function main(){

    // Create an instance of the Array class
    let arr = new Array();

    // Add a string to the array
    arr.push('tauhida');
    console.log(arr);
    console.log(arr.get(0), `!!!!!`);    // NaN!

}

main();