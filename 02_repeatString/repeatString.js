const repeatString = function(string, num) {
    //let stringHolder = string;
    let result = "";
    if (num < 0){
        result = "ERROR";
    }
    for(let i = 0; i < num; i++){
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
