"use strict";

titleChanger();
listenerSetup();

function listenerSetup(){
    let buttons = document.getElementsByClassName("button");
    let buttons2 = document.getElementsByClassName("button2");
    let listener = [];
    let listener2 = [];

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

    listener2[0] = function() {};
    listener2[1] = function() {};
    listener2[2] = function() {};
    listener2[3] = function() {};
    listener2[4] = function() {};
    listener2[5] = function() {};
    listener2[6] = function() {};
    listener2[7] = function() {squared(currentNum);};
    listener2[8] = function() {cubed();};
    listener2[9] = function() {exponent();};
    listener2[10] = function() {eToThePowerOf();};
    listener2[11] = function() {tenToThePowerOf();};
    listener2[12] = function() {fractionOfOne();};
    listener2[13] = function() {square_Root();};
    listener2[14] = function() {cube_Root();};
    listener2[15] = function() {yRoot();};
    listener2[16] = function() {naturalLog();};
    listener2[17] = function() {commonLog();};
    listener2[18] = function() {factorial();};
    listener2[19] = function() {sine();};
    listener2[20] = function() {cosine();};
    listener2[21] = function() {tangent();};
    listener2[22] = function() {};
    listener2[23] = function() {eulersNumber();};
    listener2[24] = function() {};
    listener2[25] = function() {radians();};
    listener2[26] = function() {sinh();};
    listener2[27] = function() {cosh();};
    listener2[28] = function() {tanh();};
    listener2[29] = function() {pi();};
    listener2[30] = function() {};
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", listener[i]);
    }

    for (let i = 0; i < buttons2.length; i++) {
        buttons2[i].addEventListener("click", listener2[i]);
    }
}d

function calcNum(enteredNum) {
    let currentNum = "";

    let operandEntered = false;
    let operandType = "";
    let numInput1 = document.getElementById("numInput1");
    let numInput2 = document.getElementById("numInput2");
    let opInput = document.getElementById("operandInput");

    console.log(num1 + " " + currentNum);
    currentNum += enteredNum;
    if (!operandEntered) {
        numInput1.setAttribute("value", currentNum);
    } else if (operandEntered) {
        numInput2.setAttribute("value", currentNum);
    }
}

function calcOperand(operand) {
    console.log(num1 + " " + currentNum);
    let num1 = "";
    let num2 = "";

    operandEntered = true;
    num1 = currentNum;
    currentNum = "";
    opInput.setAttribute("value", operand);

    return operand;
}

function calcEquals() {
    num1 = +num1;
    num2 = +currentNum;
    let calculated = "";

    console.log("currentNum: " + currentNum + " num1: " + num1 + ", "  + operandType + ", " + num2);


    switch (operand) {
        case "%":
            calculated = modulus (num1, num2);
            break;
        case "/":
            calculated = divide(num1, num2);
            break;
        case "*":
            calculated = multiply(num1, num2);
            break;
        case "+":
            calculated = add(num1, num2);
            break;
        case "-":
            calculated = subtract(num1, num2);
            break;
        default:
            console.log("Something is wrong");
    }

    // console.log(num1 + " " + operandType + " " + num2 + " = " + calculated);

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

//////////////////////////////////////////////////////////////////////////


function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
}

function modulus(num1, num2) {
    return +num1 % +num2;
}

function squared(currentNum) {
    currentNum = Math.pow(+currentNum, 2);
    numInput1.setAttribute("value", currentNum);
    num1 = currentNum;
    console.log(num1 + " " + currentNum);
}

function cubed(num1) {
    currentNum = Math.pow(+currentNum, 3);
    numInput1.setAttribute("value", currentNum);
}

function exponent(num1, num2) {
    return Math.pow(num1, num2);
}

function eToThePowerOf(num1) {
     return Math.pow(Math.E, num1)
}

function tenToThePowerOf(num1) {
    return Math.pow(10, num1)
}


function square_Root(num1) {
    return Math.sqrt(num1);
}

function cube_Root(num1) {
    return Math.cbrt(num1);
}

function yRoot(num1, num2) {
    return Math.pow(num2, (1 / num1))
}

function naturalLog(num1) {
    return Math.log(num1);
}

function commonLog(num1) {
    return Math.log(num1) / Math.log(10);
}

function factorial(num1) {
    let factorialProduct = 0;
    for (let i = num1; i > 1; i++) {factorialProduct *= i;}
    return factorialProduct;
}

function sine(num1) {
    return Math.sin(num1);
}

function cosine(num1) {
    return Math.cos(num1);
}

function tangent(num1) {
    return Math.tan(num1);
}

function eulersNumber() {
    return Math.E;
}