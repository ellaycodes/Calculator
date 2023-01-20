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
              return subtraction(num1, num2);
            case '*':
              return multiplication(num1, num2);
            case '/':
              return division(num1, num2);
            default:
              return "Invalid operator";
          };
        };