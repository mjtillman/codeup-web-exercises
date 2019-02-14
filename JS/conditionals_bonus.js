// (function(){
    "use strict";

// ================================= CONDITIONALS BONUSES
//     __
//     Write a function makeJustinMessage() that returns the string "It's
//     Justin!" If the input to the function is the string "justin" and
//     "It's not Justin" otherwise. If the input contains white space or
//     numbers, return the string
//     "INVALID INPUT".
//         __

    function makeJustinMessage(who){
        if (!isNaN(who) || who.trim() === "") {
            return "INVALID INPUT";
        } else if (who.toLowerCase() === "justin") {
            return "It's Justin!";
        } else {
            return "It's not Justin."
        }
    }

    // var whoIsIt = prompt("Who is it?");
    // console.log(makeJustinMessage(whoIsIt));

//     Write a function that returns a string describing the action to
//     be taken for a given street light color input. For example, if
//     the function input is the string "red", a message like "STOP!"
//     could be returned from the function.
//
//     Input should not be case sensitive.
//         __

    function streetlightAction(color) {
        if (color.toLowerCase() === "red") {
            return "STOP";
        } else if (color.toLowerCase() === "yellow") {
            return "slow down";
        } else if (color.toLowerCase() === "green") {
            return "GO!!!";
        } else {
            return "This did not work";
        }
    }

    // var streetLightColors = ["red", "yellow", "green"];
    // var randomStreetLight = streetLightColors[Math.floor(Math.random() * streetLightColors.length)];
    // console.log(randomStreetLight + " means " + streetlightAction(randomStreetLight));

//     Create a function that simply returns an input as an output. If
//     no input is passed to the function when it is called, return the
//     string "no input provided."
//     __

    function randomInputGenerator() {
        var numOfChar = Math.floor(Math.random() * 11);

        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        var randomString = "";

        for (var i = 0; i < numOfChar + 1; i++) {
            randomString += possibleChars.charAt(Math.floor(Math.random() * 62));
        }

        return randomString;
    }

    // var input = randomInputGenerator();

    function repeater(input) {
        if (input) {
            return input;
        } else {
            return "No input provided";
        }
    }

    // console.log(repeater(input));

