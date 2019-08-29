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

    //evaluate winner for rock choice
  $('#rock').click(() => {
    let humanChoice = 'rock'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      console.log('tie')
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log('playerB wins')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      console.log('playerB wins')
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('playerA wins')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log('playerB wins')
    }
  })
      //evaluate winner for paper choice
  $('#paper').click(() => {
    let humanChoice = 'paper'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      console.log('tie')
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log('playerB wins')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      console.log('playerB wins')
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('playerA wins')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log('playerB wins')
    }
  })
      //evaluate winner for scissors choice
  $('#scissors').click(() => {
    let humanChoice = 'scissors'
    let computerChoice = computerChooses()
    if (humanChoice === computerChoice) {
      console.log('tie')
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log('playerB wins')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      console.log('playerB wins')
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('playerA wins')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('playerA wins')
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log('playerB wins')
    }
  })
  
})
