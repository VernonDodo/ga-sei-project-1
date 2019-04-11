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

    for(let si = 0; si < suits.length; i++) {
        for(let ri = 0; ri < ranks.length; ri++) {
            newCard = {suit: suits[si], rank: ranks[ri], value: cardValue[ri]}
            newDeck.push(newCard)
        }
    }
    return newDeck
}