/*
 * This script manages the screens and the player's commands. 
 */
"use strict";

var playerChoice = 0;				//Available values: 1 - Rock; 2 - Paper; 3 - Scissors.

function setChoice(choice) {
	switch(choice) {
		case "rock":
			playerChoice = 1;
			break;
		case "paper":
			playerChoice = 2;
			break;
		case "scissors":
			playerChoice = 3;
			break;
		default:
			console.log('Error: Invalid Choice.');
	}
}

function mainScreen() {
	document.getElementById("screen").innerHTML = getGameButton();
}

function game() {
	document.getElementById("screen").innerHTML = getOptions()
												+ getMainScreenButton();
}