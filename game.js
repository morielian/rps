const choices = document.querySelectorAll('img');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

function play(e){
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const gameWinner = decideWinner(playerChoice, computerChoice)
    console.log(playerChoice,computerChoice,gameWinner)
};

function getComputerChoice(){
    const random = Math.random();
    if(random < 0.34 ){
        return 'rock'
    } else if (random <= 0.67){
        return 'paper'
    } else {
        return 'scissors' 
    }
}

function decideWinner(player, computer){
    if (player === computer){
        return ('Tie')
      } else if ( computer === 'rock' && player === 'scissors' ){
        return ('Computer')
      } else if (computer === 'paper' && player === 'rock'){
        return ('Computer')
      } else if ( computer === 'scissors' && player === 'paper'){
        return ('Computer')
      } else {
        return ('Player')
      }
};

choices.forEach(choice => choice.addEventListener('click', play))