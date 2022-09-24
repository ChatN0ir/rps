// Rock Paper Scissors Game - Best of 5

// Intro

// shoot function utilizes the Math.random feature by selecting a random integer within the array index!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


console.log(" ---------- Let's Play Rock! Paper! Scissors! ---------- ");

console.log("The best of 5 rounds wins the game! Good Luck!")

console.log("Let's play a round!");

let playerSelection;
let computerSelection; 
let rounds = [];
let pointPlayer = [];
let pointComp = [];


//this is where the game loop should go
// if its at the top is performs first!

for (let i = 0; i <= 100; i++) {
    //game(); - had game function here, but it isn't necessary for the loop. 
    // just adds 1 unnecessary round
    
   
    if (pointPlayer.length === 3) {
        console.log('Player Wins!');
        break;
    } else if (pointComp.length === 3) {
        console.log('Computer Wins!');
        break;
    } else {
        game();
        
    }
}

console.log(`---------- GAME OVER ---------- `);
console.log(`Round Breakdown: ${rounds}`)

//Game loop works~!


// function game() {} - define the game function to play 1 round

function game() {
    playerSelection  = prompt("Enter you selection here: ").toUpperCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
            function playRound(playerSelection, computerSelection) {
                
                if (playerSelection === computerSelection) {
                    return result = 'Looks like it was a tie!';
                } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
                    rounds.push('Player');
                    pointPlayer.push(1);
                    return result = 'You picked paper. You win!';
                } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
                    rounds.push('Player');
                    pointPlayer.push(1);
                    return result = 'You picked scissors. You win!';
                } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
                    rounds.push('Player');
                    pointPlayer.push(1);
                    return result = 'You picked rock. You win!';
                } else {
                    rounds.push('Computer');
                    pointComp.push(1);
                    return result = `Darn. You pick ${playerSelection}, but the computer picked ${computerSelection}. You lose!`;
                }
                
            }
            console.log(playRound(playerSelection, computerSelection)); // this is where playRound() should go
        } else if (playerSelection.toUpperCase() !== "ROCK" || playerSelection.toUpperCase() !== "PAPER" || playerSelection.toUpperCase() !== "SCISSORS") {
            game();
        } else {
            console.log("You have not entered the game")
    }
}

// shoot() determines the computer's pick
function shoot() {
    const rpsSelect  = ['ROCK', 'PAPER', 'SCISSORS'] ;

    min = Math.ceil(2);

    max = Math.floor(0);

    return rpsSelect[(Math.floor(Math.random() * (max - min) + min))];
}

// pass shoot() through getComputerChoice() to return a defined value for computerSelection

function getComputerChoice() {
    return shoot();
}

// game();

// That's it!




    