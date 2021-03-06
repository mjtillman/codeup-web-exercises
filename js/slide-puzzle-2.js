"use strict";

let game = {

    place: [
        '#place-00', '#place-01', '#place-02', '#place-03',
        '#place-04', '#place-05', '#place-06', '#place-07',
        '#place-08', '#place-09', '#place-10', '#place-11',
        '#place-12', '#place-13', '#place-14', '#place-15'
    ],

    originalState: [
        'class-00', 'class-01', 'class-02', 'class-03',
        'class-04', 'class-05', 'class-06', 'class-07',
        'class-08', 'class-09', 'class-10', 'class-11',
        'class-12', 'class-13', 'class-14', 'blank'
    ],

    state: [],

    currentBlank: 15,
    moves: 0,
    canMove: true,
    wasSwapped: false,

    reset: function () {
        this.state =  [
            'class-00', 'class-01', 'class-02', 'class-03',
            'class-04', 'class-05', 'class-06', 'class-07',
            'class-08', 'class-09', 'class-10', 'class-11',
            'class-12', 'class-13', 'class-14', 'blank'];
        this.currentBlank = 15;
    },

    shuffleAndPlace: function() {
        this.reset();

        $('#shuffle').html('Shuffle');

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

        switch (this.state.indexOf('blank')) {
            case 0: this.currentBlank = 0; break;
            case 1: this.currentBlank = 1; break;
            case 2: this.currentBlank = 2; break;
            case 3: this.currentBlank = 3; break;
            case 4: this.currentBlank = 4; break;
            case 5: this.currentBlank = 5; break;
            case 6: this.currentBlank = 6; break;
            case 7: this.currentBlank = 7; break;
            case 8: this.currentBlank = 8; break;
            case 9: this.currentBlank = 10; break;
            case 10: this.currentBlank = 11; break;
            case 11: this.currentBlank = 11; break;
            case 12: this.currentBlank = 12; break;
            case 13: this.currentBlank = 13; break;
            case 14: this.currentBlank = 14; break;
            case 15: this.currentBlank = 15; break;
        }

        this.place.forEach((pl) => {
            $(pl).removeClass();
        });

        $(this.place[0]).addClass(this.state[0]);
        $(this.place[1]).addClass(this.state[1]);
        $(this.place[2]).addClass(this.state[2]);
        $(this.place[3]).addClass(this.state[3]);
        $(this.place[4]).addClass(this.state[4]);
        $(this.place[5]).addClass(this.state[5]);
        $(this.place[6]).addClass(this.state[6]);
        $(this.place[7]).addClass(this.state[7]);
        $(this.place[8]).addClass(this.state[8]);
        $(this.place[9]).addClass(this.state[9]);
        $(this.place[10]).addClass(this.state[10]);
        $(this.place[11]).addClass(this.state[11]);
        $(this.place[12]).addClass(this.state[12]);
        $(this.place[13]).addClass(this.state[13]);
        $(this.place[14]).addClass(this.state[14]);
        $(this.place[15]).addClass(this.state[15]);

        this.moves = 0;
        $('#moves').text(game.moves);
        this.canMove = true;
    }
};

game.shuffleAndPlace();

$('#shuffle').on('click', function() {
    game.canMove = true;
});

$(document).keydown(function () {
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

function solveCheck(moves) {
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

}

function swap(x, y) {
    $(game.place[x]).removeClass(game.state[x]).addClass(game.state[y]);
    $(game.place[y]).removeClass(game.state[y]).addClass(game.state[x]);
    game.state[x] = game.state[y];
    game.state[y] = ' ';
    game.wasSwapped = true;
    return y;
}

function upSwap(currentBlank) {
    switch (currentBlank) {
        case 0:  currentBlank = swap(0, 4);   break;
        case 1:  currentBlank = swap(1, 5);   break;
        case 2:  currentBlank = swap(2, 6);   break;
        case 3:  currentBlank = swap(3, 7);   break;

        case 4:  currentBlank = swap(4, 8);   break;
        case 5:  currentBlank = swap(5, 9);   break;
        case 6:  currentBlank = swap(6, 10);   break;
        case 7:  currentBlank = swap(7, 11);  break;

        case 8:  currentBlank = swap(8, 12);  break;
        case 9:  currentBlank = swap(9, 13);  break;
        case 10: currentBlank = swap(10, 14); break;
        case 11: currentBlank = swap(11, 15);
    }
    return currentBlank;
}

function leftSwap(currentBlank) {
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
}

function rightSwap(currentBlank) {
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
}

function downSwap(currentBlank) {
    switch (currentBlank) {
        case 4: currentBlank = swap(4, 0); break;
        case 5: currentBlank = swap(5, 1); break;
        case 6: currentBlank = swap(6, 2); break;
        case 7: currentBlank = swap(7, 3); break;

        case 8: currentBlank = swap(8, 4); break;
        case 9: currentBlank = swap(9, 5); break;
        case 10: currentBlank = swap(10, 6); break;
        case 11: currentBlank = swap(11, 7); break;

        case 12: currentBlank = swap(12, 8); break;
        case 13: currentBlank = swap(13 , 9); break;
        case 14: currentBlank = swap(14, 10); break;
        case 15: currentBlank = swap(15, 11)
    }
    return currentBlank;
}

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