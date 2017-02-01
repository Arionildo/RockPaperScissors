/*
 * This script helps to keep main.js clean.
 */

"use strict";

function getRockButton() {
	return '<img onclick="setChoice(\'rock\')" src="../../assets/img/rock.png">';
}

function getPaperButton() {
	return '<img onclick="setChoice(\'paper\')" src="../../assets/img/paper.png">';
}

function getScissorsButton() {
	return '<img onclick="setChoice(\'scissors\')" src="../../assets/img/scissors.png">';
}

function getOptions() {
	return getRockButton() + getPaperButton() + getScissorsButton();
}

function getMainScreenButton() {
	return '<button onclick="mainScreen();">Ir para a tela inicial</button>';
}

function getGameButton() {
	return '<button onclick="game();">Jogar</button>';
}