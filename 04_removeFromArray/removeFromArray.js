const removeFromArray = function(array, remove) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === remove) {
            array.splice(i, 1);
        }
    }

    return array;
};

console.log(removeFromArray([1,2,3,4], 1))

// Do not edit below this line
module.exports = removeFromArray;
