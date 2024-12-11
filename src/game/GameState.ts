import Card from './Card';
import deck from './Deck';

type Player = 'Player 1' | 'Player 2';

interface GameAction {
  type: 'draw' | 'play' | 'discard' | 'end'; // Types of actions
  player: Player; // The player performing the action
  card?: Card; // Optional card associated with the action (e.g., for play/discard)
  target?: Player; // Target player (e.g., for attack or effects)
  timestamp: string; // When the action occurred
}

interface GameState {
  hands: Record<Player, Card[]>; // Hands for Player 1 and Player 2
  deck: Card[]; // Remaining cards in the deck
  currentPlayer: Player; // Current player ('Player 1' or 'Player 2')
  playedCards: Record<Player, Card[]>; // Cards that have been played
  phase: 'draw' | 'play' | 'end'; // Current phase of the turn
  actions: Record<Player, number>; // Actions available to each player
  discardPile: Record<Player, Card[]>; // Discard piles for both players
  log: string[]; // Game log for tracking events
  health: {
    [key: string]: number; // e.g., 'Player 1' and 'Player 2'
  };
  player1: {
    hand: Card[]; // Ensure player1 includes the required properties
  };
  player2: {
    hand: Card[];
  };
  gameActions: GameAction[]; // List of actions taken during the game
}


const initialState: GameState = {
  hands: {
    'Player 1': [],
    'Player 2': [],
  },
  deck: [...deck], // Use imported deck
  currentPlayer: 'Player 1', // Default starting player
  health: {
    'Player 1': 100,
    'Player 2': 100,
  },
  playedCards: {
    'Player 1': [],
    'Player 2': [],
  },
  phase: 'draw', // Start with the draw phase
  actions: {
    'Player 1': 0,
    'Player 2': 0,
  },
  discardPile: {
    'Player 1': [],
    'Player 2': [],
  },
  log: [], // Initialize empty game log
  gameActions: [], // Initialize with an empty list of actions
  player1: {
    hand: [],
  },
  player2: {
    hand: [],
  },
};

export type { Player };
export type { GameAction, GameState };
export { initialState };
export default initialState;
