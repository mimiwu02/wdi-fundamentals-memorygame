//console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen"
//var cardTwo = "queen"
//var cardThree = "king"
//var cardFour = "king"

//if (cardTwo===cardFour) 
	//{alert("You found a match!")}
//else {alert("Sorry, try again.")}; 

//Get an element with the id of game-board and set it to a variable.
var board= document.getElementById('game-board');

//Create a function called createBoard in your Javascript file. 
function createBoard() {
// create a for loop that makes an HTML element for each card. 

 for (var i=0; i<cards.length; i++) {
 	var cardElement = document.createElement('div'); 

// add a class
cardElement.className = 'card';

//Append each newly created card to the div that has the class board
board.appendChild(cardElement);
 	}
}