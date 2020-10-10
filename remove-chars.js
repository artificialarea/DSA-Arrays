function removeChar(string, chars) {
    // const arrStr = string.split('');
    // const arrChar = chars.split('');

    let result = [];
    let charsFilter = [];
    let finalResults = '';
    
    for (let i = 0; i < string.length; i++) {
        result.push(string.charAt(i))
    }
    for (let i = 0; i < chars.length; i++) {
        charsFilter.push(chars.charAt(i))
    }

    for (let i = 0; i < result.length; i++) {
        if(charsFilter.includes(result[i]) == false){
            finalResults = finalResults + result[i]
        }
    }

console.log(finalResults)
}

const string = 'leap year';
const charsToRemove = 'aeiou';

removeChar(string, charsToRemove);
