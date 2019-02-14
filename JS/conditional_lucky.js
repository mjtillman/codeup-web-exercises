var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("What is the total of your bill?");


function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 5) {
        return totalAmount;
    } else if (luckyNumber === 4) {
        return totalAmount / 2;
    } else if (luckyNumber === 3) {
        return totalAmount * 0.65;
    } else if (luckyNumber === 2) {
        return totalAmount * 0.75;
    } else if (luckyNumber === 1) {
        return totalAmount * 0.9;
    } else {
        return totalAmount;
    }
}

// alert("Your lucky number is " + luckyNumber + "." + "You owed $" + totalAmount +
// ", but with your lucky discount, you will actually pay: $" + calculateTotal(luckyNumber, totalAmount).toFixed(2) + "!");

alert("Your lucky number is " + luckyNumber + "." + "You owed $" + totalAmount +
    ", but with your lucky discount, you will actually pay: $" + calculateTotal(luckyNumber, totalAmount) + "!");