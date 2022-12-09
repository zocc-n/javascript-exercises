const fibonacci = function(num) {
    if(num < 1) return 'OOPS';
    let fib = [1, 1];
    for(let i=2; i<num; i++){
        fib.push(fib[fib.length-1] + fib[fib.length-2]);
    }
    return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
