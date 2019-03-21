"use strict";


const selectPuzzle = () => {
    let which = Math.floor(Math.random() * 2);

    console.log(which);

    if (which === 0) {
        return 'A';
    } else {
        return 'B';
    }
};

const reset = () => {
    if (game.whichPuzzle === 'A') {
        game.state = game.originalStateA;
    } else if (game.whichPuzzle === 'B') {
        game.state = game.originalStateB;
    }

    game.currentBlank = 15;
};

let game = {

    place: [
        '#place-00', '#place-01', '#place-02', '#place-03',
        '#place-04', '#place-05', '#place-06', '#place-07',
        '#place-08', '#place-09', '#place-10', '#place-11',
        '#place-12', '#place-13', '#place-14', '#place-15'
    ],

    originalStateA: [
        'class-A-00', 'class-A-01', 'class-A-02', 'class-A-03',
        'class-A-04', 'class-A-05', 'class-A-06', 'class-A-07',
        'class-A-08', 'class-A-09', 'class-A-10', 'class-A-11',
        'class-A-12', 'class-A-13', 'class-A-14', 'blank'
    ],

    originalStateB: [
        'class-B-00', 'class-B-01', 'class-B-02', 'class-B-03',
        'class-B-04', 'class-B-05', 'class-B-06', 'class-B-07',
        'class-B-08', 'class-B-09', 'class-B-10', 'class-B-11',
        'class-B-12', 'class-B-13', 'class-B-14', 'blank'
    ],

    state: [],

    currentBlank: 15,
    moves: 0,
    canMove: true,
    wasSwapped: false,

    whichPuzzle: selectPuzzle(),

    shuffleAndPlace: () => {
        reset();

        $('#shuffle').html('Shuffle');

        let currentIndex = game.state.length;
        let temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = game.state[currentIndex];
            game.state[currentIndex] = game.state[randomIndex];
            game.state[randomIndex] = temporaryValue;
        }

        switch (game.state.indexOf('blank')) {
            case 0: game.currentBlank = 0; break;
            case 1: game.currentBlank = 1; break;
            case 2: game.currentBlank = 2; break;
            case 3: game.currentBlank = 3; break;
            case 4: game.currentBlank = 4; break;
            case 5: game.currentBlank = 5; break;
            case 6: game.currentBlank = 6; break;
            case 7: game.currentBlank = 7; break;
            case 8: game.currentBlank = 8; break;
            case 9: game.currentBlank = 10; break;
            case 10: game.currentBlank = 11; break;
            case 11: game.currentBlank = 11; break;
            case 12: game.currentBlank = 12; break;
            case 13: game.currentBlank = 13; break;
            case 14: game.currentBlank = 14; break;
            case 15: game.currentBlank = 15; break;
        }

        game.place.forEach((pl) => {
            $(pl).removeClass();
        });

        $(game.place[0]).addClass(game.state[0]);
        $(game.place[1]).addClass(game.state[1]);
        $(game.place[2]).addClass(game.state[2]);
        $(game.place[3]).addClass(game.state[3]);
        $(game.place[4]).addClass(game.state[4]);
        $(game.place[5]).addClass(game.state[5]);
        $(game.place[6]).addClass(game.state[6]);
        $(game.place[7]).addClass(game.state[7]);
        $(game.place[8]).addClass(game.state[8]);
        $(game.place[9]).addClass(game.state[9]);
        $(game.place[10]).addClass(game.state[10]);
        $(game.place[11]).addClass(game.state[11]);
        $(game.place[12]).addClass(game.state[12]);
        $(game.place[13]).addClass(game.state[13]);
        $(game.place[14]).addClass(game.state[14]);
        $(game.place[15]).addClass(game.state[15]);

        game.moves = 0;
        $('#moves').text(game.moves);
        game.canMove = true;
    }
};

game.shuffleAndPlace();

console.log(game.whichPuzzle);

//  Shuffle Button Listener
const shuffle = document.getElementById('shuffle');

shuffle.addEventListener('click', e => {
    game.canMove = true;
});

//  Keydown Listener
window.addEventListener('keydown', e => {

    if (game.canMove) {
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

        if (game.wasSwapped) {
            game.moves = solveCheck(game.moves);
            game.wasSwapped = false;
        }
    }
});

