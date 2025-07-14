

const banking = require('./banking')
const ui = require('./ui')

function handleChoise(choice){
    switch(choice){
        case 1:
            // const blance = banking.getBalance();
            // ui.displayBalance(balance);
            handleBalance();
            break;
            default:
            break;
    }
}

function handleBalance(){
    const balance = banking.getBalance();
    ui.displayBalance(balance);
}

function run(){
    // loop
    ui.displayMenu();
    const choice = ui.getChoice();
    handleChoise(choice);
}

run();