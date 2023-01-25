function addition(a, b) {
    let x = a + b;
    return x;
};

function subtraction(a, b) {
    let x = a - b;
    return x;
};

function multiplication(a, b) {
    let x = a * b;
    return x;
};

function division(a, b) {
    let x = a / b;
    return x;
};

function exponent(a, b) {
    let x = a ** b;
    return x;
};



function operate(a, operator, b) {
    a = parseFloat(a.replace(",", "."));
    b = parseFloat(b.replace(",", "."));
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        case 'EXP':
            return exponent(a, b);
        default:
        return "Invalid";
    };
};

let count = 0;
var numInput = [];
let currentOperator = '';
let display = "";

//getting id's from html//
let bottomLine = document.getElementById('bottomline');
let topLine = document.getElementById('topline');
let buttons = Array.from(document.querySelectorAll('#buttons button'));

buttons.forEach(function(button) {
    button.addEventListener('click', ({target}) => {
        if (target.textContent === '-' || target.textContent === '+' || target.textContent === '/' || target.textContent === '*') {
            currentOperator = target.textContent;
            display += currentOperator;
            topLine.textContent = display;
        } else if (target.textContent === 'EXP') {
            currentOperator = target.textContent;
            display += '^';
            topLine.textContent = display;
        } else if (target.textContent === '=') {
            let result = operate(numInput[0], currentOperator, numInput[1]);
            bottomLine.textContent = result;
            display = "";
        } else if (target.textContent === 'AC') {
            topLine.innerHTML = '0';
            bottomLine.innerHTML = '';
            numInput = [];
            count = 0;
            display = "";
        } else if (target.textContent === 'CE' && numInput.length > 0) {
            numInput.pop();
            count--;
            display = numInput.join('');
            topLine.textContent = display;
        } else {
            numInput[count] = target.textContent;
            count++;
            display += target.textContent;
            topLine.textContent = display;
            console.log(numInput);
        }
    });
});
