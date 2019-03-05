"use strict";

$(document).ready(function () {
    // let blank = '#place-' + Math.floor(Math.random() * 4);

    let puzzle = {

    };

    let currentBlank = 3;
    let blank = '';

    let current0 = 'class-0';
    let current1 = 'class-1';
    let current2 = 'class-2';
    let current3 = blank;

    $('#place-0').addClass(current0);
    $('#place-1').addClass(current1);
    $('#place-2').addClass(current2);
    $('#place-3').addClass(current3);

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

    function upSwap() {
        if (currentBlank === 0) {                       //  swaps 2 and 0
            $('#place-0').toggleClass(current2);
            $('#place-2').toggleClass(current2);
            current0 = current2;
            current2 = blank;
            currentBlank = 2;
        } else if (currentBlank === 1) {                //  swaps 1 and 3
            $('#place-1').toggleClass(current3);
            $('#place-3').toggleClass(current3);
            current1 = current3;
            current3 = blank;
            currentBlank = 3;
        }
    }

    function leftSwap() {
        if (currentBlank === 0) {                       //  swaps 0 and 1
            $('#place-0').toggleClass(current1);
            $('#place-1').toggleClass(current1);
            current0 = current1;
            current1 = blank;
            currentBlank = 1;
        } else if (currentBlank === 2) {                //  swaps 2 and 3
            $('#place-2').toggleClass(current3);
            $('#place-3').toggleClass(current3);
            current2 = current3;
            current3 = blank;
            currentBlank = 3;
        }
    }

    function downSwap() {
        if (currentBlank === 2) {                       // swaps 0 and 2
            $('#place-0').toggleClass(current0);
            $('#place-2').toggleClass(current0);
            current2 = current0;
            current0 = blank;
            currentBlank = 0;
        } else if (currentBlank === 3) {                //  swaps 3 and 1
            $('#place-1').toggleClass(current1);
            $('#place-3').toggleClass(current1);
            current3 = current1;
            current1 = blank;
            currentBlank = 1;
        }
    }

    function rightSwap() {
        if (currentBlank === 1) {                       //  swaps 1 and 0
            $('#place-0').toggleClass(current0);
            $('#place-1').toggleClass(current0);
            current1 = current0;
            current0 = blank;
            currentBlank = 0;
        } else if (currentBlank === 3) {                //  swaps 3 and 2
            $('#place-2').toggleClass(current2);
            $('#place-3').toggleClass(current2);
            current3 = current2;
            current2 = blank;
            currentBlank = 2;
        }
    }

});

