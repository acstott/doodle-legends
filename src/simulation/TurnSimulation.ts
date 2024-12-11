import initialState, { GameState } from '../game/GameState';
import {
  determineStartingPlayer,
  dealInitialHands,
  switchTurn,
  aiTurn,
  advancePhase,
  playCard,
} from '../game/GameTurn';
import Card from '../game/Card';

console.log("=== Doodle Legends Turn Simulation ===");

// Initialize the game
let gameState: GameState = { ...initialState };

// Deal initial hands
gameState = dealInitialHands(gameState);
console.log('Initial hands dealt:');
console.log('Player 1:', gameState.hands['Player 1']);
console.log('Player 2:', gameState.hands['Player 2']);

// Determine starting player
type Player = 'Player 1' | 'Player 2';
gameState.currentPlayer = determineStartingPlayer() as Player;
console.log(`Starting player: ${gameState.currentPlayer}`);

// Function to log the game state
const logGameState = (gameState: GameState) => {
  console.log(`Current Player: ${gameState.currentPlayer}`);
  console.log('Player 1 Health:', gameState.health['Player 1']);
  console.log('Player 2 Health:', gameState.health['Player 2']);
  console.log('Player 1 Hand:', gameState.hands['Player 1']);
  console.log('Player 2 Hand:', gameState.hands['Player 2']);
  console.log('Discard Pile:', gameState.discardPile);
  console.log('Log:', gameState.log);
};

// Simulate a turn sequence for Player 1
console.log("\n--- Player 1's Turn ---");

// Draw phase
gameState = advancePhase(gameState);
if (gameState.phase === 'draw') {
  const drawnCard = gameState.deck.shift();
  if (drawnCard) {
    gameState.hands[gameState.currentPlayer].push(drawnCard);
    console.log(`${gameState.currentPlayer} drew: ${drawnCard.name}`);
  }
}

// Play phase
gameState = advancePhase(gameState);
if (gameState.phase === 'play') {
  const playerHand = gameState.hands[gameState.currentPlayer as keyof typeof gameState.hands];
  const cardToPlay = playerHand.find((card) => card.cost <= (gameState.actions as Record<Player, number>)[gameState.currentPlayer]);
  if (cardToPlay) {
    gameState = playCard(cardToPlay, gameState.currentPlayer as Player, gameState);
    console.log(`${gameState.currentPlayer} played: ${cardToPlay.name}`);
  } else {
    console.log(`${gameState.currentPlayer} has no playable cards.`);
  }
}

// End phase
gameState = advancePhase(gameState);
if (gameState.phase === 'end') {
  gameState = switchTurn(gameState);
  console.log(`End of turn. It's now ${gameState.currentPlayer}'s turn.`);
}

// Simulate AI turn
if (gameState.currentPlayer === 'Player 2') {
  console.log("\n--- AI's Turn ---");
  gameState = aiTurn(gameState);
}

// Log the game state at the end of the turn
logGameState(gameState);
