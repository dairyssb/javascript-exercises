const reverseString = function(string) {
    //initalizing result and placeholder to capture last string.
    let result = "";
    let placeholder = "";
    
    //looping around string to capture last char and reassign to result
    for(let i = 1; i <= string.length; i++){
        placeholder = string.substr(string.length - i, 1);
        result += placeholder;
        //placeholder = "";
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
