import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from '@game/Card';

interface GameState {
  hands: Record<string, Card[]>;
  deck: Card[];
  currentPlayer: string;
  health: Record<string, number>;
  playedCards: Record<string, Card[]>;
  log: string[]; // Add log to track game events
}

const initialState: GameState = {
  hands: { 'Player 1': [], 'Player 2': [] },
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
  currentPlayer: '', // 'Player 1' or 'Player 2'
  health: { 'Player 1': 100, 'Player 2': 100 },
  playedCards: { 'Player 1': [], 'Player 2': [] },
  log: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    shuffleDeck: (state) => {
      for (let i = state.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
      }
    },
    dealHands: (state) => {
      state.hands['Player 1'] = state.deck.splice(0, 5);
      state.hands['Player 2'] = state.deck.splice(0, 5);
    },
    determineStartingPlayer: (state) => {
      state.currentPlayer = Math.random() > 0.5 ? 'Player 1' : 'Player 2';
    },
    playCard: (state, action: PayloadAction<{ player: string; card: Card }>) => {
      const { player, card } = action.payload;
      state.hands[player] = state.hands[player].filter((c) => c !== card);

      // Example: Apply card effect (expand logic later)
      console.log(`${card.name} played by ${player}`);
    },
    switchTurn: (state) => {
      state.currentPlayer = state.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    },
    nextTurn: (state) => {
      state.currentPlayer = state.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    },
    addCardToDeck: (state, action: PayloadAction<Card>) => {
      // Validate card type before adding to the deck
      if (!Card.isValidType(action.payload.type)) {
        throw new Error(`Invalid card type: ${action.payload.type}`);
      }
      state.deck.push(action.payload);
    },
  },
});

export const { shuffleDeck, dealHands, determineStartingPlayer, nextTurn, playCard, addCardToDeck } =
  gameSlice.actions;
export default gameSlice.reducer;
