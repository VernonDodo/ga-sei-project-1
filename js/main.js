/* Define global variables */

// The following arrays are going to be used to build the card deck
const suits = ['♠', '♣', '♥', '♦']
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const cardFaces = ['images/cardfaces/2S.png', 'images/cardfaces/3S.png', 'images/cardfaces/4S.png', 'images/cardfaces/5S.png', 'images/cardfaces/6S.png', 'images/cardfaces/7S.png', 'images/cardfaces/8S.png', 'images/cardfaces/9S.png', 'images/cardfaces/10S.png', 'images/cardfaces/JS.png', 'images/cardfaces/QS.png', 'images/cardfaces/KS.png', 'images/cardfaces/AS.png', 'images/cardfaces/3C.png', 'images/cardfaces/4C.png', 'images/cardfaces/5C.png', 'images/cardfaces/6C.png', 'images/cardfaces/7C.png', 'images/cardfaces/8C.png', 'images/cardfaces/9C.png', 'images/cardfaces/10C.png', 'images/cardfaces/JC.png', 'images/cardfaces/QC.png', 'images/cardfaces/KC.png', 'images/cardfaces/AC.png', 'images/cardfaces/2H.png', 'images/cardfaces/3H.png', 'images/cardfaces/4H.png', 'images/cardfaces/5H.png', 'images/cardfaces/6H.png', 'images/cardfaces/7H.png', 'images/cardfaces/8H.png', 'images/cardfaces/9H.png', 'images/cardfaces/10H.png', 'images/cardfaces/JH.png', 'images/cardfaces/QH.png', 'images/cardfaces/KH.png', 'images/cardfaces/AH.png', 'images/cardfaces/2D.png', 'images/cardfaces/3D.png', 'images/cardfaces/4D.png', 'images/cardfaces/5D.png', 'images/cardfaces/6D.png', 'images/cardfaces/7D.png', 'images/cardfaces/8D.png', 'images/cardfaces/9D.png', 'images/cardfaces/10D.png', 'images/cardfaces/JD.png', 'images/cardfaces/QD.png', 'images/cardfaces/KD.png', 'images/cardfaces/AD.png']

const buildDeck = function() {
  let newCard = {}
  let newDeck = []

  for (let si = 0; si < suits.length; si++) {
    for (let ri = 0; ri < ranks.length; ri++) {
      newCard = {
        suit: suits[si],
        rank: ranks[ri],
        value: cardValues[ri],
        face: cardFaces[ri]
      }
      newDeck.push(newCard)
    }
  }
  return newDeck
}

let deck = buildDeck();

const shuffleDeck = function(deck) {
  let shuffledCards = []
  for (let i = deck.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    shuffledCards.push(deck[randomIndex])
  }
  return shuffledCards
}

let gameDeck = shuffleDeck(deck);

// These variables keep track of the cards in each player's hand
let dealerCards = $(".dealer .card")
let playerCards = $(".player .card")

/* The round counter is important because the intial round does not get played like subsequent rounds. This is used to determine game logic after an initial round */

let roundCounter = 1;


/* Build the game functionality */






const renderCard = function(card) {




}


let playerTotal = 0;
let dealerTotal = 0;

const calculateTotal = function(cards) {
  let total = 0;
  for (let i = 0; i < cards.length; i++) {
    total += cards.value
  }
  return total
}

playerTotal = calculateTotal(playerCards)
dealerTotal = calculateTotal(dealerCards)


const updateInfoMessage = function(text) {
  $("#info_message").html(text)
}

const blackJack = 21

const start = function() {
  console.log("Start button has been pressed");
}

const hit = function() {
  console.log("Hit button has been pressed");
}

const stand = function() {
  console.log("Stand button has been pressed");
}

// The following code are for the event handlers for the buttons

let startButton = $("#startButton");

let hitButton = $("#hitButton");

let standButton = $("#standButton");

// startButton.click(start());
//
// hitButton.click(hit());
//
// standButton.click(stand());
