const prompt = require('prompt-sync')();


function displayMenu(){
    console.log('====banking system=====');
    console.log('1) check balance');
    console.log('2) deposit');
    console.log('3) withdraw');
    console.log('4) exit');
}

function getMenuChoice(){
    // loop until input num between 1-4
    const input = prompt("Choose option (1-4): ");
    return input;
}

function displayBalance(balance){
    comsole.log(balance)
}


MediaSourceHandle.exports ={
displayMenu,displayBalance
}