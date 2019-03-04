"use strict";

let round = {

    code: [],
    guess: 0,

    codeGenerate: function() {
        let codeColors = ["red", "yellow", "green", "blue"];
        for (let i = 0; i < 4; i++) {
            round.code[i] = codeColors[Math.floor(Math.random() * 4)];
        }
    },

};

round.codeGenerate();
console.log(round.code);