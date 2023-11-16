const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    //loop through array to find if the values are included in the array
    for(let i = 0; i < array.length; i++){
        if(!theArgs.includes(array[i])){
            //pushing values that are not args to the new array
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
