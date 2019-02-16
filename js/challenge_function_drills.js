(function(){
"use strict";

function identity(input) {
    return input;
}

function randomMinNumber(){
    return (Math.floor(Math.random() * 50) + 1);
}

function randomMaxNumber(){
    return (Math.floor(Math.random() * 50) + 50);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const min = randomMinNumber();
const max = randomMaxNumber();
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));
    console.log(getRandomNumber(min, max));

}());