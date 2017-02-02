/*
 * This script manages the screens of the game. 
 */
"use strict";

function mainScreen() {
	document.getElementById("screen").innerHTML = getGameButton();
}

function gameScreen() {
	document.getElementById("screen").innerHTML = getOptions()
												+ getMainScreenButton();
}