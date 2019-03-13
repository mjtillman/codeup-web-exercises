"use strict";

let game = {

    place: {
        A: '#place-0', B: '#place-1', C: '#place-2',
        D: '#place-3', E: '#place-4', F: '#place-5',
        G: '#place-6', H: '#place-7', I: '#place-8'
    },

    state: [
        'class-0', 'class-1', 'class-2',
        'class-3', 'class-4', 'class-5',
        'class-6', 'class-7', ' '
    ],

    currentBlank: 'I',

    shuffleAndPlace: function() {
        var currentIndex = this.state.length;
        var temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.state[currentIndex];
            this.state[currentIndex] = this.state[randomIndex];
            this.state[randomIndex] = temporaryValue;
        }

        console.log(this.state);

        switch (this.state.indexOf(' ')) {
            case 0: this.currentBlank = 'A'; break;
            case 1: this.currentBlank = 'B'; break;
            case 2: this.currentBlank = 'C'; break;
            case 3: this.currentBlank = 'D'; break;
            case 4: this.currentBlank = 'E'; break;
            case 5: this.currentBlank = 'F'; break;
            case 6: this.currentBlank = 'G'; break;
            case 7: this.currentBlank = 'H'; break;
            case 8: this.currentBlank = 'I'; break;
        }

        console.log(this.currentBlank);

        $(this.place.A).removeClass(); $(this.place.B).removeClass();
        $(this.place.C).removeClass(); $(this.place.D).removeClass();
        $(this.place.E).removeClass(); $(this.place.F).removeClass();
        $(this.place.G).removeClass(); $(this.place.H).removeClass();
        $(this.place.I).removeClass();

        $(this.place.A).addClass(this.state[0]);
        $(this.place.B).addClass(this.state[1]);
        $(this.place.C).addClass(this.state[2]);
        $(this.place.D).addClass(this.state[3]);
        $(this.place.E).addClass(this.state[4]);
        $(this.place.F).addClass(this.state[5]);
        $(this.place.G).addClass(this.state[6]);
        $(this.place.H).addClass(this.state[7]);
        $(this.place.I).addClass(this.state[8]);
    }
};

game.shuffleAndPlace();

$('#shuffle').on('click', function() {
    game.shuffleAndPlace()
});

$(document).keydown(function () {
    switch (event.key) {
        case 'ArrowUp':
            game.currentBlank = upSwap(game.currentBlank);
            break;
        case 'ArrowLeft':
            game.currentBlank = leftSwap(game.currentBlank);
            break;
        case 'ArrowRight':
            game.currentBlank = rightSwap(game.currentBlank);
            break;
        case 'ArrowDown':
            game.currentBlank = downSwap(game.currentBlank);
    }
});

function swap(char1, char2, x, y) {
    char1 = 'game.place.' + char1;
    char2 = 'game.place.' + char2;
    $(char1).removeClass(game.state[x]).addClass(game.state[y]);
    $(char2).removeClass(game.state[y]).addClass(game.state[x]);
    game.state[x] = game.state[y];
    game.state[y] = '';
}

function upSwap(currentBlank) {
    switch (currentBlank) {
        case 'A':
            swap('A', 'D', 0, 3);
            currentBlank = 'D';
            break;
        case 'B':
            swap('B', 'E', 1, 4);
            currentBlank = 'E';
            break;
        case 'C':
            swap('C', 'F', 2, 5);
            currentBlank = 'F';
            break;
        case 'D':
            swap('D', 'G', 3, 6);
            currentBlank = 'G';
            break;
        case 'E':
            swap('E', 'H', 4, 7);
            currentBlank = 'H';
            break;
        case 'F':
            swap('F', 'I', 5, 8);
            currentBlank = 'I';
            break;
    }
    return currentBlank;
}

function leftSwap(currentBlank) {
    switch (currentBlank) {
        case 'A':
            swap('A', 'B', 0, 1);
            currentBlank = 'B';
            break;
        case 'B':
            swap('B', 'C', 1, 2);
            currentBlank = 'C';
            break;
        case 'D':
            swap('D', 'E', 3, 4);
            currentBlank = 'E';
            break;
        case 'E':
            swap('E', 'F', 4, 5);
            currentBlank = 'F';
            break;
        case 'G':
            swap('G', 'H', 6, 7);
            currentBlank = 'H';
            break;
        case 'H':
            swap('H', 'I', 7, 8);
            currentBlank = 'I';
            break;
    }
    return currentBlank;
}

function rightSwap(currentBlank) {
    switch (currentBlank) {
        case 'B':
            swap('B', 'A', 1, 0);
            currentBlank = 'A';
            break;
        case 'C':
            swap('C', 'B', 2, 1);
            currentBlank = 'B';
            break;
        case 'E':
            swap('E', 'D', 4, 3);
            currentBlank = 'D';
            break;
        case 'F':
            swap('F', 'E', 5, 4);
            currentBlank = 'E';
            break;
        case 'H':
            swap('H', 'G', 7, 6);
            currentBlank = 'G';
            break;
        case 'I':
            swap('I', 'H', 8, 7);
            currentBlank = 'H';
    }
    return currentBlank;
}

function downSwap(currentBlank) {
    switch (currentBlank) {
        case 'D':
            swap('D', 'A', 3, 0);
            currentBlank = 'A';
            break;
        case 'E':
            swap('E', 'B', 4, 1);
            currentBlank = 'B';
            break;
        case 'F':
            swap('F', 'C', 5, 2);
            currentBlank = 'C';
            break;
        case 'G':
            swap('G', 'D', 6, 3);
            currentBlank = 'D';
            break;
        case 'H':
            swap('H', 'E', 7, 4);
            currentBlank = 'E';
            break;
        case 'I':
            swap('I', 'F', 8, 5);
            currentBlank = 'F';
    }
    return currentBlank;
}