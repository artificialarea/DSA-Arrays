function removeChar(string, chars) {
    // const arrStr = string.split('');
    // const arrChar = chars.split('');

    let stringArr = [];
    let charsArr = [];
    let result = [];
    let finalResults = '';
    
    for (let i = 0; i < string.length; i++) {
        stringArr.push(string.charAt(i))
    }
    for (let i = 0; i < chars.length; i++) {
        charsArr.push(chars.charAt(i))
    }

    for (let element of stringArr) {
        if (!charsArr.includes(element)) {
            result.push(element)
        }
    }

    // return result;
    return result.join('');

}

const string = 'Battle of the Vowels: Hawaii vs. Grozny';
const charsToRemove = 'aeiou';

console.log(removeChar(string, charsToRemove));
