/*
 * This script helps to keep main.js clean.
 */

"use strict";

function getChoiceImage(choice) {
	var image;

	switch(choice) {
		case 1:
			image = getRockImage();
			break;
		case 2:
			image = getPaperImage();
			break;
		case 3:
			image = getScissorsImage();
			break;
		default:
			console.log('Error: Invalid Choice.');
	}

	if (image != null) {
		return image;
	}
}

function getRockButton() {
	return '<img onclick="setPlayerChoice(\'rock\')" src="../../assets/img/rock.png">';
}

function getPaperButton() {
	return '<img onclick="setPlayerChoice(\'paper\')" src="../../assets/img/paper.png">';
}

function getScissorsButton() {
	return '<img onclick="setPlayerChoice(\'scissors\')" src="../../assets/img/scissors.png">';
}

function getOptions() {
	return getRockButton() + getPaperButton() + getScissorsButton();
}

function getRockImage() {
	return '<img src="../../assets/img/rock.png">';
}

function getPaperImage() {
	return '<img src="../../assets/img/paper.png">';
}

function getScissorsImage() {
	return '<img src="../../assets/img/scissors.png">';
}

function getMainScreenButton() {
	return '<button onclick="mainScreen();">Ir para a tela inicial</button>';
}

function getGameButton() {
	return '<button onclick="gameScreen();">Jogar</button>';
}