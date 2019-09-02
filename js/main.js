
//initialize scores
let scoreHuman = 0
let scoreBot = 0

//click events

$('#rock').click(() => {
  playGame('rock')
})

$('#paper').click(() => {
  playGame('paper')
})

$('#scissors').click(() => {
  playGame('scissors')
})

// use randomizer
function getBotSelection() {
  const rand = Math.floor(Math.random() * 3)
  if (rand === 0) {
    return 'rock'
  }
  if (rand === 1) {
    return 'paper'
  }
  if (rand === 2) {
    return 'scissors'
  }
}

// main
function playGame(humanSelection) {

humanSelectionDisplay = humanSelection.toString()
botSelection = getBotSelection()

$('#status').html("<p>You played <strong>"+humanSelectionDisplay+"</strong>.The bot played <strong>"+botSelection+"</strong>.</p>")

if(humanSelection == botSelection) {
  $('#status').append("<p>You tied. :/</p>")
} else if (humanSelection == 'rock' && botSelection == 'paper') {
  $('#status').append("<p>You win. :)</p>")
  scoreHuman += 1
} else if (humanSelection == 'scissors' && botSelection == 'paper') {
  $('#status').append("<p>You win. :)</p>")
  scoreHuman += 1
} else if (humanSelection == 'paper' && botSelection == 'rock') {
  $('#status').append("<p>You win. :)</p>")
  scoreHuman += 1
} else {
  $('#status').append("<p>You lose. :(</p>")
  scoreBot += 1
}

$('#humanScore').html(scoreHuman)
$('#computerScore').html(scoreBot)

}
