import Card from './Card';

type Player = 'Player 1' | 'Player 2';

interface GameState {
  hands: Record<Player, Card[]>; // Hands for Player 1 and Player 2
  deck: Card[]; // Remaining cards in the deck
  currentPlayer: Player; // Current player ('Player 1' or 'Player 2')
  health: Record<Player, number>; // Health points for each player
  playedCards: Record<Player, Card[]>; // Cards that have been played
  phase: 'draw' | 'play' | 'end'; // Current phase of the turn
  actions: Record<Player, number>; // Actions available to each player
}

const initialState: GameState = {
  hands: {
    'Player 1': [],
    'Player 2': [],
  },
  deck: [
    new Card('Fire Dragon', 'fire', 4, 'Breathes fire', 100, 15),
    new Card('Water Elemental', 'water', 3, 'Splash damage', 80, 10),
    new Card('Magic Wizard', 'magic', 2, 'Casts spells', 70, 12),
    new Card('Lightning Bolt', 'lightning', 2, 'Electric strike', 50, 8),
    new Card('Thunderstorm', 'lightning', 4, 'Massive lightning', 120, 20),
    new Card('Ice Spirit', 'water', 2, 'Freezes enemies', 60, 5),
    new Card('Earth Golem', 'magic', 3, 'Strong defense', 90, 10),
    new Card('Wind Sprite', 'lightning', 1, 'Quick attack', 40, 8),
    new Card('Solar Phoenix', 'fire', 5, 'Revives self', 110, 25),
    new Card('Moon Mage', 'magic', 3, 'Lunar spells', 70, 15),
  ],
  currentPlayer: 'Player 1',
  health: {
    'Player 1': 100,
    'Player 2': 100,
  },
  playedCards: {
    'Player 1': [],
    'Player 2': [],
  },
  phase: 'draw',
  actions: {
    'Player 1': 0,
    'Player 2': 0,
  },
};

export type { GameState, Player };
export { initialState };
export default initialState;
