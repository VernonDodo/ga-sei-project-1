/* Define global variables */
let suits = ['♠','♣','♥','♦']
let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
let cardValue = [2,3,4,5,6,7,8,9,10,10,10,10,11]

let dealerCards = []
let playerCards = []


/* Build the game functionality */

const buildDeck = function() {
    let newCard = {}
    let newDeck = []

    for(let si = 0; si < suits.length; si++) {
        for(let ri = 0; ri < ranks.length; ri++) {
            newCard = {suit: suits[si], rank: ranks[ri], value: cardValue[ri]}
            newDeck.push(newCard)
        }
    }
    return newDeck
}

let deck = buildDeck()

const shuffleCards = function() {
    let shuffledCards = []
    for(let i = deck.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random()*(i + 1))
        shuffledCards.push(deck[randomIndex])
    }
    return shuffledCards
}

let shuffledDeck = shuffleCards()

const deal = function() {
    for(let i = 0; i < 2; i++){
        playerCards.push(shuffledDeck[shuffledDeck.length - 1])
        console.log(playerCards)
        shuffledDeck.pop()
        dealerCards.push(shuffledDeck[shuffledDeck.length - 1])
        console.log(dealerCards)
        shuffledDeck.pop()
    }
}

let playerTotal = 0;
let dealerTotal = 0;

const calculateTotal = function(cardArray[]) {
    let total = 0;
    for(let i =0; i < cardArray.length; i++){
        total += cardArray.value
    }
    return total
}

playerTotal = calculateTotal(playerCards);
dealerTotal = calculateTotal(dealerCards);
const blackJack = 21

const hasBlackjack = function() {
    if playerTotal === blackJack {
        alert("You've got BlackJack")
    }
    if dealerTotal === blackJack {
        alert("The house has BlackJack")
    }
}

const determineResult = function() {
    if(playerTotal > dealerTotal) {
        alert("Player wins")
    } else if (dealerTotal > playerTotal) {
        alert("Dealer wins")
    } else {
        alert("Push")
    }
}

const getNextCard = function(){
    playerCards.push(shuffledDeck[shuffledDeck.length - 1])
    shuffledDeck.pop();
}
    


