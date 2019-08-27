$(function () {
  function randomNumberBetweenZeroThree() {
     return Math.floor(Math.random() * 3)
  }
  // let computerChoice


  $('#rock').click(() => {
    let humanChoice = 'rock'
    console.log(humanChoice)
    console.log(randomNumberBetweenZeroThree())
  })
  $('#paper').click(() => {
    let humanChoice = 'paper'
    console.log(humanChoice)
  })
  $('#scissors').click(() => {
    let humanChoice = 'scissors'
    console.log(humanChoice)
  })

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
