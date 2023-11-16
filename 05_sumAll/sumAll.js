const sumAll = function(num1, num2) {
    let finalSum = 0;
        if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
            return "ERROR";
        }
        else if(num1 < num2){
            for(; num1 <= num2; num1++){
                finalSum += num1;
            }
        }
        else if (num1 > num2){
            for(; num2 <= num1; num2++){
                finalSum += num2;
            }
        }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
