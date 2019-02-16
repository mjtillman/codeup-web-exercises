(function() {
    "use strict";

    var beverage1 = {
        brandName: "Dr. Pepper",
        type: "Cola",
        volumeinFlOz: 12,
        priceInCents: 99,
        expirationDate: "07/23",
        dateTimesOfLastSips: null,
        isOpen: false
    };

    var beverage2 = {
        brandName: "IBC Root Beer",
        type: "Root Beer",
        volumeInFlOz: 12,
        priceInCents: 149,
        expirationDate: "07/23",
        dateTimesOfLastSips: null,
        isOpen: false
    };

    var beverage3 = {
        brandName: "Gold Peak",
        type: "Tea",
        volumeInFlOz: 18.5,
        priceInCents: 125,
        expirationDate: "07/23",
        dateTimesOfLastSips: null,
        isOpen: false
    };

    var beverage4 = {
        brandName: "Starbucks",
        type: "Chai Latte",
        volumeInFlOz: 20,
        priceInCents: 549,
        expirationDate: "02/15",
        dateTimesOfLastSips: "02/15 10:46:23",
        isOpen: true
    };

    var beverage5 = {};

    beverage5.brandName = "Unibroue";
    beverage5.type = "La Fin Du Monde";
    beverage5.volumeInML = 750;
    beverage5.priceInCents = "899";
    beverage5.expirationDate = "07/23";
    beverage5.dateTimesOfLastSips = null;
    beverage5.isOpen = false;


    var users = [
        {
            name: "Sam",
            age: 21
        },
        {
            name: "Cathy",
            age: 34
        },
        {
            name: "Karen",
            age: 43
        }
    ];


    var userMessage = "";

    // console.log(users);

    users.forEach(function(element, index, array) {
        userMessage += element.name + " ";
    });


    users.forEach(function(element, index, array) {
        element.name = "John Doe";
    });



    users.forEach(function(element, index, array) {
        element.age = element.age + 1;
    });
    //
    // console.log(users);

    var dog = {
        breed: "Long-haired Dachschund",
        weightInPounds: 20,
        age: 4,
        color: "red",
        sterilized: false,
        shotRecords: [
            {
                vaccine: "Rabies",
                date: 2015
            },
            {
                vaccine: "Parvo",
                date: 2016
            },
            {
                vaccine: "Distemper",
                date: 2017
            }
        ],
        bark: function() {
            console.log("Arf arf!");
        },
        getOlder: function(){
            this.age += 1;
        },
        fix: function() {
            this.sterilized = true;
        },
        vaccinate: function(vaccine, date) {
            this.shotRecords.push({vaccine: vaccine, date: date})
        }
    };

    dog.bark();
    dog.getOlder();
    dog.fix();
    dog.vaccinate("Canine Hepatitis", 2019);
    console.log(dog);

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
      firstName: "Mindy",
      lastName: "Tillman",
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting
     * using the firstName and lastName properties. console.log the
     * returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
      return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will
     * have to display a line with the name of the person, the amount
     * before the discount, the discount, if any, and the amount after
     * the discount.
     *
     * Uncomment the lines below to create an array of objects where each
     * object represents one shopper. Use a foreach loop to iterate
     * through the array, and console.log the relevant messages for each
     * person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discountDecider(total){
        var discountPercent = 0.88;

        if (total > 200) {
            total *= discountPercent;
        }
        return total;
    }

    shoppers.forEach(function(element, index, array){
      console.log(element.name + " will pay $" + discountDecider(element.amount).toFixed(2) + ".")
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: {firstName: "J.K.", lastName:"Rowling"}
        },
        {
            title: "Sabriel",
            author: {firstName: "Garth", lastName: "Nix"}
        },
        {
            title: "Midnight Hour Encores",
            author: {firstName: "Bruce", lastName: "Brooks"}
        },
        {
            title: "Bartleby, the Scrivener: A Story of Wall Street",
            author: {firstName: "Herman", lastName: "Melville"}
        },
        {
            title: "A Game of Thrones",
            author: {firstName: "George R.R.", lastName: "Martin"}
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */

    function bookStringGenerator(object, index){
        return "Book #" + (index + 1) + ":\n" +
                "Title: " + object.title + "\n" +
                "Author: " + object.author.firstName + " " +
                object.author.lastName + "\n---\n";
    }

    var giantBookString = "";

    books.forEach(function(element, index, array) {
        giantBookString += bookStringGenerator(element, index);
    });

    console.log(giantBookString);

    /**
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and
     * author name and returns a book object with the properties describe
     *   previously. Refactor your code that creates the books array to
     *   instead use your function.
     * - Create a function named `showBookInfo` that accepts a book
     * object and outputs the information described above. Refactor your
     * loop to use your `showBookInfo` function.
     */

    function createBook(title, firstName, lastName) {
        return {    title: title,
                    author: {firstName: firstName, lastName: lastName}
                };
    }

    var booksWithFunctions = [];

    booksWithFunctions.push(createBook("Harry Potter", "J.K", "Rowling"));

    booksWithFunctions.push(createBook("Sabriel", "Garth", "Nix"));

    booksWithFunctions.push(createBook("Midnight Hour Encores", "Bruce", "Brooks"));

    booksWithFunctions.push(createBook("Bartleby", "Herman", "Melville"));

    booksWithFunctions.push(createBook("A Game of Thrones", "George R.R.", "Martin"));

    ///////////

    books[0].keywords = ["fantasy", "magic", "wizards"];
    books[1].keywords = ["fantasy", "magic", "necromancer", "female protagonist"];
    books[2].keywords = ["drama", "music", "history", "female protagonist"];
    books[3].keywords = ["short story", "literature", "interpretation", "work", "philosophy"];
    books[4].keywords = ["fantasy", "magic", "dragons", "intrigue", "political drama"];

    function getDueDate() {

        var today = new Date();
        today.setDate(today.getDate() + 14);

        return {
            month: (today.getMonth() + 1),
            day: today.getDate()
        };
    }

    books.forEach(function(element, index, array) {
        element.available = true;
        element.dateAvailable = "now";
        element.lend = function() {
            element.available = false;
            element.dateAvailable = getDueDate();
        };
        element.receive = function() {
            element.available = true;
            element.dateAvailable = "now";
        }
    });

    books.forEach(function(element, index, array) {
        element.lend();
        console.log(element);
    });

})();
