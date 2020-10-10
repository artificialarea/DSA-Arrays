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
        for (let j = 0; j < charsFilter.length; j++) {
            if (results[i] == charsFilter.charAt(j)) {
                finalResults[]
            }
        }
    }




    return result;


}

const string = 'leap year';
const charsToRemove = 'aeiou';

console.log(removeChar(string, charsToRemove));
