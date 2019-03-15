"use strict";

let game = {

    place: [
        '#place-0', '#place-1', '#place-2',
        '#place-3', '#place-4', '#place-5',
        '#place-6', '#place-7', '#place-8'
    ],

    state: [
        'class-0', 'class-1', 'class-2',
        'class-3', 'class-4', 'class-5',
        'class-6', 'class-7', ' '
    ],

    currentBlank: 0,

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

        switch (this.state.indexOf(' ')) {
            case 0: this.currentBlank = 0; break;
            case 1: this.currentBlank = 1; break;
            case 2: this.currentBlank = 2; break;
            case 3: this.currentBlank = 3; break;
            case 4: this.currentBlank = 4; break;
            case 5: this.currentBlank = 5; break;
            case 6: this.currentBlank = 6; break;
            case 7: this.currentBlank = 7; break;
            case 8: this.currentBlank = 8; break;
        }

        $(this.place[0]).removeClass(); $(this.place[1]).removeClass();
        $(this.place[2]).removeClass(); $(this.place[3]).removeClass();
        $(this.place[4]).removeClass(); $(this.place[5]).removeClass();
        $(this.place[6]).removeClass(); $(this.place[7]).removeClass();
        $(this.place[8]).removeClass();

        $(this.place[0]).addClass(this.state[0]);
        $(this.place[1]).addClass(this.state[1]);
        $(this.place[2]).addClass(this.state[2]);
        $(this.place[3]).addClass(this.state[3]);
        $(this.place[4]).addClass(this.state[4]);
        $(this.place[5]).addClass(this.state[5]);
        $(this.place[6]).addClass(this.state[6]);
        $(this.place[7]).addClass(this.state[7]);
        $(this.place[8]).addClass(this.state[8]);
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

    solveCheck(game.state);
});

function solveCheck(current) {
    let solved = [
        'class-0', 'class-1', 'class-2',
        'class-3', 'class-4', 'class-5',
        'class-6', 'class-7', ' '
    ];

    if (current === solved) {
        console.log('solved');
    } else {
        console.log('not solved')
    }
}

function swap(x, y) {
    $(game.place[x]).removeClass(game.state[x]).addClass(game.state[y]);
    $(game.place[y]).removeClass(game.state[y]).addClass(game.state[x]);
    game.state[x] = game.state[y];
    game.state[y] = '';
}

function upSwap(currentBlank) {
    switch (currentBlank) {
        case 0:
            swap(0, 3);
            currentBlank = 3;
            break;
        case 1:
            swap(1, 4);
            currentBlank = 4;
            break;
        case 2:
            swap(2, 5);
            currentBlank = 5;
            break;
        case 3:
            swap(3, 6);
            currentBlank = 6;
            break;
        case 4:
            swap(4, 7);
            currentBlank = 7;
            break;
        case 5:
            swap(5, 8);
            currentBlank = 8;
            break;
    }
    return currentBlank;
}

function leftSwap(currentBlank) {
    switch (currentBlank) {
        case 0:
            swap(0, 1);
            currentBlank = 1;
            break;
        case 1:
            swap(1, 2);
            currentBlank = 2;
            break;
        case 3:
            swap(3, 4);
            currentBlank = 4;
            break;
        case 4:
            swap(4, 5);
            currentBlank = 5;
            break;
        case 6:
            swap(6, 7);
            currentBlank = 7;
            break;
        case 7:
            swap(7, 8);
            currentBlank = 8;
            break;
    }
    return currentBlank;
}

function rightSwap(currentBlank) {
    switch (currentBlank) {
        case 1:
            swap( 1, 0);
            currentBlank = 0;
            break;
        case 2:
            swap( 2, 1);
            currentBlank = 1;
            break;
        case 4:
            swap( 4, 3);
            currentBlank = 3;
            break;
        case 5:
            swap( 5, 4);
            currentBlank = 4;
            break;
        case 7:
            swap( 7, 6);
            currentBlank = 6;
            break;
        case 8:
            swap( 8, 7);
            currentBlank = 7;
    }
    return currentBlank;
}

function downSwap(currentBlank) {
    switch (currentBlank) {
        case 3:
            swap(3, 0);
            currentBlank = 0;
            break;
        case 4:
            swap(4, 1);
            currentBlank = 1;
            break;
        case 5:
            swap(5, 2);
            currentBlank = 2;
            break;
        case 6:
            swap(6, 3);
            currentBlank = 3;
            break;
        case 7:
            swap(7, 4);
            currentBlank = 4;
            break;
        case 8:
            swap(8, 5);
            currentBlank = 5;
    }
    return currentBlank;
}