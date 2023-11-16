const leapYears = function(year) {

    let answer = true;
    if(year % 4 == 0){
        if(year % 100 != 0 && year % 400){
            answer = true;
        }
        //this is for century years that fit the rules
        else if (year % 100 == 0 && year % 400) {
            answer = false;
        }
    }
    else {
        answer = false;
    }
    return answer;
};

// Do not edit below this line
module.exports = leapYears;
