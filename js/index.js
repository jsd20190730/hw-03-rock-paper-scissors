

$(function(){

  // create a function to get botChoice
  function getBotChoice() {
    // generate a random number between 0 (inclusive) and 3 (exclusive)
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock'
    } else if (randomNumber === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  // declare initial scores for user and bot
  let userScore = 0
  let botScore = 0

  // create a function that returns the wording for displaying the winner of the game (3 rounds)
  function winnerMessage(winner) {
    return `${winner} won the game!`
  }

	// create click event for the three buttons
  $('#play button').click((event) => {

    // declare variables for user and bot choices
		const userChoice = $(event.currentTarget).text().toLowerCase()
    const botChoice = getBotChoice()

		// display user and bot choices for this round
    $('#choices').text(`You played ${userChoice}. The bot played ${botChoice}.`)

    // display winner for this round
    // increment winner's score by 1
    if (userChoice === botChoice) {
      $('#winner').text('You tied!')

    } else if (userChoice === 'rock' && botChoice === 'paper') {
      $('#winner').text('The bot won!')
      botScore = botScore + 1

    } else if (userChoice === 'rock' && botChoice === 'scissors') {
      $('#winner').text('You won!')
      userScore = userScore + 1

    } else if (userChoice === 'paper' && botChoice === 'rock') {
      $('#winner').text('You won!')
      userScore = userScore + 1

    } else if (userChoice === 'paper' && botChoice === 'scissors') {
      $('#winner').text('The bot won!')
      botScore = botScore + 1

    } else if (userChoice === 'scissors' && botChoice === 'rock') {
      $('#winner').text('The bot won!')
      botScore = botScore + 1

    } else if (userChoice === 'scissors' && botChoice === 'paper') {
      $('#winner').text('You won!')
      userScore = userScore + 1

    }

    // update scoreboard
    $('#userScore').text(userScore)
    $('#botScore').text(botScore)

    // display winner when either user or bot hits 3 points
    if (userScore === 3) {
      $('#play').hide()
      $('#displayWinner').show()
      $('#displayWinner h2').text(winnerMessage('You'))
    } else if (botScore === 3) {
      $('#play').hide()
      $('#displayWinner').show()
      $('#displayWinner h2').text(winnerMessage('The bot'))
    }


  })

  // create click event for replay button
  $('#replay').click(() => {

    // unhide game and hide winner message
    $('#play').show()
    $('#displayWinner').hide()

    // clear out messaging from last game
    $('#winner').text('')
    $('#choices').text('')

    // reset scores
    userScore = 0
    botScore = 0

    // display the reset scores
    $('#userScore').text(userScore)
    $('#botScore').text(botScore)

  })

})








