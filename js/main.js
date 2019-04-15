/* Define global variables */

// The following arrays are going to be used to build the card deck
let suits = ['♠','♣','♥','♦']
let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
let cardValues = [2,3,4,5,6,7,8,9,10,10,10,10,11]
let cardFaces = ['images/cardfaces/2S.png','images/cardfaces/3S.png','images/cardfaces/4S.png','images/cardfaces/5S.png','images/cardfaces/6S.png','images/cardfaces/7S.png','images/cardfaces/8S.png','images/cardfaces/9S.png','images/cardfaces/10S.png','images/cardfaces/JS.png','images/cardfaces/QS.png','images/cardfaces/KS.png','images/cardfaces/AS.png','images/cardfaces/3C.png','images/cardfaces/4C.png','images/cardfaces/5C.png','images/cardfaces/6C.png','images/cardfaces/7C.png','images/cardfaces/8C.png','images/cardfaces/9C.png','images/cardfaces/10C.png','images/cardfaces/JC.png','images/cardfaces/QC.png','images/cardfaces/KC.png','images/cardfaces/AC.png','images/cardfaces/2H.png','images/cardfaces/3H.png','images/cardfaces/4H.png','images/cardfaces/5H.png','images/cardfaces/6H.png','images/cardfaces/7H.png','images/cardfaces/8H.png','images/cardfaces/9H.png','images/cardfaces/10H.png','images/cardfaces/JH.png','images/cardfaces/QH.png','images/cardfaces/KH.png','images/cardfaces/AH.png','images/cardfaces/2D.png','images/cardfaces/3D.png','images/cardfaces/4D.png','images/cardfaces/5D.png','images/cardfaces/6D.png','images/cardfaces/7D.png','images/cardfaces/8D.png','images/cardfaces/9D.png','images/cardfaces/10D.png','images/cardfaces/JD.png','images/cardfaces/QD.png','images/cardfaces/KD.png','images/cardfaces/AD.png']

// These variables keep track of the cards in each player's hand
let dealerCards = $(".dealer .card")
let playerCards = $(".player .card")

/* The round counter is important because the intial round does not get played like subsequent rounds. This is used to determine game logic after an initial round */

let roundCounter = 1; 


/* Build the game functionality */

const buildDeck = function() {
    let newCard = {}
    let newDeck = []

    for(let si = 0; si < suits.length; si++) {
        for(let ri = 0; ri < ranks.length; ri++) {
            newCard = {suit: suits[si], rank: ranks[ri], value: cardValues[ri], face: cardFaces[ri]}
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

const renderCard = function(card){
  
    
   

}


let playerTotal = 0;
let dealerTotal = 0;

const calculateTotal = function(cards) {
    let total = 0;
    for(let i =0; i < cards.length; i++){
        total += cards.value
    }
    return total
}

playerTotal = calculateTotal(playerCards)
dealerTotal = calculateTotal(dealerCards)

const updateDisplayScores = function() {
    $("#dealerHeading .scoreTotal").html(dealerTotal)
    $("#playerHeading .scoreTotal").html(playerTotal)
}

const updateInfoMessage = function(text) {
	$("#info_message").html(text)
}

const blackJack = 21

const hasBlackjack = function(cards) {
    if (calculateTotal(cards) === blackJack) {
        return true
    } else {
        return false
    }
}

const determineResult = function() {
    if (hasBlackjack(dealerCards) && hasBlackjack(playerCards)) {
        updateInfoMessage("Push")
    } else if (hasBlackjack(dealerCards)){
        updateInfoMessage("The house has Blackjack!!")
    }
    else if (hasBlackjack(playerCards)) {
        updateInfoMessage("You have Blackjack!")
    } else if (dealerTotal === playerTotal) {
        updateInfoMessage("Push")
    } else if (dealerTotal > playerTotal){
        updateInfoMessage("The House wins!")
    } else {
        updateInfoMessage("Player wins!")
    }
}

const getNextCard = function(cards) {
    let newCard = shuffledDeck.pop()
    cards.push(newCard)
    shuffledDeck.pop();
}

const deal = function() {
    
    for(let i = 0; i < 4; i++){
        if (i % 2 === 0) {
            playerCards[i] = shuffledDeck.pop()
            renderCard(playerCards[i])
            
        } else {
            dealerCards[i] = shuffledDeck.pop()
            if (i === 0){
                dealerCards[i].cardBack("images/cardbacks/redback.png")
            }
            renderCard(dealerCards[i]) 
        }
        
    }
}

const hit = function() {
    getNextCard(playerCards)
    calculateTotal(playerCards)
}

const stand = function () {
    while (dealerTotal < 17) {
        getNextCard(dealerCards)
    }
    determineResult()
}

// The following code are for the event handlers for the buttons

$("#dealButton").on("click", deal)

$("#hitButton").on("click", hit)

$("#standButton").on("click", stand )


 


