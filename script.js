
let pile = 50
let currentPlayer = 1
const numPlayers = 2 

// Get DOM elements
const pileInfo = document.getElementById('pile-info')
const playerInfo = document.getElementById('player-info')
const resultMessage = document.getElementById('result-message')
const gameForm = document.getElementById('game-form');
const numberToRemoveInput = document.getElementById('number-to-remove')

// Function to update the game state
function updateGame() {
    const numberToRemove = parseInt(numberToRemoveInput.value)
    
    if (numberToRemove < 1 || numberToRemove > 6) {
        resultMessage.textContent = 'You must remove between 1 and 6 matchsticks.'
        return
    }
    if (numberToRemove > pile) {
        resultMessage.textContent = 'You cannot remove more matchsticks than are available.'
        return
    }

    // Update pile
    pile -= numberToRemove
    if (pile === 0) {
        resultMessage.textContent = `Player ${currentPlayer} took the last matchstick! Player ${currentPlayer} wins!`
        gameForm.querySelector('button').disabled = true 
        return;
    }

    // Update display
    pileInfo.textContent = `Matchsticks left: ${pile}`
    currentPlayer = (currentPlayer % numPlayers) + 1
    playerInfo.textContent = `Player ${currentPlayer} turn`
    resultMessage.textContent = ''
    numberToRemoveInput.value = ''
}

// Attach event listener to form
gameForm.addEventListener('submit', function(event) {
    event.preventDefault()
    updateGame()
})
