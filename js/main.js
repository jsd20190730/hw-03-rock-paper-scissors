$(function () {

  let botChoice = ""
  let userChoice = ""
  let userScore = 0
  let botScore = 0
  let round = 1

  $('#rounds').text(`Round: ${round}`)

  function botPlay(){
    let rand = Math.floor((Math.random() * 3) + 1)
    switch (rand){
      case (1):
        return "Rock"
      case (2):
        return "Paper"
      case (3):
        return "Scissors"
    }
  }

  $('#rock').click(() => {
    userChoice = "Rock"
    botChoice = botPlay()
    playGame(userChoice,botChoice)
    console.log(userScore)
    console.log(botScore)
    if(checkRoundWinner(userScore, botScore)){
      userScore = 0
      botScore = 0
    }
  })

  $('#paper').click(() => {
    userChoice = "Paper"
    botChoice = botPlay()
    playGame(userChoice,botChoice)
    console.log(userScore)
    console.log(botScore)
    if(checkRoundWinner(userScore, botScore)){
      userScore = 0
      botScore = 0
    }
  })

  $('#scissors').click(() => {
    userChoice = "Scissors"
    botChoice = botPlay()
    playGame(userChoice,botChoice)
    console.log(userScore)
    console.log(botScore)
    if(checkRoundWinner(userScore, botScore)){
      userScore = 0
      botScore = 0
    }
  })

  function playGame(playerAChoice, playerBChoice){
    if(playerAChoice === playerBChoice){
      updateStatus(userChoice, botChoice, "tie")
      return
      //return "tie"
    }
    else if((playerAChoice == "Paper" && playerBChoice == "Rock") ||
    (playerAChoice == "Scissors" && playerBChoice == "Paper") ||
    (playerAChoice == "Rock" && playerBChoice == "Scissors")){
      userScore = userScore + 1
      updateStatus(userChoice, botChoice, "User")
      //return "User"
    }
    else{
      botScore = botScore + 1
      updateStatus(userChoice, botChoice, "Bot")
      //return "Bot"
    }
    updateScoreboard(userScore, botScore)
    return
  }

  //updates the scoreboard with new scores for user and bot
  //parameters are input as integers
  function updateScoreboard(user, bot){
    let human = user.toString()
    let computer = bot.toString()
    $("#humanScore").text(human)
    $("#computerScore").text(computer)
  }

  function updateStatus(userOption, botOption, outcome){
    $("#status").text(`You played ${userOption}. The bot played ${botOption}`)
    switch (outcome){
      case "tie":
        $("#outcome").text(`You tied`)
        break
      case "User":
        $("#outcome").text(`You win! :)`)
        break
      case "Bot":
        $("#outcome").text(`You lose :(`)
        break
    }
  }

  function checkRoundWinner(userScore, botScore){
    if(userScore == 10){
      $('#roundWinner').text(`Human wins Round ${round}`)
      $('#rounds').text(`Current Round: ${round+1}`)
      round = round + 1
      return true
    }
    if (botScore == 10){
      $('#roundWinner').text(`Bot wins Round ${round}`)
      $('#rounds').text(`Current Round: ${round+1}`)
      round = round + 1
      return true
    }
  }




})
