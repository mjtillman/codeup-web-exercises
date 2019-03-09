"use strict";

$(document).ready(function () {

    let blank = '';

    (function initialize() {
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
                    currentBlank = upSwap(currentBlank, place, state);
                    break;
                case 'ArrowLeft':
                    currentBlank = leftSwap(currentBlank, place, state);
                    break;
                case 'ArrowRight':
                    currentBlank = rightSwap(currentBlank, place, state);
                    break;
                case 'ArrowDown':
                    currentBlank = downSwap(currentBlank, place, state);
            }
        });
    })();

    function downSwap(currentBlank, place, state) {

        //   ________ ________ ________
        //  |   A    |   B    |   C    |
        //  |        |        |        |
        //  |   0    |   1    |   2    |
        //  |________|________|________|
        //  |   D    |   E    |   F    |
        //  |        |        |        |
        //  |   3    |   4    |   5    |
        //  |________|________|________|
        //  |   G    |   H    |   I    |
        //  |        |        |        |
        //  |   6    |   7    |   8    |
        //  |________|________|________|
        //
        //
        //  blank D, swap A, change state0 to blank
        //  blank E, swap B, change state1 to blank
        //  blank F, swap C, change state2 to blank
        //
        //  blank G, swap D, change state3 to blank
        //  blank H, swap E, change state4 to blank
        //  blank I, swap F, change state5 to blank

        switch (currentBlank) {
            case 'D':
                $(place.D).removeClass(blank).addClass(state[0]);
                $(place.A).removeClass(state[0]).addClass(blank);
                state[3] = state [0];
                state[0] = blank;
                currentBlank = A;
                break;
            case 'G':
                $(place.G).removeClass(blank).addClass(state[6]);
                $(place.D).removeClass(state[6]).addClass(blank);
                state[6] = state[3];
                state[3] = blank;
                currentBlank = A;
                break;
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
        return currentBlank;
    }

    function upSwap(currentBlank, place, state) {
        switch (currentBlank) {
            case 'C':
                $(place.C).removeClass(blank).addClass(state[5]);
                $(place.F).removeClass(state[5]).addClass(blank);
                state[5] = state[2];
                state[2] = blank;
                currentBlank = 'F';
                break;
            case 'F':
                $(place.F).removeClass(blank).addClass(state[8]);
                $(place.I).removeClass(state[8]).addClass(blank);
                state[8] = state[5];
                state[5] = blank;
                currentBlank = 'I';
        }
        return currentBlank;
    }

    function leftSwap(currentBlank, place, state) {
        switch (currentBlank) {

        }
        return currentBlank;
    }

    function rightSwap(currentBlank, place, state) {
        switch (currentBlank) {

        }
        return currentBlank;
    }

});

