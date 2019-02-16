// (function(){
"use strict";

///////////////////////
// Random generators //
///////////////////////

function randomNumber() {
    return Math.floor(Math.random() * 101);
}

function randomNumberDeca() {
    return Math.floor(Math.random() * 11);
}

function randomChar() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz";
    const chooser = Math.floor(Math.random() * 53);
    return alphabet[chooser];
}

const num = randomNumber();
const num2 = randomNumberDeca();
const letter = randomChar();
console.log("This function was brought to you today by the numbers " + num + " and " + num2 + ", and the letter " + letter + ".");

////////////////////////


function isOdd(num) {
    return (num % 2 > 0);
}
console.log(num + " is odd: " + isOdd(num));



function isEven(num) {
    return (num % 2 === 0);
}
console.log(num + " is even: " + isEven(num));



function identity(input) {
    return input;
}
const input = "Abracadabra";
console.log(input + ", identity: " + identity(input));



function isFive(num) {
    return (num === 5);
}
console.log(num + " is 5: " + isFive(num));



function addFive(num) {
    return (num + 5);
}
console.log(num + " + 5 = " + addFive(num));



function isMultipleofFive(num) {
    return (num % 5 === 0);
}
console.log(num + " is a multiple of five: " + isMultipleofFive(num));



function isThree(num) {
    return (num === 3);
}
console.log(num + " is 3: " + isThree(num));




function isMultipleOfThree(num) {
    return (num % 3 === 0);
}
console.log(num + " is a multiple of three: " + isMultipleOfThree(num));



function isMultipleOfThreeAndFive(num){
    return (isMultipleOfThree(num) && isMultipleofFive(num));
}
console.log(num + " is a multiple of three and five: " + isMultipleOfThreeAndFive(num));




function isMultipleOfN(target, n) {
    return (target % n === 0);
}
console.log(num + " is a multiple of " + num2 + ": " + isMultipleOfN(num, num2));



function isVowel(char) {
    char = char.toUpperCase();
    return (char === "A" || char === "E" || char === "I" || char === "O"|| char === "U");
}
console.log(letter + " is a vowel: " + isVowel(letter));



function isConsonant(char) {
    char = char.toUpperCase();
    return (char === "A" && char === "E" && char === "I" && char === "O" && char === "U");
}
console.log(letter + " is a consonant: " + isConsonant(letter));



function isCapital(char){
    return (char === char.toUpperCase());
}
console.log(letter + " is capital: " + isCapital(letter));



function isLowerCase(char) {
    return (char === char.toLowerCase());
}
console.log(letter + " is lowercase: " + isLowerCase(letter));



function hasLowerCase(myString) {
    return myString === toUpperCase(myString);
}
var myString = "haejltOIHAROGIHseghdfgpodfglhaerglhOIhert";
console.log(hasLowerCase(myString));

// function isSpace(){
// }
// function isZero(){
// }
// function notZero(){
// }
// function lowerCase(){
// }

function double(n) {
    return n * 2;
}
console.log("Double the " + num + ", double the fun: " + double(num));



function triple(n){
    return n * 3;
}
console.log("Triple threat: " + triple(num));



function quadruple(n) {
    return n * 4;
}
console.log(num + " without scruple, in quadruple: " + quadruple(num));



function half(n) {
    return n / 2;
}
console.log("Let's fold " + num + " in half: " + half(num));



function subtract(a, b) {
    return a - b;
}
console.log(num + " - " + num2 + " = " + subtract(num, num2));



function multiply(a, b) {
    return a * b;
}
console.log(num + " * " + num2 + " = " + multiply(num, num2));



function divide(a, b) {
    return a / b;
}
console.log(num + " / " + num2 + " = " + divide(num, num2));



function modulo(a, b) {
    return a % b;
}
console.log(num + " % " + num2 + " = " + modulo(num, num2));



function remainder(a, b) {
    console.log(a + " / " + b + " = " + Math.trunc(divide(a,b)) + " R " + modulo(a, b));
}
remainder(num, num2);



function cube(n) {
    return n * n * n;
}
console.log(num + " cubed: " + cube(num));



function squareRoot(n) {
    return Math.sqrt(n);
}
console.log("The square root of " + num + " is: " + squareRoot(num));



function cubeRoot(n){
    return Math.cbrt(n);
}
console.log("The cube root of " + num + " is: " + cubeRoot(num));



function invertSign(number) {
    return -number;
}
console.log(num + " inverted: " + invertSign(num));



function degreesToRadians(number) {
    return number * Math.PI / 180;
}
console.log("In degrees, " + num + " is " + degreesToRadians(num) + " radians.");



function radiansToDegrees(number) {
    return number * 180 / Math.PI;
}
console.log("In radians, " + num + " is " + radiansToDegrees(num) + " degrees.");



// function isBlank(input) {
// }
// function trim(string) {
// }
// function areEqual() {
// }
// function areIdentical() {
// }



var switch01 = null;

function not(input) {
    return !input;
}

console.log("Switch 1 is: " + switch01);
switch01 = not(switch01);
console.log("Switch 1 is: " + switch01);
switch01 = not(switch01);
console.log("Switch 1 is: " + switch01);

function notNot(input){
    return !!input;
}

console.log("Switch 1 is: " + notNot(switch01));

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

// function reverseString(string){
//
// }

function absoluteValue(number) {
    return Math.abs(number);
}

console.log("The absolute value of " + num + " is: " + absoluteValue(num));

// generates a die between 4 and 20 sides:
function dieSideGenerator() {
    return Math.floor(Math.random() * 16) + 4;
}

var rollResultGenerator = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

var diceSides = dieSideGenerator();

console.log(diceSides + "-sided die lands on: " + rollResultGenerator(diceSides) + ", " + rollResultGenerator(diceSides) + ", " +rollResultGenerator(diceSides) + ", " +rollResultGenerator(diceSides) + ", " +rollResultGenerator(diceSides));