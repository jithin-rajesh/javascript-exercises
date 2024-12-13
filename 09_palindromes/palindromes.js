const palindromes = function (str) {
    let reverse =  str
        .split('')
        .filter(item => (item.toUpperCase() != item.toLowerCase()) || (item >= '0' && item<='9'))
        .map(item => item.toLowerCase())
        .reduceRight((reversed, current) => reversed + current, '');
        console.log("Reverse : " + reverse);
    let string = str
        .split('')
        .filter(item => (item.toUpperCase() != item.toLowerCase())|| (item >= '0' && item<='9'))
        .map(item => item.toLowerCase())
        .reduce((original, current)=> original + current, '');
        console.log("Original: " + string);

    if (reverse.toString() === string.toString())
    {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
