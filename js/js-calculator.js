"use strict";

let currentNum = "";
let num1 = "";
let num2 = "";
let operandEntered = false;
let operandType = "";
let numInput1 = document.getElementById("numInput1");
let numInput2 = document.getElementById("numInput2");
let opInput = document.getElementById("operandInput");

let buttons = document.getElementsByClassName("button");

let listener = [];

listener[0] = function() {calcClear();};
listener[1] = function() {calcOperand("%");};
listener[2] = function() {calcOperand("/");};

listener[3] = function() {calcNum(1);};
listener[4] = function() {calcNum(2);};
listener[5] = function() {calcNum(3);};

listener[6] = function() {calcOperand("*");};

listener[7] = function() {calcNum(4);};
listener[8] = function() {calcNum(5);};
listener[9] = function() {calcNum(6);};

listener[10] = function() {calcOperand("-");};

listener[11] = function() {calcNum(7);};
listener[12] = function() {calcNum(8);};
listener[13] = function() {calcNum(9);};

listener[14] = function() {calcOperand("+");};

listener[15] = function() {calcNum(0);};
listener[16] = function() {calcNum(".");};
listener[17] = function() {calcEquals();};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", listener[i]);
}


function calcNum(enteredNum) {
    currentNum += enteredNum;
    if (!operandEntered) {
        numInput1.setAttribute("value", currentNum);
    } else if (operandEntered) {
        numInput2.setAttribute("value", currentNum);
    }

}

function calcOperand(operand) {
    operandEntered = true;
    num1 = currentNum;
    currentNum = "";
    operandType = operand;
    opInput.setAttribute("value", operand);
}

function calcEquals() {
    num1 = +num1;
    num2 = +currentNum;
    let calculated = "";

    switch (operandType) {
        case "%":
            calculated = "R " + num1 % num2;
            break;
        case "/":
            calculated = num1 / num2;
            break;
        case "*":
            calculated = num1 * num2;
            break;
        case "+":
            calculated = num1 + num2;
            break;
        case "-":
            calculated = num1 - num2;
            break;
        default:
            console.log("Something is wrong");
    }

    console.log(num1 + " " + operandType + " " + num2 + " = " + calculated);

    numInput1.setAttribute("value", calculated);
    num1 = calculated;
    currentNum = num1;
    num2 = "";
    calculated = "";
    operandType = "";

    opInput.setAttribute("value", "");
    numInput2.setAttribute("value", "");
}

function calcClear() {
    currentNum = "";
    num1 = "";
    num2 = "";
    operandType = "";
    operandEntered = false;
    numInput1.setAttribute("value", "");
    opInput.setAttribute("value", "");
    numInput2.setAttribute("value", "");
    console.clear();
}
