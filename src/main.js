// App Goals:
// Make a WORKING Pacakge controle System
//
// TODO Start with The Project
// ! Dont ask Other Peopel The help You, You not that bad at coding my friend!
// as motivation take this: https://music.apple.com/library/playlist/p.oOzAaQPHE4J4qJA

const fs = require('fs');

let pckpth = ".";

const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout 
});

readline.question('Folder path: ', path => {
    pckpth = `./${path}`;
    readline.close();
});

fs.access(pckpth, (error) => {
    if (error) {
        fs.mkdir(pckpth , (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Succefuly created ${pckpth} !`);
            }
        });
    } else {
        console.log(`Directory ${pckpth} already exists !`)
    }
})