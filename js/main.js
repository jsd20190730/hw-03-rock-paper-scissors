// # Homework #3: Rock, Paper, Scissors
//
// To complete this assignment, do the following:
//
// 1. Fork this repo
// 2. Clone your forked repo and in terminal, open the provided project files.
// 3. Ensure the application meets the base requirements
// 4. Open Pull Request (PR) against this repo
//
// ## Overview
//
// In this homework assignment, you will be tasked with completing the functionality of a Rock, Paper, Scissors game.
//
// ## Instructions
//
//   * Review the gif below to understand how the app is expected to work
//
//   * Plan out your approach **before** coding (using pseudocode, white boarding, etc.)
//
//   * Use `console.log()` to print out values to console to help ensure you're on the right path
//
// ## Requirements
//
//   * The application should work as depicted in the gif image below
//
//     * The score should accurately reflect the result of the game based on the user's choice and the bot's choice
//
//     * The messages depicted in the gif below should also be replicated in your applications
//
//   * Ensure your code adheres to the DRY principle (Don't Repeat Yourself)
//
//   * Code must be properly indented
//
//   * Use jQuery for any DOM manipulation
//
//   * In the finished version of the application, the bot choice should be **random**
//
// ## Bonus Requirements (Optional)
//
// **Note**: All of following requirements are optional. You have complete control over how you choose to implement the bonus requirements below. Take this as an opportunity to be creative.
//
// * **Bonus Requirement #1**: Add logic that declares the first person or bot to achieve a score of 10 as the winner of that **round**
//
//   * There should be some visual indication or message that identifies the winner of a **round**
//
//
// * **Bonus Requirement #2**: Add logic that declares the first person or bot to win 2 rounds the winner of the **game**
//
//   * There should be some visual indication or message that identifies the winner of a **game**
//
//
// * **Bonus Requirement #3**: Add logic that gives the person or bot 2 bonus points for winning 3 **hands** in a row.
//
//   * A message should be displayed whenever a user / bot has earned a bonus
//
//   * For example: In a normal scenario if the user won 3 hands in a row, they would have 3 points
//
//   * After implementing this bonus requirement, the user / bot would receive an additional 2 points as a reward for winning 3 hands in a row:
//
//   * See the hypothetical scenario below:
//
//   | Hand  | User Choice | Bot Choice | Winner | Score |
//   |:-----|:-----|:-----|:-----|:---|
//   | #1 | rock | paper| bot | user: 0, bot: 1 |
//   | #2 | scissors | paper| user | user: 1, bot: 1 |
//   | #3 | paper | rock| user | user: 2, bot: 1 |
//   | #4 | rock | scissors| user | user: 5 (3 + 2 bonus points), bot: 1 |
// make a game that keeps score of players winning rounds
//make computer click random
// display message for winner of rounds
// make a message for overall Winner
$( document ).ready(function() {

  let humanScore = 0

  let computerScore = 0



    function makeComputerChoice(){

      let computerChoice = ""

      let randomPick = Math.random()
      //gives you a random float between 0 and 1
      //made three parameters that equal rock,paper, or scissors
      if (randomPick < .33) {

        computerChoice = 'rock'
        $('.compMessage').text('computer picked rock')
      } else if (randomPick < .66) {

        computerChoice = 'paper'
        $('.compMessage').text('computer picked paper')
      } else {

        computerChoice = 'scissors'
        $('.compMessage').text('computer picked scissors')
      }
      return computerChoice
  }
    function makeHumanChoice(humanChoice) {
      //computerChoice equals the function for makeComputerChoice
      let computerChoice = makeComputerChoice()

      if (computerChoice === humanChoice) {
        
        $('.winningMessage').text('you tied')

      } else if (computerChoice === 'rock' && humanChoice === 'paper') {

        $('.winningMessage').text('you won')
        humanScore = humanScore + 1
        displayComputerScore()

      } else if (humanChoice === 'rock' && computerChoice === 'paper') {

        $('.winningMessage').text('the bot won')
        computerScore = computerScore + 1
        displayComputerScore()

      } else if (humanChoice === 'scissors' && computerChoice === 'paper') {

        $('.winningMessage').text('you won')
        humanScore = humanScore + 1
        displayComputerScore()
      } else if (humanChoice === 'paper' && computerChoice === 'scissors') {

        $('.winningMessage').text('the bot won')
        computerScore = computerScore + 1
        displayComputerScore()

      } else if (humanChoice === 'rock' && computerChoice === 'scissors'){

        $('.winningMessage').text('you won')
        humanScore = humanScore + 1
        displayComputerScore()
      } else {

        $('.winningMessage').text("the bot won")
        computerScore = computerScore + 1
        displayComputerScore()


      }
    }
      //make click functions for each scenario that the user makes

      $('#rock').click(() => {
        $('.message').text('you picked rock')
        makeHumanChoice('rock')
        displayHumanScore()
      })
      $('#paper').click(() => {
        $('.message').text('you picked paper')
        makeHumanChoice('paper')
        displayHumanScore()
      })
      $('#scissors').click(() => {
        $('.message').text('you picked scissors')
        makeHumanChoice('scissors')
        displayHumanScore()
      })
      //make functions on how to displays the scores
      function displayHumanScore(){

        $('#humanScore').text(humanScore)


      }
      function displayComputerScore() {

        $('#computerScore').text(computerScore)
      }




    })
