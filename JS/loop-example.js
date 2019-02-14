function countEvenLoop() {
    var x = 0;
    while (x <= 50) {
        console.log(x);
        x += 2;
    }
}

// countEvenLoop();

function squareLoop() {
    var x = 1;

    while (x < 11) {
        console.log("The square of " + x + " is: " + Math.pow(x, 2));
        x++;
    }
}

// squareLoop();


function twentyFiveLoop(x){
    do {
        console.log("The number is: " + x);
        x++;
    } while (x < 26);

}

// twentyFiveLoop(x = 1);

function backwardsByTenLoop(x) {
    do {
        console.log(x);
        x -= 10;
    } while (x > -51);
}

// backwardsByTenLoop(x = 100);

// using a for loop, log down all numbers from 1 - 100
//  except divisible by 3: fizz
//  except divisible by 5: buzz
//  both: fizzbuzz


// function fizzbuzzLoop() {
//     for (var i = 1; i < 101; i++) {
//
//     }
// }

// fizzbuzzLoop();

function whileBackwardsFrom50() {
    i = 50

    while (i > 0) {
        console.log(i);
        i--;
    }
}

// whileBackwardsFrom50();

function doWhileBackwardsFrom50() {
    i = 50;
    do {
        console.log(i);
        i--;
    } while (i > 0);
}

// doWhileBackwardsFrom50();

function forBackwardsFrom50() {
    for (var i = 50; i > 0; i--) {
        console.log(i);
    }
}

forBackwardsFrom50();