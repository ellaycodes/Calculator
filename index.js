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

let count1 = 0;
let count2 = 0;
var numInput1 = [];
var numInput2 = [];
let currentOperator = '';
let display = "";
let buttonPressed = false;

//getting id's from html//
let bottomLine = document.getElementById('bottomline');
let topLine = document.getElementById('topline');
let buttons = Array.from(document.querySelectorAll('#buttons button'));

buttons.forEach(function(button) {
    button.addEventListener('click', ({target}) => {
        if (target.textContent === '-' || target.textContent === '+' || target.textContent === '/' || target.textContent === '*') {
            Object.freeze(numInput1);
            buttonPressed = true;
            currentOperator = target.textContent;
            display += currentOperator;
            topLine.textContent = display;
        } else if (target.textContent === 'EXP') {
            currentOperator = target.textContent;
            display += '^';
            topLine.textContent = display;
        } else if (target.textContent === '=') {
            let result = Math.round(operate(numInput1.join(''), currentOperator, numInput2.join('')) * 10) / 10;
            bottomLine.textContent = result;
            display = "";
        } else if (target.textContent === 'AC') {
            topLine.innerHTML = '0';
            bottomLine.innerHTML = '';
            numInput1 = [];
            count1 = 0;
            numInput2 = [];
            count2 = 0;
            display = "";
            buttonPressed = false;
        } else if (target.textContent === 'CE' && numInput1.length > 0) {
            numInput1.pop();
            count1--;
            display = numInput1.join('');
            topLine.textContent = display;
        } else {
            numInput1[count1] = target.textContent;
            count1++;
            display += target.textContent;
            topLine.textContent = display;
            if (buttonPressed) {
                numInput2.push(target.textContent);
            }
            console.log('numInput1: ' + numInput1);
            console.log('numInput2: ' + numInput2);
        }
    });
});
