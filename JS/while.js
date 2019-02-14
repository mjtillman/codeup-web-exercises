"use strict";

function powerOfTwo() {
    var i = 2;

    while (i <= 2) {
        console.log(i);
        i = i * 2;
    }
}

/////////////////////////////////////////////////////////////////////////

function coneGenerator(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function iceCreamTruck(){
    var cone_inventory = coneGenerator(50, 100);
    console.log("Ice cream cones to sell: " + cone_inventory);

    do {
        var cone_sale = coneGenerator(1, 5);

        if (cone_sale <= cone_inventory) {
            cone_inventory = cone_inventory - cone_sale;
            console.log(cone_sale + " cone(s) sold... (" + cone_inventory +
                        ")");
        } else if (cone_sale > cone_inventory) {
            console.log("Could not sell " + cone_sale + " cones. Only " +
                        cone_inventory + " cone(s) are left.");
        }

        if (cone_inventory === 0) {
            console.log("I'm rich! The cones sold out!");
        }

    } while (cone_inventory > 0);
}