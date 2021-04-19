/* Define global variables */

// The following arrays are going to be used to build the card deck
const suits = ['♠', '♣', '♥', '♦']
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const cardFaces = ['images/cardfaces/default/2S.png', 'images/cardfaces/default/3S.png', 'images/cardfaces/default/4S.png', 'images/cardfaces/default/5S.png', 'images/cardfaces/default/6S.png', 'images/cardfaces/default/7S.png', 'images/cardfaces/default/8S.png', 'images/cardfaces/default/9S.png', 'images/cardfaces/default/10S.png', 'images/cardfaces/default/JS.png', 'images/cardfaces/default/QS.png', 'images/cardfaces/default/KS.png', 'images/cardfaces/default/AS.png', 'images/cardfaces/default/3C.png', 'images/cardfaces/default/4C.png', 'images/cardfaces/default/5C.png', 'images/cardfaces/default/6C.png', 'images/cardfaces/default/7C.png', 'images/cardfaces/default/8C.png', 'images/cardfaces/default/9C.png', 'images/cardfaces/default/10C.png', 'images/cardfaces/default/JC.png', 'images/cardfaces/default/QC.png', 'images/cardfaces/default/KC.png', 'images/cardfaces/default/AC.png', 'images/cardfaces/default/2H.png', 'images/cardfaces/default/3H.png', 'images/cardfaces/default/4H.png', 'images/cardfaces/default/5H.png', 'images/cardfaces/default/6H.png', 'images/cardfaces/default/7H.png', 'images/cardfaces/default/8H.png', 'images/cardfaces/default/9H.png', 'images/cardfaces/default/10H.png', 'images/cardfaces/default/JH.png', 'images/cardfaces/default/QH.png', 'images/cardfaces/default/KH.png', 'images/cardfaces/default/AH.png', 'images/cardfaces/default/2D.png', 'images/cardfaces/default/3D.png', 'images/cardfaces/default/4D.png', 'images/cardfaces/default/5D.png', 'images/cardfaces/default/6D.png', 'images/cardfaces/default/7D.png', 'images/cardfaces/default/8D.png', 'images/cardfaces/default/9D.png', 'images/cardfaces/default/10D.png', 'images/cardfaces/default/JD.png', 'images/cardfaces/default/QD.png', 'images/cardfaces/default/KD.png', 'images/cardfaces/default/AD.png']
let cardBack = "images/cardbacks/allsuite_red.png"
const buildDeck = function() {
  let newCard = {}
  let newDeck = []

  for (let si = 0; si < suits.length; si++) {
    for (let ri = 0; ri < ranks.length; ri++) {
      newCard = {
        suit: suits[si],
        rank: ranks[ri],
        value: cardValues[ri],
        face: cardFaces[ri],
        back: cardBack
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
let dealerCards = $("#dealer .card");
let playerCards = $("#player .card");

// This counter keeps track of how many times cards are being dealt
let dealCounter = 1;

let dealerStatus = "hit";


/* Build the game functionality */


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

let dealButton = $("#dealButton");

dealButton.click(function() {
  let drawnCard = gameDeck.pop()
  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      $("#dealer_card" +dealCounter + "  img").attr("src", drawnCard.back);
    } else {
      $("#dealer_card" +dealCounter + "  img").attr("src", drawnCard.face);
  }
  drawnCard = gameDeck.pop();
  $("#player_card" +dealCounter + "  img").attr("src", drawnCard.face);
  dealCounter++;
  }
  $("#dealButton").attr("disabled", "true");
  $("#hitButton").removeAttr("disabled");
  $("#standButton").removeAttr("disabled");
});

let hitButton = $("#hitButton");

hitButton.click(function() {
  console.log("Hit button has been pressed");
  let drawnCard = gameDeck.pop();
  $("#player_card" + dealCounter + " img").attr("src", drawnCard.face);
  $("player_card" + dealCounter).removeAttr("style");
  dealCounter++;
});


let standButton = $("#standButton");

standButton.click(function() {
  console.log("Stand button was clicked");
  $("#hitButton").attr("disabled","true");
  $("#standButton").attr("disabled","true");
});
