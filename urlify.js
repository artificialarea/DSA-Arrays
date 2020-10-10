const URLify = (string) => {

    const arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr[i] = '%20';
        }
    }

    return arr.join('');
};


console.log(URLify('tika taco tpm'))