

$(function(){

	// create click event for any of the three buttons
    $('button').click((event) => {

    	// create variable for user choice
		const $userChoice = $(event.currentTarget).text().toLowerCase()

		// create variable for bot choice
		const botChoice = () => {
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

		// display user and bot choices for this round
        $('#choices').text(`You played ${$userChoice}. The bot played ${botChoice()}.`)

	    // increment the winner's score
    	if ($userChoice == 'rock') {
       		if (botChoice() == 'paper') {
       			$('#winner').text(`user played rock, bot played paper`)
       		} else if (botChoice() == 'scissors') {
       			$('#winner').text(`user played rock, bot played scissors`)
       		} else {
       			$('#winner').text(`user played rock, bot played rock`)
       		}
       	} else if ($userChoice == 'paper') {
       		if (botChoice() == 'rock') {
       			$('#winner').text(`user played paper, bot played rock`)
       		} else if (botChoice() == 'scissors') {
       			$('#winner').text(`user played paper, bot played scissors`)
       		} else {
       			$('#winner').text(`user played paper, bot played paper`)
       		}
       	} else if ($userChoice == 'scissors') {
       		if (botChoice() == 'rock') {
       			$('#winner').text(`user played scissors, bot played rock`)
       		} else if (botChoice() == 'paper') {
       			$('#winner').text(`user played scissors, bot played paper`)
       		} else {
       			$('#winner').text(`user played scissors, bot played scissors`)
       		}
       	}

        //$('#winner').text(`userScore: ${userScore}; botScore: ${botScore}`)


    })

})








