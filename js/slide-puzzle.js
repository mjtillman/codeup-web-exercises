"use strict";

$(document).ready(function () {
    // let blank = '#place-' + Math.floor(Math.random() * 4);

    let blank = '';
    let currentBlank = 'D';

    let place = {
        A: '#place-0',      // A: NW corner
        B: '#place-1',      // B: NE corner
        C: '#place-2',      // C: SW corner
        D: '#place-3'       // D: SE corner
    };

    let state = [
        'class-0',
        'class-1',
        'class-2',
    ];

    function initialize() {
        $(place.A).toggleClass(state[0]);
        $(place.B).toggleClass(state[1]);
        $(place.C).toggleClass(state[2]);
        $(place.D).toggleClass(blank);
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
                break;
        }
    });

    function downSwap() {
        if (currentBlank === 'D') {                       //  swaps 2 and 0
            $('#place-0').toggleClass(current2);
            $('#place-2').toggleClass(current2);
            current0 = current2;
            current2 = blank;
            currentBlank = 2;
        } else if (currentBlank === 'C') {                //  swaps 1 and 3
            $('#place-1').toggleClass(current3);
            $('#place-3').toggleClass(current3);
            current1 = current3;
            current3 = blank;
            currentBlank = 3;
        }
    }

});

