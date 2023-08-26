'use strict'

// get players
const player01 = document.querySelector('.player--0')
const player02 = document.querySelector('.player--1')

// select elements
let score0El = document.querySelector('#score--0')
let score1El = document.getElementById('score--1')
let diceEl = document.querySelector('.dice')

// Active player
let activePlayer = 0

// An array to store the final score
const final = [0,0]

// start conditions
diceEl.classList.add('hidden')

// global scores fo each player
let currentScore= 0

// roll the dice on clickong the roll button
let buttonNewEl = document.querySelector('.btn--new')
let buttonRollEl = document.querySelector('.btn--roll')
let buttonHoldEl = document.querySelector('.btn--hold')

// Rolling dice functionality
buttonRollEl.addEventListener('click', function () {
    // generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1
    // dispay the dice
    diceEl.classList.remove('hidden')
    diceEl.src = `assets/dice-${dice}.png`
    // Check for rolled
    if (dice !== 1) {
        currentScore += dice
        // check the activePlayer
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        // switch player
        player01.classList.toggle('player--active')
        player02.classList.toggle('player--active')
        document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer ? 0 : 1
        // reset current
        currentScore = 0
    }
})

// holding the score
buttonHoldEl.addEventListener('click', function () {
    // add to the total score
    final[activePlayer] += currentScore
    // add to the current score
    document.getElementById(`score--${activePlayer}`).textContent=final[activePlayer]
    // check if current player value>100
    if (final[activePlayer] >= 100) {

    }
})
