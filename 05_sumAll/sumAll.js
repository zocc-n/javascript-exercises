const sumAll = function(a,b) {
    if((typeof a != 'number' || typeof b != 'number') || (a<0 || b<0)){
        return 'ERROR';
    }
    
    if(a<b){
        let min = a;
        let max = b;
    } else{
        let min = b;
        let max = a;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
