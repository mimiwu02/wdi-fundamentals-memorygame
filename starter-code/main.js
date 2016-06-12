//console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen"
//var cardTwo = "queen"
//var cardThree = "king"
//var cardFour = "king"

//if (cardTwo===cardFour) 
	//{alert("You found a match!")}
//else {alert("Sorry, try again.")}; 

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

//Get an element with the id of game-board and set it to a variable.
var board = document.getElementById('game-board');

//Create a function called createBoard in your Javascript file. 
function createBoard() {
// create a for loop that makes an HTML element for each card. 

 for (var i=0; i<cards.length; i++) {
 	var cardElement = document.createElement('div'); 

// add a class
	cardElement.className = 'card';

// this will set the card's 'data-card' to be the element of the array
  // data- attributes are meant to store data about an element that is not
  // tied to a style.
  // i.e. "king"
  	cardElement.setAttribute('data-card', cards[i]);

 // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

//Append each newly created card to the div that has the class board
	board.appendChild(cardElement);
	board.appendChild(cardElement);
 	}
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="wdi-fundamentals-memorygame/Hearts_13.png" alt= "King of Hearts">'; // king
	} else {
		this.innerHTML = '<img src="wdi-fundamentals-memorygame/Hearts_12.png" alt= "Queen of Hearts">'; //queen
	}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
createBoard ();