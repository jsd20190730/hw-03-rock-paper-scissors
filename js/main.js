$(function () {
  //generate random number
  function randomNumber() {
    return Math.floor(Math.random() * 3)
  }

    //computer choice
  function computerChooses() {
    let rando = randomNumber()
    if (rando === 0) {
      return 'rock'
    } else if (rando === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

    //user chooses rock
  $('#rock').click(() => {
    let humanChoice = 'rock'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      $('#status').text('tie')
    } else if (computerChoice === 'paper') {
      $('#computerScore').text(parseInt($('#computerScore').text()) + 1)
      $('#status').text('You chose rock, the computer chose paper. You got stuffed on :(')
    } else if (computerChoice === 'scissors') {
      $('#humanScore').text(parseInt($('#humanScore').text()) + 1)
      $('#status').text('You chose rock, the computer chose scissors. You crushed the competition :)')
    }
  })
    //user chooses paper
  $('#paper').click(() => {
    let humanChoice = 'paper'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      $('#status').text('tie')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      $('#humanScore').text(parseInt($('#humanScore').text()) + 1)
      $('#status').text('You chose paper, the computer chose rock. You got it covered :)')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      $('#computerScore').text(parseInt($('#computerScore').text()) + 1)
      $('#status').text('You chose paper, the computer chose scissors. You just got diced :(')
    }
  })
    //user chooses scissors
  $('#scissors').click(() => {
    let humanChoice = 'scissors'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      $('#status').text('tie')
    } else if (computerChoice === 'rock') {
      $('#computerScore').text(parseInt($('#computerScore').text()) + 1)
      $('#status').text('You chose scissors, the computer chose rock. Absolutely decimated :(')
    } else if (computerChoice === 'paper') {
      $('#humanScore').text(parseInt($('#humanScore').text()) + 1)
      $('#status').text('You chose scissors, the computer chose paper. Way to cut up the competition :)')
    }
  })

})
