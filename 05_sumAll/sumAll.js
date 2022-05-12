const sumAll = function(int1, int2) {

    //return error if one of these conditions is met
    if (int1 < 0 || int2 < 0 || typeof(int1) !== 'number' || typeof(int2) !== 'number') {
        return 'ERROR';
    }

    // swap int1 and int2 values if int2 is bigger than int1
    if (int1 > int2) {
        let a;
        a = int1;
        int1 = int2;
        int2 = a;
    }

    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
