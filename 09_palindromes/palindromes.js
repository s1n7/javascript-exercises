const palindromes = function (word) {
    word = word.replace(/[!,.]/g, "").replace(/ /g, "").toLowerCase();
    const reverse = word.split("").reverse().join("").toLowerCase();
    if (word === reverse) {
        return true;
    } 
    return false;
};

// Do not edit below this line
module.exports = palindromes;
