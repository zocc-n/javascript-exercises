const sumAll = function(a,b) {
    if((typeof a != 'number' || typeof b != 'number') || (a<0 || b<0)){
        return 'ERROR';
    }

    let min, max;
    if(a<b){
        min = a;
        max = b;
    } else{
        min = b;
        max = a;
    }

    let sum = 0;
    for(let i=min; i<=max; i++){
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
