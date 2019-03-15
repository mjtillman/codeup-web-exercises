'use strict';

const wait = (sec) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`You waited ${sec} seconds`);
        }, sec * 1000);
    })
        .then((data) => {
            console.log(data);
        })
};

wait(2);
wait(5);

//  Create a function that accepts a github username, and returns a promise
//  that resolves with the date of the last commit that user made.
//  Reference the github api documentation to achieve this.

let headers = {'Authorization': `token ${githubKey}`};

const github = function(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: headers})
        .then((response) => {
            console.log(response.json());
        })


};

github('mjtillman');