"use strict";

let sequenceObj1 = {
    start: 8,
    finish: 15,
    step: 2
};

let sequenceObj2 = {
    start: 1,
    finish: 2,
    step: 1
};

function sumReturn(sequenceObj) {

    let sum = 0;

    for (let i = sequenceObj.start; i < sequenceObj.finish + 1; i += sequenceObj.step) {
        sum += i;
    }

    return sum;
}

console.log("Problem #1: " + sumReturn(sequenceObj1));
console.log("Problem #1: " + sumReturn(sequenceObj2));

///////////////////////////////////////////////////////////////////////

let word1 = "asgdenlishmn";
let word2 = "lenglishhs";

function secondProblem(word) {
    return (word.toLowerCase().includes("english"));
}

console.log("\n\nProblem #2: " + secondProblem(word1));
console.log("Problem #2: " + secondProblem(word2));

///////////////////////////////////////////////////////////////////////

let intArr1 = [11, -1, 3, 3, 3, 0, -5];
let intArr2 = null;

function thirdProblem(arr) {

    let returnArr = {
        positiveCounter: 0,
        negativeSum:  0
    };

    if (arr === 0 || arr === null) return [];

    arr.forEach(function(a) {
        if (a > 0) {
            returnArr.positiveCounter++;
        } else if (a < 0) {
            returnArr.negativeSum += a;
        }
    });

    return returnArr;

}

console.log("\n\nProblem #3:");
console.log(thirdProblem(intArr1));
console.log("Problem #3:");
console.log(thirdProblem(intArr2));

///////////////////////////////////////////////////////////////////////

let inputStr1 = {
    string: "hello world",
    array: [],
    char: "-"
};

let inputStr2 = {
    string: "challenge",
    array: [],
    char: "/"
};

function fourthProblem(input) {
    let string = input.string;

    for (let i = 0; i < string.length; i++) {
        input.array.push(string.charAt(i));
    }

    console.log(input.array);
}

console.log("\n\nProblem #4: " + fourthProblem(inputStr1));
console.log("Problem #4: " + fourthProblem(inputStr2));

///////////////////////////////////////////////////////////////////////

let nameStr = "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer";

function nameAlterer(name) {
    let newName = name.split(":");

    newName = newName.reverse();
    newName = newName.join(",");
    newName = "(" + newName.toUpperCase() + ")";

    return newName;
}

function fifthProblem(str) {

    let namesArr = str.split(";");
    let newNameArr = [];
    let namesStr = "";

    namesArr.forEach(function(name, element) {
        newNameArr[element] = nameAlterer(name);
    });

    newNameArr = newNameArr.sort();

    for (let i = 0; i < newNameArr.length; i++) {
        namesStr += newNameArr[i];
    }

    return namesStr;
}

console.log("\n\nProblem #5:");
console.log(fifthProblem(nameStr));

///////////////////////////////////////////////////////////////////////

let arr1 = [
    [1, 10], [10, 1]
];

let arr2 = [
    [1, 2, 3], [4, 8, 4]
];

function proFourth(arr) {

    let squares = [];
    let squareSum = 0;

    arr.forEach(function(a, i) {
        squares[i] = Math.pow((arr[0][i] - arr[1][i]), 2);
    });

    squares.forEach(function(square) {
        squareSum += square;
    });

    return (squareSum / squares.length).toFixed(3);

}

console.log("\n\nPro #4: " + proFourth(arr1));
console.log("Pro #4: " + proFourth(arr2));

///////////////////////////////////////////////////////////////////////

let number1 = 123;
let number2 = 97264;

function numberWordGenerator(num) {
    switch (num) {
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        case "8": return "eight";
        case "9": return "nine";
        case "0": return "zero";
        case "token": return "token ";
        default: return "broken ";
    }
}

function teenGenerator(num) {
    switch (num) {
        case "1": return "eleven";
        case "2": return "twelve";
        case "3": return "thirteen";
        case "4": return "fourteen";
        case "5": return "fifteen";
        case "6": return "sixteen";
        case "7": return "seventeen";
        case "8": return "eighteen";
        case "9": return "nineteen";
    }
}

function twentyplusGenerator(num) {
    switch (num) {
        case "2": return "twenty";
        case "3": return "thirty";
        case "4": return "forty";
        case "5": return "fifty";
        case "6": return "sixty";
        case "7": return "seventy";
        case "8": return "eighty";
        case "9": return "ninety";
    }
}

function proFifth(num) {

    num = num.toString();

    let numInWords = "";

    let numArr = [];

    for (let i = 0; i < num.length; i++) {
        numArr.push(num.charAt(i));
    }


    console.log(numberWordGenerator(numArr[0]) + " hundred");
    if (numArr[1] > 1) {
        console.log(twentyplusGenerator(numArr[1]));
        if (numArr[2] > 0){
            console.log("-" + numberWordGenerator(numArr[2]));
        }
    }


    console.log(numArr);


    // for (let i = 0; i < numObj.numArr.length; i++) {
    //     numInWords += numberWordGenerator(numObj.numArr[i]);
    // }

    return numInWords;

}

console.log("\n\nPro #5: " + proFifth(number1));
console.log("Pro #5: " + proFifth(number2));