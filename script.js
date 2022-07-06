const mainContent = document.querySelector('#main-content');

let calculator = document.createElement('div');
calculator.setAttribute("class", "calculator");
mainContent.appendChild(calculator);

//  SCREEN
let screen = document.createElement('div');
screen.setAttribute("class", "screen");
calculator.appendChild(screen);

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
            numBtn.textContent = `${j + 1}`;
        } else if (i === 1) {
            numBtn.textContent = `${j + 3}`;
        } else {
            numBtn.textContent = `${j + 5}`;
        }

        row.appendChild(numBtn);
    }
}

// <--- Zero and Decimal Buttons --->
let zeroAndDecimal = document.createElement('div');
zeroAndDecimal.className = 'zero-decimal';
leftBtns.appendChild(zeroAndDecimal)

let zeroBtn = document.createElement('button');
zeroBtn.setAttribute("id", "zeroBtn");
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
multiplyBtn.textContent = 'x';
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