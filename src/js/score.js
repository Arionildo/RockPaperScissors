/*
 * This script handles the game score. 
 */
"use strict";

function getMatchWinner(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		playerScore.draw++;
		computerScore.draw++;

		return drawText();
	} else if ((playerChoice == 1 && computerChoice == 3)
			|| (playerChoice == 2 && computerChoice == 1)
			|| (playerChoice == 3 && computerChoice == 2)) {
		playerScore.win++;
		computerScore.lose++;

		return playerWinText();
	} else {
		playerScore.lose++;
		computerScore.win++;

		return computerWinText();
	}
}