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

let calc = {
    enteredNum: "",
    currentNum: "",
    num1: "",
    num2: "",
    operandEntered: false,
    operand: "",
    calcResult: 0,

    display: function() {
        if (!calc.operandEntered) {
            numInput1.setAttribute("value", calc.currentNum);
        } else if (calc.operandEntered) {
            numInput2.setAttribute("value", calc.currentNum);
        }
    },

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

    /////
    /////
    /////
    /////
    /////
    /////

    /////
    square: function() {
        this.currentNum = Math.pow(this.currentNum, 2);
        this.display();
    },
    cube: function() {
        this.currentNum = Math.pow(this.currentNum, 3);
        this.display();
    },
    /////
    eulerExp: function() {
        this.currentNum = Math.pow(Math.E, this.currentNum);
        this.display();
    },
    tenExp: function() {
        this.currentNum = Math.pow(10, this.currentNum);
        this.display();
    },

    /////
    squareRoot: function() {
        this.currentNum = Math.sqrt(this.currentNum);
        this.display();
    },
    cubeRoot: function() {
        this.currentNum = Math.cbrt(this.currentNum);
        this.display();
    },
    nthRoot: function() {

    },
    naturalLog: function() {
        this.currentNum = Math.log(this.currentNum);
        this.display();
    },
    tenLog: function() {
        this.currentNum = Math.log10(this.currentNum);
        this.display();
    },

    factorial: function() {
        for (let i = this.currentNum - 1; i > 1; i--) {
            this.currentNum *= i;
        }
        this.display();
    },
    sin: function() {
        this.currentNum = Math.sin(this.currentNum);
        this.display();
    },
    cos: function() {
        this.currentNum = Math.cos(this.currentNum);
        this.display();
    },
    tan: function() {
        this.currentNum = Math.tan(this.currentNum);
        this.display();
    },
    euler: function() {
        this.currentNum = Math.E;
        this.display();
    },
    /////

    radians: function() {

    },
    sinh: function() {
        this.currentNum = Math.sinh(this.currentNum);
        this.display();
    },
    cosh: function() {
        this.currentNum = Math.cosh(this.currentNum);
        this.display();
    },
    tanh: function() {
        this.currentNum = Math.tanh(this.currentNum);
        this.display();
    },
    pi: function() {
        this.currentNum = Math.PI;
        this.display();
    },
    /////

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

let numInput1 = document.getElementById("numInput1");
let numInput2 = document.getElementById("numInput2");
let opInput = document.getElementById("operandInput");
let buttons = document.getElementsByClassName("button");
let buttons2 = document.getElementsByClassName("button2");

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

let list2 = [];
list2[0] = function() {};
list2[1] = function() {};
list2[2] = function() {};
list2[3] = function() {};
list2[4] = function() {};
list2[5] = function() {};

list2[6] = function() {};
list2[7] = function() {calc.square();};
list2[8] = function() {calc.cube();};
list2[9] = function() {};
list2[10] = function() {calc.eulerExp();};
list2[11] = function() {calc.tenExp();};

list2[12] = function() {};
list2[13] = function() {calc.squareRoot();};
list2[14] = function() {calc.cubeRoot();};
list2[15] = function() {calc.nthRoot();};
list2[16] = function() {calc.naturalLog()};
list2[17] = function() {calc.tenLog()};

list2[18] = function() {calc.factorial();};
list2[19] = function() {calc.sin();};
list2[20] = function() {calc.cos();};
list2[21] = function() {calc.tan();};
list2[22] = function() {calc.euler();};
list2[23] = function() {};

list2[24] = function() {};
list2[25] = function() {calc.sinh();};
list2[26] = function() {calc.cosh();};
list2[27] = function() {calc.tanh();};
list2[28] = function() {calc.pi();};
list2[29] = function() {};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", list[i]);
}

for (let i = 0; i < buttons2.length; i++) {
    buttons2[i].addEventListener("click", list2[i]);
}

function calcNum(num) {
    calc.enteredNum = num;
    calc.currentNum += num;
    calc.display();
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