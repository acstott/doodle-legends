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
    actions: {
      ...gameState.actions,
      [nextPlayer]: calculateActionsPerTurn(nextPlayer, gameState),
    },
    phase: 'draw', // Reset to the first phase of the next turn
  };
}

// Function to calculate actions per turn
export function calculateActionsPerTurn(player: string, gameState: GameState): number {
  const lands = gameState.hands[player].filter((card) => card.type === 'water' || card.type === 'fire');
  return lands.length; // Example: Actions are determined by the number of "land" cards
}

// Function to play a card
export function playCard(card: Card, player: string, gameState: GameState): GameState {
  const updatedHand = gameState.hands[player].filter((c) => c !== card);

  return {
    ...gameState,
    hands: {
      ...gameState.hands,
      [player]: updatedHand,
    },
    playedCards: {
      ...gameState.playedCards,
      [player]: [...(gameState.playedCards[player] || []), card],
    },
  };
}

// Function to advance the phase of the game
export function advancePhase(gameState: GameState): GameState {
  const nextPhase = gameState.phase === 'draw' ? 'play' : gameState.phase === 'play' ? 'end' : 'draw';
  return {
    ...gameState,
    phase: nextPhase,
  };
}
