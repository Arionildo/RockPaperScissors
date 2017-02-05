/*
 * This script manages the screens of the game. 
 */
"use strict";

function mainScreen() {
	reset();
	document.getElementById("screen").innerHTML = getMainScreenButtons();
}

function gameModeScreen(gameMode) {
	var progressButton = "";

	if (gameMode != 0) {
		switch(gameMode) {
			case 1:
				maxPlays = 1;
				break;
			case 2:
				maxPlays = 3;
				break;
			case 3:
				maxPlays = 5;
				break;
			default:
				console.log('Error: Invalid Mode.');
		}
	}

	if (maxPlays != 0) {
		progressButton = getMatchProgress(currentPlay, maxPlays);
	}

	document.getElementById("screen").innerHTML = progressButton
												+ getOptions()
												+ getMainScreenButton();
}

function matchResultScreen(matchScreenButtons) {
	document.getElementById("screen").innerHTML = matchScreenButtons
												+ getMainScreenButton();
}