const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    newArray = array.filter(item => !toRemove.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
