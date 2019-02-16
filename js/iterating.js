(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Alice", "Brandon", "Charlene", "Devin"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(names) {
        console.log(names);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    function last(array) {
        return array[array.length - 1];
    }

    first(names);
    second(names);
    last(names);

    ///////////////////

    function basicShapes() {
        var shapes = [
            "square",
            "rectangle",
            "triangle",
            "circle",
            "rhombus",
            "parallelogram",
            "quadrilateral",
            "trapezoid"
        ];

        var queryShape = prompt("Search for a shape (square, rectangle, triangle, circle, rhombus, parallelogram, quadrilateral, trapezoid:");

        console.log("Searched for: " + queryShape);

        for (i = 0; i < shapes.length; i++) {
            if (queryShape.toLowerCase() !== shapes[i].toLowerCase()) {
                console.log(shapes[i] + " is not a " + queryShape + "...")
            } else {
                console.log("Shape found! " + shapes[i] + " is a " +
                    queryShape + ".");
                break;
            }
        }
    }

    // basicShapes();

    function randomDayGenerator() {
        var daysOfTheWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"];

        return daysOfTheWeek[Math.floor(Math.random() * 7)];
    }

    console.log(randomDayGenerator());

    function alphabetNumberGenerator() {
        var alphabet = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];

        var queryLetter = prompt("Enter a letter of the alphabet:");

        for (i = 0; i < alphabet.length; i++) {
            if (queryLetter.toLowerCase() === alphabet[i]) {
                console.log(queryLetter + " is number " + (i + 1));
            }
        }
    }

    console.log(alphabetNumberGenerator());

    var zionMammals = [
        "Bat", "Desert Cottontail", "Rock Squirrel", "Yellow-bellied Marmot",
        "Great Basin Pocket Mouse", "Chisel-toothed Kangaroo Rat",
        "American Beaver", "Bushy-tailed Woodrat", "Montane Vole",
        "Common Muskrat", "North American Porcupine", "Crawford's Desert Shrew",
        "Coyote", "Red Fox", "American Black Bear", "Ermine", "Ringtail",
        "Northern Racoon", "Long-tailed Weasel", "American Badger",
        "Western Spotted Skunk", "Striped Skunk", "Mountain Lion", "Bobcat",
        "Elk", "Mule Deer", "Bighorn Sheep"
    ];

    var zionAmphibiansReptilesFish = [
        "Tiger Salamander", "Great Basin Spadefoot", "Arizona Toad",
        "Red-spotted Toad", "Woodhouse's Toad", "Canyon Treefrog",
        "Northern Leopard Frog", "Western Banded Gecko", "Common Chuckwalla",
        "Great Basin Collared Lizard", "Long-nosed Leopard Lizard",
        "Zebra-tailed Lizard", "Desert Spiny Lizard", "Plateau Lizard",
        "Common Sagebrush Lizard", "Side-blotched Lizard", "Ornate Tree Lizard",
        "Desert Horned Lizard", "Greater Short-horned Lizard", "Western Skink",
        "Plateau Spotted Whiptail", "Western Whiptail", "Gila Monster",
        "Ring-necked Snake", "Coachwhip", "Striped Whipsnake",
        "Western Patch-nosed Snake", "Gophersnake", "Common Kingsnake",
        "Sonoran Mountain Kingsnake", "Terrestrial Gartersnake", "Groundsnake",
        "Smith's Black-headed Snake", "Western Lyresnake", "Nightsnake",
        "Western Rattlesnake", "Desert Tortoise", "Virgin Spinedance",
        "Desert Sucker", "Speckle Dace", "Flannelmouth Sucker",
        "Channel Catfish", "Bonneville Cutthroat Trout", "Rainbow Trout",
        "Brown Trout", "Brook Trout"
    ];

    var zionWaterBirds = [
        "Common Loon", "Pied-billed Grebe", "Horned Grebe", "Eared Grebe",
        "Western Grebe", "Clark's Grebe", "American White Pelican",
        "Double-crested Cormorant", "American bittern", "Great Blue Heron",
        "Great Egret", "Snowy Egret", "Cattle Egret", "Green Heron",
        "Black-crowned Night Heron", "White-faced Ibis", "Wood Stork",
        "Tundra Swan", "Snow Goose", "Canada Goose", "Wood Duck",
        "Green-winged Teal", "Mallard", "Northern Pintail", "Blue-winged Teal",
        "Cinnamon Teal", "Northern Shoveler", "Gadwall", "American wigeon",
        "Canvasback", "Redhead", "Ring-necked Duck", "Lesser Scaup",
        "Long-tailed Duck", "Surf Scoter", "White-Winged Scoter",
        "Common Goldeneye", "Bufflehead", "Common Merganser",
        "Red-breasted Merganser", "Ruddy Duck", "Virginia Rail", "Sora",
        "American Coot", "Sandhill Crane", "Black-bellied Plover",
        "Snowy Plover", "Semipalmated Plover", "Killdeer", "Black-necked Stilt",
        "Greater Yellowlegs", "Lesser Yellowlegs", "Solitary Sandpiper",
        "Willet", "Wandering Tattler", "Spotted Sandpiper", "Long-billed Curlew",
        "Marbled Godwit", "Sanderling", "Western Sandpiper", "Least Sandpiper",
        "Baird's Sandpiper", "Pectoral Sandpiper", "Long-billed Dowitcher",
        "Common Snipe", "Wilson's Phalarope", "Red-necked Phalarope",
        "Red Phalarope", "Franklin's Gull", "Bonaparte's Gull",
        "Ring-billed Gull", "California Gull", "Herring Gull", "Caspian Tern",
        "Forster's Tern", "Black Tern", "Osprey", "Bald Eagle"
    ];

    // function longestStringChecker(array) {
    //     var queryString = "";
    //     var theLongest = "";
    //
    //     for (var i = 0; i < array.length; i++) {
    //         queryString = array[i];
    //         if (queryString.length > theLongest.length) {
    //             theLongest = queryString;
    //         }
    //     }
    //
    //     for (var i = 0; i < array.length; i++) {
    //         if (array[i].length > theLongest.length) {
    //             theLongest = array[i];
    //         }
    //     }
    //
    //     return "The longest string was: " + theLongest;
    // }

    function longestStringChecker(array) {
        var theLongest = "";

        for (var i = 0; i < array.length; i++) {
            if (array[i].length > theLongest.length) {
                theLongest = array[i];
            }
        }

        return "The longest string was: " + theLongest;
    }

    console.log(longestStringChecker(zionMammals));
    console.log(longestStringChecker(zionAmphibiansReptilesFish));

//  5.
//  Create a function that takes in two arrays of elements, including
//  numbers. If all numbers added together in the first array is equal to all
//  the number inputs added in the second array, return true, otherwise, false.
//  Only add together numeric elements but either array may contain non-numeric
//  elements.




})();
