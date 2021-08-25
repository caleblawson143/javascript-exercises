const sumAll = function(num1, num2) {
    let numArray = []
    let sum = 0;

    if (num1 < 0 || num2 < 0) {
        return("ERROR");
    }
    if (typeof num1 != "number" || typeof num2 != "number") {
        return("ERROR");
    }

    if (num1 < num2) {
        while (num1 != num2 + 1) {
            numArray.push(num1);
            num1++;
        }
    } else if (num2 < num1) {
        while (num2 != num1 + 1) {
            numArray.push(num2);
            num2++;
        } 
    }

    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

return sum;
};

sumAll(6, 3);

module.exports = sumAll;
