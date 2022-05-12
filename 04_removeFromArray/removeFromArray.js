const removeFromArray = function(array, ...removeValues) {

    for (let j = 0; j < removeValues.length; j++) {

        for (let i = 0; i < array.length; i++) {
            if (array[i] === removeValues[j]) {
                array.splice(i, 1);
            }
        }

    }

    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
