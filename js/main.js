$(function () {

  let computerChoice
  let userChoice
  let computerScore = 0
  let userScore = 0
  let winOrLose


  $('#rock').click(() => {
    userChoice = 'rock'
    generateComputerChoice()
    compareChoices()
  })

  $('#paper').click(() => {
    userChoice = 'paper'
    generateComputerChoice()
    compareChoices()
  })

  $('#scissors').click(() => {
    userChoice = 'scissors'
    generateComputerChoice()
    compareChoices()
  })

  function compareChoices () {
    if (userChoice === computerChoice) {
      winOrLose = '<p>You tied.</p>'

    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      computerScore+=1
      winOrLose = '<p>You Lose.</p>'

    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      userScore+=1
      winOrLose = '<p>You Win!</p>'

    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      userScore+=1
      winOrLose = '<p>You Win!</p>'

    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      computerScore+=1
      winOrLose = '<p>You Lose.</p>'

    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      computerScore+=1
      winOrLose = '<p>You Lose.</p>'

    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      userScore+=1
      winOrLose = '<p>You Win!</p>'

    } else {
      console.log('error comparing choices')
    }

    updateScore()
    displayWinner(winOrLose)
    displayChoice()

  }


  function generateComputerChoice () {
    let randomChoice = Math.floor(Math.random()*3)
    if (randomChoice === 0) {
      computerChoice = 'rock'
    } else if (randomChoice === 1) {
      computerChoice = 'paper'
    } else if (randomChoice === 2) {
      computerChoice = 'scissors'
    } else {
      console.log('error computer choice')
    }
  }


  function updateScore () {
    $('#humanScore').text(userScore)
    $('#computerScore').text(computerScore)
  }

  function displayChoice() {
    $('#choices').html(`You picked <strong>${userChoice}</strong>. The computer picked <strong>${computerChoice}</strong>.`)
  }

  function displayWinner (winner) {
    $('#status').html(winner)
  }



})
