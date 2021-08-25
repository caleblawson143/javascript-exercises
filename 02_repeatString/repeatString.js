const repeatString = function (string, num) {

    let answer = "";

    if (num < 0) {
        return("ERROR");
    }
    
    for (i = 0; i < num; i++) {
        answer = answer.concat(string);
    }

    return answer;
};

module.exports = repeatString;
