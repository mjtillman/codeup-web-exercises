"use strict";

function titleChanger() {
    let calcTitle = document.getElementsByTagName("h1");

    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 800px)").matches) {
            calcTitle[0].innerHTML = "JS Scientific Calculator";
            // zeroKeyStyle = "0";
        } else {
            calcTitle[0].innerHTML = "JS Calculator";
            // zeroKeyStyle = "0.3em";
        }
    });
}
titleChanger();

let numInput1 = document.getElementById("numInput1");
let numInput2 = document.getElementById("numInput2");
let opInput = document.getElementById("operandInput");
let buttons = document.getElementsByClassName("button");

let list = [];
list[0] = function() {calcClear();};
list[1] = function() {calcOperand("%");};
list[2] = function() {calcOperand("/");};

list[3] = function() {calcNum(1);};
list[4] = function() {calcNum(2);};
list[5] = function() {calcNum(3);};

list[6] = function() {calcOperand("*");};

list[7] = function() {calcNum(4);};
list[8] = function() {calcNum(5);};
list[9] = function() {calcNum(6);};

list[10] = function() {calcOperand("-");};

list[11] = function() {calcNum(7);};
list[12] = function() {calcNum(8);};
list[13] = function() {calcNum(9);};

list[14] = function() {calcOperand("+");};

list[15] = function() {calcNum(0);};
list[16] = function() {calcNum(".");};
list[17] = function() {calcEquals();};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", list[i]);
}

let calc = {
    enteredNum: "",
    currentNum: "",
    num1: "",
    num2: "",
    operandEntered: false,
    operand: "",
    calcResult: 0,

    modulus: function() {
        this.calcResult = +this.num1 % +this.num2;
    },
    divide: function() {
        this.calcResult = +this.num1 / +this.num2;
    },
    multiply: function() {
        this.calcResult = +this.num1 * +this.num2;
    },
    subtract: function() {
        this.calcResult = +this.num1 - +this.num2;
    },
    add: function() {
        this.calcResult = +this.num1 + +this.num2;
    },

    reset: function() {
        this.enteredNum = "";
        this.currentNum = "";
        this.num1 = "";
        this.num2 = "";
        this.operandEntered = false;
        this.operand = "";
        this.calcResult = 0;
    }
};

function calcNum(num) {
    calc.enteredNum = num;
    calc.currentNum += num;
    if (!calc.operandEntered) {
        numInput1.setAttribute("value", calc.currentNum);
    } else if (calc.operandEntered) {
        numInput2.setAttribute("value", calc.currentNum);
    }
}

function calcOperand(operand) {
    calc.operandEntered = true;
    calc.operand = operand;
    calc.num1 = +calc.currentNum;
    calc.currentNum = "";
    calc.enteredNum = "";
    opInput.setAttribute("value", operand);
}

function calcEquals() {
    calc.num2 = +calc.currentNum;

    switch (calc.operand) {
        case "%":
            calc.modulus();
            break;
        case "/":
            calc.divide();
            break;
        case "*":
            calc.multiply();
            break;
        case "+":
            calc.add();
            break;
        case "-":
            calc.subtract();
            break;
        default:
            console.log("Something is wrong");
    }

    numInput1.setAttribute("value", calc.calcResult);
    calc.num1 = calc.calcResult;
    calc.currentNum = calc.num1;
    calc.operand = "";
    calc.operandEntered = false;
    calc.calcResult = 0;

    opInput.setAttribute("value", "");
    numInput2.setAttribute("value", "");
}

function calcClear() {
    calc.reset();

    numInput1.setAttribute("value", "");
    opInput.setAttribute("value", "");
    numInput2.setAttribute("value", "");
}