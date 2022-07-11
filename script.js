const mainContent = document.querySelector('#main-content');

//  Total Value
let previousValue = 0;
let currentValue = 0;

let calculator = document.createElement('div');
calculator.setAttribute("class", "calculator");
mainContent.appendChild(calculator);

//  SCREEN
let screen = document.createElement('div');
screen.setAttribute("class", "screen");
calculator.appendChild(screen);

let previousNum = document.createElement('div');
previousNum.setAttribute("class", "previous-num");
previousNum.textContent = previousValue;
screen.appendChild(previousNum);

let currentNum = document.createElement('div');
currentNum.setAttribute("class", "current-num");
currentNum.textContent = currentValue;
screen.appendChild(currentNum);

function displayValue(value) {
    console.log('You\'ve entered ' + value);

    //  Starting value - if Current Value is 0, change to typed number
    //  Else, append number and the Current Value is that number
    if (currentValue === 0) {
        currentValue = value;
        currentNum.textContent = value;
    } else { 
        currentNum.textContent += value;
        currentValue = parseInt(currentNum.textContent);
    }

    console.log(currentValue);
    console.log(typeof currentValue);
    // console.log(previousValue);
}

function displayPreviousValue(operator) {
    console.log('You\'ve entered ' + operator);
    previousNum.textContent = `${currentNum.textContent} ` + operator;
    currentValue = 0;
}

// BUTTONS
let buttons = document.createElement('div');
buttons.setAttribute("class", "buttons");
calculator.appendChild(buttons);

// <--- Left Side Buttons --->
let leftBtns = document.createElement('div');
leftBtns.setAttribute("class", "left-buttons");
buttons.appendChild(leftBtns);

// <--- Option Buttons --->
let options = document.createElement('div');
options.setAttribute("class", "options");
leftBtns.appendChild(options);

let clearBtn = document.createElement('button');
clearBtn.setAttribute("id", "clearBtn");
clearBtn.textContent = 'AC';
options.appendChild(clearBtn);

let plusMinusBtn = document.createElement('button');
plusMinusBtn.setAttribute("id", "plus-minusBtn");
plusMinusBtn.textContent = '+/-';
options.appendChild(plusMinusBtn);

let percentBtn = document.createElement('button');
percentBtn.setAttribute("id", "percentBtn");
percentBtn.textContent = '%';
options.appendChild(percentBtn);

// <--- Number Buttons --->
let numbers = document.createElement('div');
numbers.setAttribute("class", "numbers");
leftBtns.appendChild(numbers);

for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.className = 'row';

    numbers.appendChild(row);

    for (let j = 0; j < 3; j++) {
        let numBtn = document.createElement('button');
        numBtn.className = 'numBtn';
        if ( i === 0) {
            numBtn.setAttribute("id", `button${j + 1}`);
            numBtn.textContent = `${j + 1}`;
        } else if (i === 1) {
            numBtn.setAttribute("id", `button${j + 4}`);
            numBtn.textContent = `${j + 4}`;
        } else {
            numBtn.setAttribute("id", `button${j +7}`);
            numBtn.textContent = `${j + 7}`;
        }

        row.appendChild(numBtn);
    }
}

// <--- Zero and Decimal Buttons --->
let zeroAndDecimal = document.createElement('div');
zeroAndDecimal.className = 'zero-decimal';
leftBtns.appendChild(zeroAndDecimal)

let zeroBtn = document.createElement('button');
zeroBtn.setAttribute("id", "button0");
zeroBtn.textContent = '0';
zeroAndDecimal.appendChild(zeroBtn);

let decimalBtn = document.createElement('button');
decimalBtn.setAttribute("id", "decimalBtn");
decimalBtn.textContent = '.';
zeroAndDecimal.appendChild(decimalBtn);

// <--- Operator Buttons --->
let operators = document.createElement('div');
operators.setAttribute("class", "operators");
buttons.appendChild(operators);

let divideBtn = document.createElement('button');
divideBtn.setAttribute("id", "divideBtn");
divideBtn.textContent = '÷';
operators.appendChild(divideBtn);

let multiplyBtn = document.createElement('button');
multiplyBtn.setAttribute("id", "multiplyBtn");
multiplyBtn.textContent = '×';
operators.appendChild(multiplyBtn);

let minusBtn = document.createElement('button');
minusBtn.setAttribute("id", "minusBtn");
minusBtn.textContent = '-';
operators.appendChild(minusBtn);

let plusBtn = document.createElement('button');
plusBtn.setAttribute("id", "plusBtn");
plusBtn.textContent = '+';
operators.appendChild(plusBtn);

let equalBtn = document.createElement('button');
equalBtn.setAttribute("id", "equalBtn");
equalBtn.textContent = '=';
operators.appendChild(equalBtn);


//  <--- Math Functions --->

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, previousNum, currentNum){
    // recudce? accumulate previous and current number

    if (operator === plus) {
        add(previousNum, currentNum);
    };

    if (operator === minus) {
        subtract(previousNum, currentNum);
    };

    if (operator === multiplication) {
        multiply(previousNum, currentNum);
    };

    if (operator === division) {
        divide(previousNum, currentNum);
    };
}



//  CLICK EVENTS
// <--- Numbers --->
let setNum1 = document.querySelector('#button1');
let setNum2 = document.querySelector('#button2');
let setNum3 = document.querySelector('#button3');
let setNum4 = document.querySelector('#button4');
let setNum5 = document.querySelector('#button5');
let setNum6 = document.querySelector('#button6');
let setNum7 = document.querySelector('#button7');
let setNum8 = document.querySelector('#button8');
let setNum9 = document.querySelector('#button9');
let setNum0 = document.querySelector('#button0');

setNum1.addEventListener('click', () => {
    // selection = setNum1.id;
    displayValue(1);
})

setNum2.addEventListener('click', () => {
    displayValue(2);
})

setNum3.addEventListener('click', () => {
    displayValue(3);
})

setNum4.addEventListener('click', () => {
    displayValue(4);
})

setNum5.addEventListener('click', () => {
    displayValue(5);
})

setNum6.addEventListener('click', () => {
    displayValue(6);
})

setNum7.addEventListener('click', () => {
    displayValue(7);
})

setNum8.addEventListener('click', () => {
    displayValue(8);
})

setNum9.addEventListener('click', () => {
    displayValue(9);
})

setNum0.addEventListener('click', () => {
    displayValue(0);
})

// <--- Options --->
let setClear = document.querySelector('#clearBtn')

setClear.addEventListener('click', () => {
    previousValue = 0;
    currentValue = 0;
});

// <--- Operators --->
let setPlus = document.querySelector('#plusBtn');
let setMinus = document.querySelector('#minusBtn');
let setMultiply = document.querySelector('#multiplyBtn');
let setDivide = document.querySelector('#divideBtn');
let setEqual = document.querySelector('#equalBtn');

setPlus.addEventListener('click', () => {
    displayPreviousValue('+');
})

setMinus.addEventListener('click', () => {
    displayPreviousValue('-');
})

setMultiply.addEventListener('click', () => {
    displayPreviousValue('×');
})

setDivide.addEventListener('click', () => {
    displayPreviousValue('÷');
})

//  1. Append number for Current Number before operator
//  2. Show total number above Current Number
//  3. Give total after pressing Equal (=)