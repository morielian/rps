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
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const gameWinner = decideWinner(playerChoice, computerChoice)
    showWinner(gameWinner, computerChoice);
};

function getComputerChoice(){
    const random = Math.random();
    if(random <= 0.34 ){
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

function showWinner(winner, computerChoice){
    if ( winner === 'Player') {
        modal.style.display = 'inline-block'
        scoreboard.player++;
        result.innerHTML = `
        <h1> You Win! Computer chose ${computerChoice}</h1>`
    } else if (winner === 'Computer'){
      modal.style.display = 'inline-block'
        scoreboard.computer++;
        result.innerHTML = `
        <h1> You Lose! Computer chose ${computerChoice}</h1>`
    } else {
      modal.style.display = 'inline-block'
        result.innerHTML = `
        <h1> Tie game! Computer chose ${computerChoice}</h1>`
    }
    score.innerHTML = `<p> Player: ${scoreboard.player} </p>
                       <p> Computer: ${scoreboard.computer} </p>`
}

function restartGame(){
  scoreboard.player = 0
  scoreboard.computer = 0
  score.innerHTML = `
  <p> Player: 0 </p>
  <p> Computer: 0 </p>
  `
  modal.style.display = "none"
  restart.style.display = "none"
}


restart.addEventListener('click', restartGame)
choices.forEach(choice => choice.addEventListener('click', play))