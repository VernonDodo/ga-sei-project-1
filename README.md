# Welcome to Blackjack GA Project Edition

This game was designed and implemented as an exercise to showcase my HTML, CSS, and Javascript skills. 

## Game Design

The game design was basically done on paper, with the wireframing method. This at least gave me an idea of the elements that I wanted on the page, and where I wanted to place them. 

![Wireframe](https://github.com/VernonDodo/ga-sei-project-1/blob/master/resources/project1_wireframe.jpg)



After wireframing, I proceeded to do the storyboarding or whiteboarding for the game logic.

[Game Design](https://github.com/VernonDodo/ga-sei-project-1/blob/master/resources/Designing%20the%20game.pdf)

[Game Logic](https://github.com/VernonDodo/ga-sei-project-1/blob/master/resources/Developing%20the%20game%20logic.pdf)
[Project Board] (https://trello.com/b/VzuEW3oT/ga-sei-project-1)



## Implementation
I coded the elements in html and styled them with CSS. The game logic and functionality, I coded with Javascript.

## On to the actual game

### Premise of the game
The objective of Blackjack, is to et as close to 21 in one round. 

### Card Values
In blackjack, the card values are as follows:
- an Ace counts 1 or 11, subject to certains conditions, which will be explained later
- cards 2 through to 10 counts on their face value
- Jack, Queen and King all counts 10

### The twist of the Ace
An Ace can be counted as one or 11, depending on the circumstances. In short, it is assumed the value that makes for the best hand.

A soft hand is hand where the Ace can be counted as either 1 or 11 without going over 11. If the player draws another card, and the card total, assuming that the Ace counts for 1, increases to such an extent that the Ace cannot count 11 anymore, the hand is considered hard.

### Blackjack
This is when the player or the dealer's first two cards add up to 21. A player blackjack beats any dealer total other than a dealer blackjack. If both player and dealer has blackjack, the game is tied. 

### Hitting or Standing
This is the most common decision a player has to make in this game. When deciding this, bear the following rules in mind though:
- Never hit a hard 17 or above
- Never stand on 11 or lower
- Never hit a 12-16 against a dealer 4, 5 or 6
- Always hit a 12-16 against a dealer 7 or higher
- Always hit on soft 17 or less

Note: Rest of the rules to be updated later

## Implementation of game logic

The reason for putting down the rules, was to create context for the logical implementation of the rules. 

As can be seen from the rules, the whole process is event-driven. Bearing this in mind, I approached the problem statement by developing a number of functions that would execute at the click of a button - this is pretty much the event that drives the whole game.

What also made it easier, was to code the deck of cards as an object and then defining functions to interact with that object. 

### Event-driven logic

Whilst the game is event-driven, there was definitely a sequence to how events fired, but that was very much dependent on the status of the game and which button was pressed. The challenge was to code all of these events and then, got each button-press, to fire them off in the correct order.







