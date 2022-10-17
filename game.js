const choices = ['rock','paper', 'scissors'];

function getComputerChoice(){
  return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(playerSelection, computerSelection){
  playerSelection = prompt('Choose one : rock, paper, scissors');
  computerSelection = getComputerChoice();
  if (playerSelection.toLowerCase() === computerSelection){
    return ('Tie Game!')
  } else if ( computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors' ){
    return ('Computer wins!')
  } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock'){
    return ('Computer wins!')
  } else if ( computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper'){
    return ('Computer wins!')
  } else {
    return ('Player wins!')
  }
};

function game() {
  let playerCounter = 0;
  let computerCounter = 0;
 while (playerCounter < 5 && computerCounter < 5) {
  if (playRound() === 'Player wins!'){
    playerCounter++;
    console.log('Player won this round!')
  } else if (playRound() === 'Computer wins!'){
    computerCounter++;
    console.log('Computer won this round!')
  } else{
    console.log('Tie round!')
  }
 }
 console.log(`The final score is Player: ${playerCounter} Computer: ${computerCounter} `)
};

game()