const solveCheck = (moves) => {
    moves++;

    let solve = ['00', '01', '02', '03', '04', '05', '06', '07', '08',
    '09', '10', '11', '12', '13', '14'];

    let inTheRightPlace =
        [false, false, false, false,
         false, false, false, false,
         false, false, false, false,
         false, false, false];

    let rightCounter = 0;

    game.place.forEach( function(place, i) {
        if ($(place).hasClass(`class-${solve[i]}`)) {
            inTheRightPlace[i] = true;
        }
    });

    inTheRightPlace.forEach( function(rightPlace) {
        if (rightPlace === true) rightCounter++;
    });

    if (rightCounter === 15) {
        game.canMove = false;

        let message = `<em>You solved the puzzle in ${moves} moves.</em>`;
        $('#headline').html(`Congratulations!`);
        $('#byline').html(message);
        $('#place-15').addClass('class-15');
        $('#shuffle').html('New Game');
    } else {
        $('#moves').html(moves);
        return moves;
    }

};

const swap = (x, y) => {
    $(game.place[x]).removeClass(game.state[x]).addClass(game.state[y]);
    $(game.place[y]).removeClass(game.state[y]).addClass(game.state[x]);
    game.state[x] = game.state[y];
    game.state[y] = ' ';
    game.wasSwapped = true;
    return y;
};

const upSwap = (currentBlank) => {
    switch (currentBlank) {
        case 0:  currentBlank = swap(0, 4);   break;
        case 1:  currentBlank = swap(1, 5);   break;
        case 2:  currentBlank = swap(2, 6);   break;
        case 3:  currentBlank = swap(3, 7);   break;

        case 4:  currentBlank = swap(4, 8);   break;
        case 5:  currentBlank = swap(5, 9);   break;
        case 6:  currentBlank = swap(6, 10);  break;
        case 7:  currentBlank = swap(7, 11);  break;

        case 8:  currentBlank = swap(8, 12);  break;
        case 9:  currentBlank = swap(9, 13);  break;
        case 10: currentBlank = swap(10, 14); break;
        case 11: currentBlank = swap(11, 15);
    }
    return currentBlank;
};

const leftSwap = (currentBlank) => {
    switch (currentBlank) {
        case 0: currentBlank = swap(0, 1); break;
        case 1: currentBlank = swap(1, 2); break;
        case 2: currentBlank = swap(2, 3); break;

        case 4: currentBlank = swap(4, 5); break;
        case 5: currentBlank = swap(5, 6); break;
        case 6: currentBlank = swap(6, 7); break;

        case 8: currentBlank = swap(8, 9); break;
        case 9: currentBlank = swap(9, 10); break;
        case 10: currentBlank = swap(10, 11); break;

        case 12: currentBlank = swap(12, 13); break;
        case 13: currentBlank = swap(13, 14); break;
        case 14: currentBlank = swap(14, 15);
    }
    return currentBlank;
};

const rightSwap = (currentBlank) => {
    switch (currentBlank) {
        case 1: currentBlank = swap( 1, 0); break;
        case 2: currentBlank = swap( 2, 1); break;
        case 3: currentBlank = swap( 3, 2); break;

        case 5: currentBlank = swap( 5, 4); break;
        case 6: currentBlank = swap( 6, 5); break;
        case 7: currentBlank = swap( 7, 6); break;

        case 9: currentBlank = swap(9, 8); break;
        case 10: currentBlank = swap(10, 9); break;
        case 11: currentBlank = swap(11, 10); break;

        case 13: currentBlank = swap(13, 12); break;
        case 14: currentBlank = swap(14, 13); break;
        case 15: currentBlank = swap(15, 14);
    }
    return currentBlank;
};

const downSwap = (currentBlank) => {
    switch (currentBlank) {
        case 4: currentBlank = swap(4, 0); break;
        case 5: currentBlank = swap(5, 1); break;
        case 6: currentBlank = swap(6, 2); break;
        case 7: currentBlank = swap(7, 3); break;

        case 8: currentBlank = swap(8, 4);   break;
        case 9: currentBlank = swap(9, 5);   break;
        case 10: currentBlank = swap(10, 6); break;
        case 11: currentBlank = swap(11, 7); break;

        case 12: currentBlank = swap(12, 8);  break;
        case 13: currentBlank = swap(13 , 9); break;
        case 14: currentBlank = swap(14, 10); break;
        case 15: currentBlank = swap(15, 11)
    }
    return currentBlank;
};

// $('#almostSolved').on('click', almostSolve);
//
// function almostSolve () {
//
//     game.place.forEach(function(place, i) {
//         $(game.place[i]).removeClass(game.state[i]);
//     });
//
//     for (let i = 0; i < 14; i++) {
//         $(game.place[i]).addClass(game.originalState[i]);
//         game.state[i] = game.originalState[i];
//     }
//
//     $(game.place[15]).addClass(game.originalState[14]);
//     game.state[15] = game.originalState[14];
//     game.state[14] = 'blank';
//
//
//     game.currentBlank = 14;
//
// }