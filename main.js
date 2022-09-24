// This is going to be the main area that we write the rock, paper, scissors function

/* pseudocode area - 

start best of 5 rps game

create player and create computer character

if player or pc has not won 3 games, keep playing

keep playing - 

    selection either rock, paper, or scissors

    computer randomly selects random rock, paper, or scissors

    player makes selection - either rock, paper or scissors

    else print, sorry you must select either Rock, Paper, or scissors



selection results

    if selection is Rock, it is greater than  scissors, and less than paper

    else if selection is Paper, it is greater than rock, and less than scissors

    else if selection is Scissors, it is greater than paper, and less than rock

    


compare selections

    If player selection is greater than computer selection, then player wins round

    else the computer wins round

End game

    if player wins 3 rounds, then players wins - GAME OVER

    else if computer wins 3 round, then computer wins - GAME OVER

    else GAME continues until one player wins three round

*/

console.log(" ---------- Let's Play Rock! Paper! Scissors! ---------- ");

console.log("The best of 5 rounds wins the game! Good Luck!")


console.log("Let's play a round!");


// add in computer selection to put into game

// shoot function utilizes the Math.random feature by selecting a random integer within the array index!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let playerSelection;
let computerSelection; 
let rounds = [];
let pointPlayer = [];
let pointComp = [];
// function for shooting as computer using rpsSelect



//this is where the game loop should go

for (let i = 0; i <= 100; i++) {
    // console.log(game());
    game();
    
   
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
// function game() {}

//Game loop works~!

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

function shoot() {
    const rpsSelect  = ['ROCK', 'PAPER', 'SCISSORS'] ;

    min = Math.ceil(2);

    max = Math.floor(0);

    return rpsSelect[(Math.floor(Math.random() * (max - min) + min))];
}


function getComputerChoice() {
    return shoot();
}

// game();




    