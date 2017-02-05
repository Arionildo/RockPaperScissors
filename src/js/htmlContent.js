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

function getMatchProgress(currentPlay, maxPlays) {
	return '<p>Jogadas: '+ currentPlay +' / '+ maxPlays +'</p>';
}

function getScoreText() {
	return '<p>Seu Placar (Vitórias/Empates/Derrotas): '+ playerScore.win +' / '+ playerScore.draw +' / '+ playerScore.lose +'</p>'
		+ '<p>Placar do Computador (Vitórias/Empates/Derrotas): '+ computerScore.win +' / '+ computerScore.draw +' / '+ computerScore.lose +'</p>';
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

function getMainScreenButtons() {
	return '<button onclick="gameModeScreen(1);">Jogar Partida Rápida</button>'
		+ '<button onclick="gameModeScreen(2);">Jogar Melhor de 3</button>'
		+ '<button onclick="gameModeScreen(3);">Jogar Melhor de 5</button>';
}

function getNextButton() {
	return '<button onclick="gameModeScreen(0);">Próximo</button>';
}

function drawText() {
	return '<p>Você empatou!</p>';
}

function playerWinText() {
	return '<p>Você venceu!</p>';
}

function computerWinText() {
	return '<p>O computador venceu!</p>';
}