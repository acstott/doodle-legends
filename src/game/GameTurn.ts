import GameState, { GameState as GameStateType } from './GameState';

// Define Player type directly in this file
type Player = 'Player 1' | 'Player 2';
import Card from './Card';

// Function to determine the starting player
export function determineStartingPlayer(): string {
  return Math.random() > 0.5 ? 'Player 1' : 'Player 2';
}



export function dealInitialHands(gameState: GameStateType): GameStateType {
  console.log('Dealing cards...');
  console.log('Initial deck:', gameState.deck);

  const hands: Record<Player, Card[]> = {
    'Player 1': [],
    'Player 2': [],
  };

for (let i = 0; i < 5; i++) {
    const player1Card = gameState.deck.shift();
    const player2Card = gameState.deck.shift();
  
    if (player1Card) hands['Player 1'].push(player1Card);
    if (player2Card) hands['Player 2'].push(player2Card);
  
    console.log(`Round ${i + 1}:`);
    console.log('Player 1 card:', player1Card?.name || 'None');
    console.log('Player 2 card:', player2Card?.name || 'None');
}

return {
    ...gameState,
    hands,
};
}

// Function to switch turns
export function switchTurn(gameState: GameStateType): GameStateType {
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
export function calculateActionsPerTurn(player: Player, gameState: GameStateType): number {
  const lands: Card[] = gameState.hands[player].filter((card: Card) => card.type === 'water' || card.type === 'fire');
  return lands.length; // Example: Actions are determined by the number of "land" cards
}

// Function to play a card
export function playCard(card: Card, player: Player, gameState: GameStateType): GameStateType {
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
export function advancePhase(gameState: GameStateType): GameStateType {
  const nextPhase = gameState.phase === 'draw' ? 'play' : gameState.phase === 'play' ? 'end' : 'draw';
  return {
    ...gameState,
    phase: nextPhase,
  };
}

// AI Turn Logic for Player 2
export function aiTurn(gameState: GameStateType): GameStateType {
  if (gameState.currentPlayer !== 'Player 2') return gameState;

  console.log("AI's Turn Begins");

  // Draw a card
  const drawnCard = gameState.deck.shift();
  if (drawnCard) {
    gameState.hands['Player 2'].push(drawnCard);
    console.log(`AI drew a card: ${drawnCard.name}`);
  }

  // AI chooses a card to play
  interface GameState {
    currentPlayer: string;
    hands: { [key: string]: Card[] };
    playedCards: { [key: string]: Card[] };
    deck: Card[];
    actions: { [key: string]: number };
    phase: string;
  }

  const playableCard: Card | undefined = gameState.hands['Player 2'].find((card: Card) => card.cost <= gameState.actions['Player 2']);
  if (playableCard) {
    gameState = playCard(playableCard, 'Player 2', gameState);
    console.log(`AI played: ${playableCard.name}`);
  } else {
    console.log('AI has no playable cards.');
  }

  // End AI's turn
  gameState = switchTurn(gameState);
  return gameState;
}
