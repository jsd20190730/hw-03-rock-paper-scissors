$(function () {

  // let's create function for botChoice which is random number
  // and tie that number to rock, scissors, or paper
  function botChoice() {
    let random = Math.floor(Math.random()*3 + 1)

    if (random == 1) {
      return 'rock'
    } else if(random == 2) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }


  // let's create var for humanChoice & compChoice
  let compChoice
  let humanChoice

  // let's set scores to initial value
  let computerScore = 0
  let humanScore = 0

  // fx for when humanChoice is rock
  $('#rock').click(() => {
      compChoice = botChoice()
      let humanChoice = 'rock'
      console.log(compChoice)
      console.log(humanChoice)

      $('#status').text(`You played ${humanChoice}. The Bot played ${compChoice}.`)

      if (compChoice === humanChoice){
        $('#status2').text('You tied.')
      } else if (compChoice === 'paper'){
        $('#status2').text('You lose.')
        computerScore = computerScore + 1
        $('#computerScore').text(computerScore)
      } else {
        $('#status2').text('You win.')
        humanScore = humanScore + 1
        $('#humanScore').text(humanScore)
      }

  })

  // fx for when humanChoice is paper
  $('#paper').click(() => {
      compChoice = botChoice()
      let humanChoice = 'paper'
      console.log(compChoice)
      console.log(humanChoice)

      $('#status').text(`You played ${humanChoice}. The Bot played ${compChoice}.`)

      if (compChoice === humanChoice){
        $('#status2').text('You tied.')
      } else if (compChoice === 'scissors'){
        $('#status2').text('You lose.')
        computerScore = computerScore + 1
        $('#computerScore').text(computerScore)
      } else {
        $('#status2').text('You win.')
        humanScore = humanScore + 1
        $('#humanScore').text(humanScore)
      }

  })

  // fx for when humanChoice is scissors
  $('#scissors').click(() => {
      compChoice = botChoice()
      let humanChoice = 'scissors'
      console.log(compChoice)
      console.log(humanChoice)

      $('#status').text(`You played ${humanChoice}. The Bot played ${compChoice}.`)

      if (compChoice === humanChoice){
        $('#status2').text('You tied.')
      } else if (compChoice === 'rock'){
        $('#status2').text('You lose.')
        computerScore = computerScore + 1
        $('#computerScore').text(computerScore)
      } else {
        $('#status2').text('You win.')
        humanScore = humanScore + 1
        $('#humanScore').text(humanScore)
      }
    
  })


})
