const removeFromArray = function(arr, ...requestedRemovals) {
let newArray = [];

    arr.forEach((arrayItem) => {
        if (!requestedRemovals.includes(arrayItem)) newArray.push(arrayItem);
    });

    return newArray;
};

module.exports = removeFromArray;
