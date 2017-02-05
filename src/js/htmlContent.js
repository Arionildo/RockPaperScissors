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

	if (image != null)
		return image;
}

function getMatchProgress(currentPlay, maxPlays) {
	return '<p>Jogadas: '+ currentPlay +' / '+ maxPlays +'</p>';
}

function getScoreText() {
	if (isCpuGame)
		return '<p>Placar do Computador 1 (Vitórias/Empates/Derrotas): '+ playerScore.win +' / '+ playerScore.draw +' / '+ playerScore.lose +'</p>'
			+ '<p>Placar do Computador 2 (Vitórias/Empates/Derrotas): '+ computerScore.win +' / '+ computerScore.draw +' / '+ computerScore.lose +'</p>';
	else
		return '<p>Seu Placar (Vitórias/Empates/Derrotas): '+ playerScore.win +' / '+ playerScore.draw +' / '+ playerScore.lose +'</p>'
			+ '<p>Placar do Computador (Vitórias/Empates/Derrotas): '+ computerScore.win +' / '+ computerScore.draw +' / '+ computerScore.lose +'</p>';

}

function getRockButton() {
	return '<img title="Pedra" onclick="setPlayerChoice(\'rock\')" src="../../assets/img/rock.png">';
}

function getPaperButton() {
	return '<img title="Papel" onclick="setPlayerChoice(\'paper\')" src="../../assets/img/paper.png">';
}

function getScissorsButton() {
	return '<img title="Tesoura" onclick="setPlayerChoice(\'scissors\')" src="../../assets/img/scissors.png">';
}

function getOptions() {
	return '<div><p class="textFeedback">Escolha Pedra, Papel ou Tesoura:</p>'
		+ getRockButton() + getPaperButton() + getScissorsButton()
		+ '</div>';
}

function getRockImage() {
	return '<img title="Pedra" src="../../assets/img/rock.png">';
}

function getPaperImage() {
	return '<img title="Papel" src="../../assets/img/paper.png">';
}

function getScissorsImage() {
	return '<img title="Tesoura" src="../../assets/img/scissors.png">';
}

function getPlayersButtons() {
	return '<button onclick="callGameModes(false);">Jogador VS Computador</button>'
		+ '<button onclick="callGameModes(true);">Computador VS Computador</button>';
}

function getMainScreenButton() {
	return '<button class="center footerButton" onclick="mainScreen();">Ir para a tela inicial</button>';
}

function getMainScreenButtons() {
	return '<button onclick="gameModeScreen(1);">Jogar Partida Rápida</button>'
		+ '<button onclick="gameModeScreen(2);">Jogar Melhor de 3</button>'
		+ '<button onclick="gameModeScreen(3);">Jogar Melhor de 5</button>';
}

function getNextButton() {
	return '<button onclick="gameModeScreen(0);">Próxima rodada</button>';
}

function drawText() {
	return isCpuGame ? '<p class="textFeedback">Ops! Deu empate...</p>' : '<p class="textFeedback">Ops! Vocês empataram...</p>';
}

function playerWinText() {
	return isCpuGame ? '<p class="textFeedback">O computador 1 venceu!</p>' : '<p class="textFeedback">Parabéns! Você venceu!</p>';
}

function computerWinText() {
	return isCpuGame ? '<p class="textFeedback">O computador 2 venceu!</p>' : '<p class="textFeedback">O computador venceu!</p>';
}