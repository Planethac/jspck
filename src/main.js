// App Goals:
// Make a WORKING Pacakge controle System
//
// TODO Start with The Project
// ! Dont ask Other Peopel The help You, You not that bad at coding my friend!
// as motivation take this: https://music.apple.com/library/playlist/p.oOzAaQPHE4J4qJA

const fs = require('fs');

let pckpth = "";
let pclang = "";

const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout 
});

// Get Path For The Folder
function getpth() {
    readline.question('Folder path: ', path => {
        pckpth = `./${path}`;
        readline.close();
    });
}

// Language Selector
function sllang() {
    console.log("[1] JS");
    console.log("[2] NODE JS");
    console.log("[3] PYTHON");    
    readline.question('Select Language: ', lang => {
        pclang = lang;
        readline.close();
    })
}

// Creates The Folder
function makdir() {
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
}

// Make Files and Folders for JS Package Type
function jsdep() {
    fs.access(pckpth + "/src", (error) => {
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
    fs.writeFile(pckpth + "/src/main.js", "", function (err) {
        if (err) throw err;
        console.log('Created main.js !')
    })
}