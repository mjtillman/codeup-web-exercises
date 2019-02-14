function isNumeric(num) {
    return !isNaN(parseFloat(num));
}

function inRange(num, min, max) {
    return (num >= min && num <= max);
}

function isOdd(num) {
    return (num % 2 > 0);
}

function skipThisNumber() {

    do {
        var number = prompt("Please enter an odd number between 0 and 50:");

        if (isNumeric(number) && inRange(number, 0, 50) && isOdd(number)) {
            break;
        }

    } while (true);

    console.log("Number to skip is: " + number);

    for (var j = 1; j < 50; j += 2) {
        if (j === +number){
            console.log("Not THAT number!");
            continue;
        }
        console.log("Here's an odd number: " + j);
    }
}