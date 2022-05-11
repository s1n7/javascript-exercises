const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [];
    for(let i = 0; i < stringArray.length; i++) {
        reverseArray[stringArray.length-1-i] = stringArray[i];
    }

    return reverseArray.join("");
};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
