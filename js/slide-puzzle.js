"use strict";

$(document).ready(function () {

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
        blank
    ];

    $(place.A).addClass(state[0]);
    $(place.B).addClass(state[1]);
    $(place.C).addClass(state[2]);
    $(place.D).addClass(state[3]);
    $(place.E).addClass(state[4]);
    $(place.F).addClass(state[5]);
    $(place.G).addClass(state[6]);
    $(place.H).addClass(state[7]);
    $(place.I).addClass(blank);

    $(document).keydown(function () {
        switch (event.key) {
            case 'ArrowUp':
                currentBlank = upSwap;
                break;
            case 'ArrowLeft':
                currentBlank = leftSwap;
                break;
            case 'ArrowRight':
                currentBlank = rightSwap;
                break;
            case 'ArrowDown':
                currentBlank = downSwap;
        }
    });

    function downSwap() {
        switch (currentBlank) {
            case 'F':
                $(place.F).removeClass(blank).addClass(state[2]);
                $(place.C).removeClass(state[2]).addClass(blank);
                state[2] = state[5];
                state[5] = blank;
                currentBlank = 'C';
                break;
            case 'I':
                $(place.I).removeClass(blank).addClass(state[5]);
                $(place.F).removeClass(state[5]).addClass(blank);
                state[5] = state[8];
                state[8] = blank;
                currentBlank = 'F';
        }
    }

    function upSwap() {
        switch (currentBlank) {
            case 'C':
                console.log(`Hello`);
                $(place.C).removeClass(blank).addClass(state[5]);

        }
    }

    function leftSwap() {
        switch (currentBlank) {

        }
    }

    function rightSwap(currentBlank, place, state) {
        switch (currentBlank) {

        }
    }

});

