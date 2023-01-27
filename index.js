function addition(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
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

var numInput = [];
let currentOperator = '';
let display = "";
let subInput = [];
let counter = 0;

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
                    numInput.push(subInput);
                    counter++
                    console.log(numInput);
                    console.log(subInput);
                } else if (target.textContent === 'EXP') {
                    currentOperator = target.textContent;
                    display += '^';
                    topLine.textContent = display;
                    numInput.push(subInput);
                    counter++
                    console.log(numInput);
                } else if (target.textContent === '=') {
                    let i = counter -1;
                    let result = operate(numInput[i], currentOperator, numInput[i+1]) * 10 / 10;
                    console.log(numInput);
                    console.log(numInput[i+1]);
                    bottomLine.textContent = result;
                    display = "";
                } else if (target.textContent === 'AC') {
                    topLine.textContent = '0';
                    bottomLine.textContent = '';
                    counter = 0;
                    numInput = [''];
                    display = "";
                    console.log(numInput)
                } else if (target.textContent === 'CE' && subInput.length > 0) {
                    subInput.pop();
                    display = subInput.join('');
                    topLine.textContent = display;
                } else {
                    subInput.push(target.textContent);
                    display += target.textContent;
                    topLine.textContent = display;
        }
    });
});