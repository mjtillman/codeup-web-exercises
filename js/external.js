"use strict";

console.log("Hello from external Javascript!");

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

var mermaidDays = prompt("How many days did you rent The Little Mermaid?");
var brotherDays = prompt("How many days did you rent Brother Bear?");
var herculesDays = prompt("How many days did you rent Hercules?");

mermaidDays = Number(mermaidDays);
brotherDays = Number(brotherDays);
herculesDays = Number(herculesDays);

var total = (mermaidDays + brotherDays + herculesDays) * 3;

alert("You owe Blockbuster $" + total + ".");

/////////////////////////////////////////////

var googleRate = prompt("How much money do you make per hour at Google?");
var googleHrs = prompt("How many hours did you work at Google?");

var amazonRate = prompt("How much money do you make per hour at Amazon?");
var amazonHrs = prompt("How many hours did you work at Amazon?");

var facebookRate = prompt("How much money do you make per hour at Facebook?");
var facebookHrs = prompt("How many hours did you work at Facebook?");

googleRate = Number(googleRate);
googleHrs = Number(googleHrs);
amazonRate = Number(amazonHrs);
amazonHrs = Number(amazonRate);
facebookRate = Number(facebookRate);
facebookHrs = Number(facebookHrs);

var pay = googleRate * googleHrs + amazonRate * amazonHrs + facebookRate * facebookHrs;

alert("You will get paid $" + pay.toFixed(2) + ".");

/////////////////////////////////////////////

var fullClass = confirm("Is the class full?");
var scheduleConflict = confirm("Do you have any schedule conflicts?");

if (!fullClass && !scheduleConflict) {
    alert("You can enroll in the class.");
} else {
    alert("You can't enroll in this class.")
}

var validOffer = confirm("According to the expiration date, is the offer still valid?");

if (validOffer) {
    var premiumMember = confirm("Are you a premium member?");
    if (premiumMember) {
        alert("Great, you can get a discount!");
    } else {
        var moreThanTwo = confirm("Are you buying more than two items?");
        if (moreThanTwo) {
            alert("Great, you can get a discount!");
        } else {
            alert("You need to buy more items to use this offer.");
        }
    }
} else {
    alert("Sorry, the offer is expired.");
}