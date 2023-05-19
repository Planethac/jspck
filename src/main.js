// Ver 0.0.2
// Import Shit
const fs = require('fs');

// Define Variables
let pckpth = "";
let pckpthfs = "";
let pclang = "";

// Define Readline Fuctions
// It exsits twice because im stupid and was under time presure and that just worked will be fixed
const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout 
});

// Executer
getpth();

// Get Path For The Folder
function getpth() {
    readline.question('Folder path: ', path => {
        pckpth = `./${path}`;
        makdir();
    });
}

// Language Selector
function sllang() {
    console.log("[1] JS");
    console.log("[2] HTML");
    console.log("[3] PYTHON");    
    readline.question('Select Language: ', lang => {
        pclang = `${lang}`;
        sllangdec();
        readline.close();
    });
}

// Creates The Folder
function makdir() {
    fs.access(pckpth, (error) => {
        if (error) {
            fs.mkdir(pckpth , (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Succsesfully created ${pckpth} !`);
                }
            });
        } else {
            console.log(`Directory ${pckpth} already exists !`);
        }
    })
    setTimeout(sllang, 1000);
}

// Make Files and Folders for JS Package Type
function jsdep() {
    fs.access(pckpthfs = `${pckpth}/src`, (error) => {
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
    });
}

// Makes Files and Folders for HTML Package Type
function htmldep() {
    fs.access(pckpthfs = `${pckpth}/html`, (error) => {
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
    });

    fs.access(pckpthfs = `${pckpth}/js`, (error) => {
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
    });

    fs.access(pckpthfs = `${pckpth}/css`, (error) => {
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
    });
}

function pythondep() {
    fs.access(pckpthfs = `${pckpth}/src`, (error) => {
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
    });
    fs.access(pckpthfs = `${pckpth}/pymod`, (error) => {
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
    });
}

// Runs The correct dep function
function sllangdec() {
    if (pclang == "1") {
        jsdep();
    }
    if (pclang == "2") {
        htmldep();
    }
    if (pclang == "3") {
        pythondep();
    }
}