const fibonacci = function(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    if (n >= 0)
    {
        for (let i = 0; i < n; i++)
            {
                c = a + b;
                a = b;
                b = c;
                console.log("a: " + a + "b: " + b);
            }
            return a;
    }
    else 
    {
        return "OOPS";
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
