import GameState from './GameState';
import Card from './Card';

// Function to determine the starting player
export function determineStartingPlayer(): string {
  return Math.random() > 0.5 ? 'Player 1' : 'Player 2';
}

// Function to switch turns
export function switchTurn(gameState: GameState): GameState {
  const nextPlayer = gameState.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
  return {
    ...gameState,
    currentPlayer: nextPlayer,
  };
}

// Function to calculate actions per turn (if mechanics are tied to actions)
export function calculateActionsPerTurn(player: string, gameState: GameState): number {
  const lands = gameState.hands[player].filter((card) => card.type === 'water' || card.type === 'fire');
  return lands.length; // Example: Actions are determined by the number of "land" cards
}

// Function to play a card
export function playCard(card: Card, player: string, gameState: GameState): GameState {
  // Remove the card from the player's hand
  const updatedHand = gameState.hands[player].filter((c) => c !== card);

  // Example: Log the action (expand logic later)
  console.log(`${player} played ${card.name}`);

  return {
    ...gameState,
    hands: {
      ...gameState.hands,
      [player]: updatedHand,
    },
  };
}
