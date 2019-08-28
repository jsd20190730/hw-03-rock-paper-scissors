let humanScore = 0;
let computerScore = 0;

$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {

  computerPlay = getComputerPlay();

  $('#status').html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");

  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You tied. :|</p>");
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore+=1;
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You win! :)</p>");
      humanScore+=1;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You win! :)</p>");
      humanScore+=1;
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You tied. :|</p>");
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore+=1;
    }
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore+=1;
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You win! :)</p>");
      humanScore+=1;
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You tied. :|</p>");
    }
  }

  $('#humanScore').html(humanScore);
  $('#computerScore').html(computerScore);

}

function getComputerPlay() {
  const computerChoice = Math.floor(Math.random() * 3)
  if (computerChoice === 0) {
    return 'rock'
  }
  if (computerChoice === 1) {
    return 'paper'
  }
  if (computerChoice === 2) {
    return 'scissors'
  }
}
