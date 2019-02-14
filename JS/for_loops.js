"use strict";

function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function oddOrEven() {
    for (var i = 0; i < 10; i++) {
        var num = randomNumberGenerator(20, 200);

        (num % 2 > 0) ? console.log(num + " is odd") : console.log(num + " is even");
    }
}

function numPyramid() {
    for (var num = 1; num < 10; num++) {
        var print = "";
        for (var i = 1; i < num; i++) {
            print += i;
        }
        console.log(print);
    }
}

function backwardsByFive() {
    for (var i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}

