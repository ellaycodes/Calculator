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
        default:
        return "Invalid operator";
    };
};

let count = 0;
let numInput = [];
let operator = '';

let screenEntry = document.getElementById('bottomline');
let screenSave = document.getElementById('topline');
let buttons = Array.from(document.querySelectorAll('#buttons button'));

buttons.forEach(function(button) {
    button.addEventListener('click', ({target}) => {
        if (target.innerText === '+' || target.innerText === '-' || target.innerText === '*' || target.innerText === '/') {
            operator = target.innerText;
        } else if (target.innerText === '=') {
            operate(numInput[0], operator, numInput[1]);
        } else {
            numInput[count] = target.innerText;
            count++;
            screenSave.innerHTML = numInput.join('');
        }
    });
});

