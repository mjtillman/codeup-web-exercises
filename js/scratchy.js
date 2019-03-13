'use strict';

function rot13(message) {
    message.forEach(m => console.log(m.charCodeAt(0));
    console.log(message);
}

rot13('Here is a message to decode');

// function humanReadable(seconds) {
//
//     let time = seconds;
//     let hrs  = 0;
//     let mins = 0;
//     let secs = 0;
//
//     // 1 min = 60 secs
//     // 1 hr = 60 min = 3600 sec
//
//     console.log(`${time} in seconds`);
//     console.log(`${time/3600} in hours`);
//     console.log(`${time%3600} in hours`);
//     console.log(time - (time/3600));
//
//
//     return `${hrs}:${mins}:${secs}`;
//
// }
//
// // humanReadable(0);
// // humanReadable(5);
// // humanReadable(60);
// humanReadable(86399);
// humanReadable(359999);
//

// function high(x){
//     let words = [];
//     let scores = [];
//     let score = 0;
//     let largest = 0;
//
//     words = x
//
//     for (let word of words) {
//         for (let i = 0; i < word.length; i++) {
//             score += (word.charCodeAt(i) - 96);
//         }
//         console.log(word + ' ' + score);
//         scores.push(score);
//         score = 0;
//     }
//
//     scores = scores.sort(function(a, b) {
//         return a - b;
//     });
//
//
//     if (scores[scores.length - 1] > scores[scores.length - 2]) {
//         console.log(words[scores.length - 1]);
//         return words[scores.length - 1];
//     } else if (scores[scores.length - 1] === [scores.length - 2]) {
//         return words[scores.length - 2];
//     }
// }
//
// console.log(high('man i need a taxi up to ubud'));
