

// take the operator input
const operator = prompt('Enter operator ( either +, -, * , ^ , / or ^2');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
let number2;
if (operator != "^2") {
    number2 = parseFloat(prompt('Enter second number: '));
}


let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
    alert(result)
}
else if (operator == '-') {
    result = number1 - number2;
    alert(result)
}
else if (operator == '*') {
    result = number1 * number2;
    alert(result)
}

else if (operator == '^'){
    alert(Math.pow(number1,number2));
 
}
else if (operator == '/'){
    result = number1 / number2;
    alert(result)
}
else if (operator == '^2'){
    alert(Math.pow(number1,2));
}


else {alert('error')}


