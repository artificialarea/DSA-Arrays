function removeChar(string, chars) {
    // Limitation: do not use Javascript's filter, split, or join methods.

    let stringArr = [];
    let charsArr = [];
    let result = '';
    
    for (let i = 0; i < string.length; i++) {
        stringArr.push(string.charAt(i));
    }
    for (let i = 0; i < chars.length; i++) {
        charsArr.push(chars.charAt(i));
    }

    // v1 filter
    // for (let i = 0; i < stringArr.length; i++) {
    //     if(charsArr.includes(stringArr[i]) == false){
    //         result = result + stringArr[i];
    //     }
    // }

    // v2 filter
    for (let element of stringArr) {
        if (!charsArr.includes(element)) {
            result += element;
        }
    }

    console.log(result);
    return result;
}

const string = 'Battle of the Vowels: Hawaii vs. Grozny';
const charsToRemove = 'aeiou';

removeChar(string, charsToRemove);
