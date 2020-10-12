const isRotation = (str1, str2) => {
    let arr = str1.split('');

    for (let i = 0; i < arr.length; i++) {
        // remove first element in the array...
        let temp = arr.shift();
        // ... and reinsert it as the last element in the array
        arr.push(temp);
        console.log(arr);

        // convert arr back to string...
        let rotation = arr.join('');
        console.log(rotation)

        // ... to compare strings after each iteration.
        // If match occurs then return true and stop further looping
        if (rotation === str2) {
            console.log('TRUE');
            return true;
        }
    }
    console.log('FALSE');
    return false;
};

isRotation('amazon', 'azonma'); // false
isRotation('amazon', 'azonam'); // true