//     Create a function that returns a unique message string for a given
//     digit input. If the input is not a single digit, return the string
//     "too many digits". If the input is not a number, return "invalid
//     input". String digits like "1" or "9" are valid inputs.
//         __

    function randomDigitGenerator() {
        var numOfChar = Math.floor(Math.random() * 2);
        var possibleChars = "ABCDE123456789";
        var randomString = "";

        for (var i = 0; i < numOfChar + 1; i++) {
            randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        return randomString;
    }

    // var digit = randomDigitGenerator();

    function digitMessage(digit) {
        if (digit > 9) {
            return "Too many digits";
        } else if (isNaN(digit)){
            return "Invalid input"
        } else {
            switch (digit) {
                case "1":
                    return "One is the loneliest number that you'll ever do";
                case "2":
                    return "Love me two times, I'm goin' away";
                case "3":
                    return "You're once, twice, three times a lady";
                case "4":
                    return "On through the dead of night/ With the four horsemen ride";
                case "5":
                    return "What all can you give, with five minutes to live?";
                case "6":
                    return "This song is just six words long";
                case "7":
                    return "A seven-nation army couldn't hold me back";
                case "8":
                    return "EIGHT SIX SEVEN FIVE THREE OH NINE";
                case "9":
                    return "Ninety-nine luftballons floating in the summer sky";
                default:
                    return "I did not work";
            }
        }
    }

    // console.log(digit);
    // console.log(digitMessage(digit));

//     Create a function that prompts a user for their favorite day of
//     the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
//     For each day, allow the user to enter the abbreviated day (e.g.
//     'Monday', 'monday', 'Mon', or 'mon')
//     __

     // var faveDay = prompt("What is your favorite day of the week?");

    function faveDayMessage(day){
        day = day.toLowerCase();
        if (day === "sunday" || day === "sun") {
            return "Sunday always comes too late";
        } else if (day === "monday" || day === "mon") {
            return "Monday you can fall apart";
        } else if (day === "tuesday" || day === "tue") {
            return "Tuesday you should stay in bed";
        } else if (day === "wednesday" || day === "wed") {
            return "Wednesday really breaks my heart";
        } else if (day === "thursday" || day === "thu") {
            return "Thursday I don't care about you";
        } else if (day === "friday" || day === "fri") {
            return "It's Friday, I'M IN LOVE";
        } else if (day === "saturday" || day === "sat") {
            return "Saturday wait";
        } else {
            return "That doesn't seem like a day of the week...";
        }
    }

    // alert(faveDayMessage(faveDay));

//     Create a function that prompts the user for an input and then
//     alerts if the input is a number or not a number.
//     - use an if/else
//     - refactor to use a ternary operator
//     __

    function numberTester(input) {
        if (isNaN(input)) {
            return "That wasn't a number.";
        } else {
            return "That was a a number.";
        }
    }

    // var number = prompt("Please enter a number:");
    // console.log(alert(numberTester(number)));


//     Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
//     - account for any invalid user input
//     - case of input should not matter
//     - accept both abbreviations and full names of the months
//     __

function seasonValidator(season) {
    switch (season) {
        case "spring":
        case "summer":
        case "fall":
        case "autumn":
        case "winter":
            return true;
        default:
            return false;
    }
}

function monthInquiry(season) {
    if (season === "spring") {
        return "Is March, April, or May your favorite part?";

    } else if (season === "summer") {
        return "Is June, July, or August your favorite part?";

    } else if (season === "fall" || season === "autumn") {
        return "Is September, October, or November your favorite part?";

    } else if (season === "winter") {
        return "Is December, January, or February your favorite part?";

    } else {
        return "This did not work."
    }
}

function monthAlertGenerator(month) {
        switch (month) {
            case "january":
            case "jan":
                return "January is named after the Roman god Janus. He had two faces to look into both the past and present.";

            case "february":
            case "feb":
                return "February is named after a Roman festival of purification.";

            case "march":
            case "mar":
                return "March is named after the Roman god of war, Mars.";

            case "april":
            case "apr":
                return "April comes from the Latin word, aperire, meaning \'to open\'. Makes sense with spring flowers, etc.";

            case "may":
                return "May is named after the Greek goddess Maia.";

            case "june":
            case "jun":
                return "June is named after Juno, wife of the Roman god Jupiter.";

            case "july":
            case "jul":
                return "July is named after Julius Caesar.";

            case "august":
            case "aug":
                return "August is named after the first Roman emperor";

            case "september":
            case "sep":
                return "September is named after the Roman number 7.";

            case "october":
            case "oct":
                return "October is named after the Roman number 8.";

            case "november":
            case "nov":
                return "November is named after the Roman number 9.";

            case "december":
            case "dec":
                return "December is named after the Roman number 10.";

            default:
                return "Invalid input"
        }
}

var season = prompt("Which season is your favorite?");

if (seasonValidator(season.toLowerCase())) {
    var month = prompt(monthInquiry(season.toLowerCase()));
} else {
    alert("Invalid input");
}

alert(monthAlertGenerator(month.toLowerCase()));

//     GOLD STAR BONUS
//     Create a distance-unit-conversion application.
//         Prompt the user for unit of measurement.
//         Prompt the user for a value.
//         Prompt the user for a second unit of measurement to convert to.
//         Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
//     then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//     Use these conversion functions to make the correct unit conversion
//     Potentially, you will need a large switch case to account for the possible unit conversions,
//         i.e. what conversion functions will need to be called in and in what order.

// var unitToConvert = prompt("What kind of distance do you need to be converted?");
// var distance = prompt("How many " + unitToConvert + " are there?");
// var newUnit = prompt("What unit of measurement do you need " + distance + " " + unitToConvert + " in?");
//
// function feetToMiles() {
//
// }



//         DOUBLE GOLD STAR BONUS
//         // Allow unit conversion to metric system units

// })();