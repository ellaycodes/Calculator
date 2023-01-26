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
    if (b == 0) {
        return "Invalid input: division by zero";
    }
    let x = a / b;
    return x;
};

function exponent(a, b) {
    if (b <= 0 && a === 0) {
        return "Invalid input: base is zero, exponent must be greater than zero"
    }
    let x = a ** b;
    return x;
};



function operate(a, operator, b) {
    a = parseFloat(a.replace(",", "."));
    b = parseFloat(b.replace(",", "."));
    if (isNaN(a) || isNaN(b)) {
        return "Invalid input: must input numbers"
    }
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

let currentArrayIndex = 0;;
var numInput = [[]];
let currentOperator = '';
let display = "";
let buttonPressed = false;

//getting id's from html//
let bottomLine = document.getElementById('bottomline');
let topLine = document.getElementById('topline');
let buttons = Array.from(document.querySelectorAll('#buttons button'));

buttons.forEach(function(button) {
    button.addEventListener('click', ({target}) => {
        if (target.textContent === '-' || target.textContent === '+' || 
        target.textContent === '/' || target.textContent === '*') {
            buttonPressed = true;
            currentOperator = target.textContent;
            display += currentOperator;
            topLine.textContent = display;
            numInput.push([]); // Create a new sub-array
            currentArrayIndex++;
        } else if (target.textContent === 'EXP') {
            currentOperator = target.textContent;
            display += '^';
            topLine.textContent = display;
        } else if (target.textContent === '=') {
            let result = parseFloat(numInput[0].join(''));
            for (let i = 0; i < currentArrayIndex-1; i++) {
                if (!isNaN(result)) {
            result = operate(result, currentOperator, numInput[i+1].join('')) * 10 / 10;
            } else {
                bottomLine.textContent = "Invalid Operator";
                return;
            }
        }
            bottomLine.textContent = result;
            display = "";
        } else if (target.textContent === 'AC') {
            topLine.textContent = '0';
            bottomLine.textContent = '';
            numInput[0] = [];
            currentArrayIndex = 0;
            display = "";
            buttonPressed = false;
        } else if (target.textContent === 'CE' && numInput[currentArrayIndex].length > 0) {
            numInput[currentArrayIndex].pop();
            display = numInput[currentArrayIndex].join('');
            topLine.textContent = display;
        } else {
            numInput[currentArrayIndex].push(target.textContent);
            display += target.textContent;
            topLine.textContent = display;
            if (buttonPressed) {
                numInput[currentArrayIndex].push(target.textContent);
                topLine.textContent = display;
            }
            console.log('numInput1: ' + numInput[currentArrayIndex]);
        }
    });
});

