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

addition();
subtraction();
multiplication();
division();

function operate(operator, a, b) {
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

const screenEntry = document.getElementById('bottomline');
document.querySelector('#buttons').addEventListener('click', ({target}) => {
    console.log(target.innerText);
    let firstInput = screenEntry.innerHTML = target.innerText;
    console.log('number 1: ' + firstInput);
});
