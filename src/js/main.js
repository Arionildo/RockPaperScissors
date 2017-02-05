/*
 * This script manages the players' commands. 
 */
"use strict";

var playerChoice = 0;						//Available values: 1 - Rock; 2 - Paper; 3 - Scissors.
var computerChoice = 0;

var playerScore = new Object();
var computerScore = new Object();

var currentPlay = 1;
var maxPlays = 0;

function setPlayerChoice(choice) {
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

	if (playerChoice != 0) {
		play();
	}
}

function getComputerChoice() {
	var choice = Math.random();

	if (choice > 0.66) {
		computerChoice = 1;
	} else if (choice > 0.33) {
		computerChoice = 2;
	} else {
		computerChoice = 3;
	}

	return computerChoice;
}

function play() {
	var matchScreenButtons = getChoiceImage(playerChoice)
						+ getChoiceImage(getComputerChoice());

	matchScreenButtons += getMatchWinner(playerChoice, computerChoice);
	matchScreenButtons += getScoreText();
	currentPlay++;

	if (currentPlay <= maxPlays) {
		matchScreenButtons += getNextButton();
	}

	matchResultScreen(matchScreenButtons);
}

function reset() {
	playerScore = {win: 0, draw: 0, lose: 0};
	computerScore = {win: 0, draw: 0, lose: 0};
	currentPlay = 1;
}