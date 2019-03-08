"use strict";

$(document).ready(function () {
    // let blank = '#place-' + Math.floor(Math.random() * 4);

    let blank = '';
    let currentBlank = 'I';

    let place = {
        A: '#place-0',      // A: NW corner
        B: '#place-1',
        C: '#place-2',      // C: NE corner
        D: '#place-3',
        E: '#place-4',
        F: '#place-5',
        G: '#place-6',      // G: SW corner
        H: '#place-7',
        I: '#place-8'       // H: SE corner
    };

    let state = [
        'class-0',
        'class-1',
        'class-2',
        'class-3',
        'class-4',
        'class-5',
        'class-6',
        'class-7',
        'class-8'
    ];

    function initialize() {
        $(place.A).toggleClass(state[0]);
        $(place.B).toggleClass(state[1]);
        $(place.C).toggleClass(state[2]);
        $(place.D).toggleClass(state[3]);
        $(place.E).toggleClass(state[4]);
        $(place.F).toggleClass(state[5]);
        $(place.G).toggleClass(state[6]);
        $(place.H).toggleClass(state[7]);
        $(place.I).toggleClass(blank);
        console.log(currentBlank + ' is now blank.');
    }

    initialize();

    $(document).keydown(function () {
        switch (event.key) {
            case 'ArrowUp':
                upSwap();
                break;
            case 'ArrowLeft':
                leftSwap();
                break;
            case 'ArrowRight':
                rightSwap();
                break;
            case 'ArrowDown':
                downSwap();
        }
    });

    function upSwap() {
        switch (currentBlank) {
            case 'B':
                $(place.B).removeClass(blank).addClass(state[4]);
                $(place.E).removeClass(state[4]).addClass(blank);
                state[4] = state[1];
                state[1] = blank;
                currentBlank = 'E';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'E':
                $(place.E).removeClass(blank).addClass(state[7]);
                $(place.H).removeClass(state[7]).addClass(blank);
                state[7] = state[4];
                state[7] = blank;
                currentBlank = 'H';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'C':
                $(place.C).removeClass(blank).addClass(state[5]);
                $(place.F).removeClass(state[5]).addClass(blank);
                state[2] = state[5];
                state[5] = blank;
                currentBlank = 'F';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'F':
                $(place.F).removeClass(blank).addClass(state[8]);
                $(place.I).removeClass(state[8]).addClass(blank);
                state[5] = state[8];
                state[8] = blank;
                currentBlank = 'I';
                console.log(currentBlank + ' is now blank.');
                break;
        }
    }

    function downSwap() {
        switch (currentBlank) {
            case 'G':
                $(place.G).removeClass(blank).addClass(state[3]);
                $(place.D).removeClass(state[3]).addClass(blank);
                state[6] = state[3];
                state[3] = blank;
                currentBlank = 'D';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'E':
                $(place.E).removeClass(blank).addClass(state[1]);
                $(place.B).removeClass(state[1]).addClass(blank);
                state[4] = state[1];
                state[1] = blank;
                currentBlank = 'B';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'H':
                $(place.H).removeClass(blank).addClass(state[4]);
                $(place.E).removeClass(state[4]).addClass(blank);
                state[7] = state[4];
                state[4] = blank;
                currentBlank = 'E';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'F':
                $(place.F).removeClass(blank).addClass(state[2]);
                $(place.C).removeClass(state[2]).addClass(blank);
                state[5] = state[2];
                state[2] = blank;
                currentBlank = 'C';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'I':
                $(place.I).removeClass(blank).addClass(state[5]);
                $(place.F).removeClass(state[5]).addClass(blank);
                state[8] = state[5];
                state[5] = blank;
                currentBlank = 'F';
                console.log(currentBlank + ' is now blank.');
        }
    }

    function leftSwap() {
        switch (currentBlank) {
            case 'G':
                $(place.G).removeClass(blank).addClass(state[7]);
                $(place.H).removeClass(state[7]).addClass(blank);
                state[6] = state[7];
                state[7] = blank;
                currentBlank = 'H';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'H':
                $(place.H).removeClass(blank).addClass(state[8]);
                $(place.I).removeClass(state[8]).addClass(blank);
                state[7] = state[8];
                state[8] = blank;
                currentBlank = 'I';
                console.log(currentBlank + ' is now blank.');
                break;
        }
    }

    function rightSwap() {
        switch (currentBlank) {
            case 'H':
                $(place.H).removeClass(blank).addClass(state[6]);
                $(place.G).removeClass(state[6]).addClass(blank);
                state[7] = state[6];
                state[6] = blank;
                currentBlank = 'G';
                console.log(currentBlank + ' is now blank.');
                break;
            case 'I':
                $(place.I).removeClass(blank).addClass(state[7]);
                $(place.H).removeClass(state[7]).addClass(blank);
                state[8] = state[7];
                state[7] = blank;
                currentBlank = 'H';
                console.log(currentBlank + ' is now blank.');
                break;
        }
    }

});

