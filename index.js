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



function operate(operands, operators) {
    let i = 0;
    let result = parseFloat(operands[i]);
    for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
        case '+':
            result = addition(result, parseFloat(operands[i+1]));
            break;
        case '-':
            result = subtraction(result, parseFloat(operands[i+1]));
            break;
        case '*':
            result = multiplication(result, parseFloat(operands[i+1]));
            break;
        case '/':
            result = division(result, parseFloat(operands[i+1]));
            break;
        case 'EXP':
            result = exponent(result, parseFloat(operands[i+1]));
            break;
        default:
            return 'Invalid operator';
        }
    }
    return result; 
}

var operands = [];
let display = "";
let operators = [];
let numInput = [];

//getting id's from html//
let bottomLine = document.getElementById('bottomline');
let topLine = document.getElementById('topline');
let buttons = Array.from(document.querySelectorAll('#buttons button'));
let operatorButton = Array.from(document.querySelectorAll('#operator button'));
let numberButton = Array.from(document.querySelectorAll('#numbuttons button'));
let equalsButton = Array.from(document.querySelectorAll('#equals button'));

        buttons.forEach(function(button) {
            button.addEventListener('click', ({target}) => {

                if (target.textContent === '-' || target.textContent === '+' || target.textContent === '/' || target.textContent === '*') {
                    operators.push(target.textContent);
                    display += target.textContent;
                    topLine.textContent = display;
                    operands.push(numInput.join(''));
                    numInput = [];

                } else if (target.textContent === 'EXP') {
                    operators.push(target.textContent);
                    display += '^';
                    topLine.textContent = display;
                    operands.push(numInput.join(''));
                    numInput = [];

                } else if (target.textContent === '=') {
                    operands.push(numInput.join(''));
                    numInput = [];
                    let result = operate(operands, operators);
                    bottomLine.textContent = result;

                } else if (target.textContent === 'AC') {
                    topLine.textContent = '0';
                    bottomLine.textContent = '';
                    numInput = [];
                    display = "";
                    operands = [];
                    operators = [];
                    
                } else if (target.textContent === 'CE' && numInput.length > 0) {
                    let deleteNum = topLine.textContent.split('');
                    deleteNum.pop();
                    display = deleteNum.join('');
                    topLine.textContent = display;

                } else {
                    numInput.push(target.textContent);
                    display += target.textContent;
                    topLine.textContent = display;
        }
    });
});

