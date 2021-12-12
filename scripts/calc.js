addition = (num1, num2) => num1 + num2;
subtraction = (num1, num2) => num1 - num2;
multiplication = (num1, num2) => num1 * num2;

division = (num1, num2) => {
    if(num2 === 0) {
        return("Cannot divide by 0!")
    } else {
        return num1 / num2;
    };
}


module.exports = addition, subtraction, multiplication, division;     //functions must be exported in order for the "required" statement in test file to work
