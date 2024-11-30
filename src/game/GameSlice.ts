import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from '../game/Card';

export interface GameState {
  hands: Record<string, Card[]>; // Hands for Player 1 and Player 2
  deck: Card[]; // The deck of all cards
  currentPlayer: string; // Tracks the current player ('Player 1' or 'Player 2')
  playedCards: Record<string, Card[]>; // Cards that have been played by each player
  health: Record<string, number>; // Tracks health for each player
}

const initialState: GameState = {
  hands: { 'Player 1': [], 'Player 2': [] },
  deck: [
    new Card('Water Elemental', 'water', 4, 'Splash damage', 80, 10),
    new Card('Fire Dragon', 'fire', 4, 'Breathes fire', 100, 15),
    new Card('Magic Wizard', 'magic', 3, 'Casts spells', 60, 8),
    new Card('Lightning Bolt', 'lightning', 2, 'Strikes with electricity', 50, 12),
    new Card('Thunderstorm', 'lightning', 3, 'Deals massive damage to all', 70, 20),
    new Card('Ice Spirit', 'water', 2, 'Freezes an enemy', 50, 5),
  ],
  currentPlayer: '', // 'Player 1' or 'Player 2'
  playedCards: { 'Player 1': [], 'Player 2': [] },
  health: { 'Player 1': 100, 'Player 2': 100 },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Shuffle the deck using the Fisher-Yates algorithm
    shuffleDeck: (state) => {
      for (let i = state.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
      }
    },

    // Deal 5 cards to each player
    dealHands: (state) => {
      state.hands['Player 1'] = state.deck.splice(0, 5);
      state.hands['Player 2'] = state.deck.splice(0, 5);
    },

    // Randomly determine which player goes first
    determineStartingPlayer: (state) => {
      state.currentPlayer = Math.random() > 0.5 ? 'Player 1' : 'Player 2';
    },

    // Play a card from the player's hand
    playCard: (state, action: PayloadAction<{ player: string; card: Card }>) => {
      const { player, card } = action.payload;
      const hand = state.hands[player];

      // Remove the card from the player's hand
      state.hands[player] = hand.filter((c) => c !== card);

      // Add the card to the played cards area
      state.playedCards[player] = [...(state.playedCards[player] || []), card];

      // Example: Log the action (expand logic later for game effects)
      console.log(`${player} played ${card.name}`);
    },

    // Switch to the other player's turn
    switchTurn: (state) => {
      state.currentPlayer = state.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    },

    // Reduce health for a player (example effect)
    reduceHealth: (state, action: PayloadAction<{ player: string; damage: number }>) => {
      const { player, damage } = action.payload;
      state.health[player] -= damage;

      if (state.health[player] < 0) {
        state.health[player] = 0; // Prevent negative health
      }

      console.log(`${player} takes ${damage} damage. Remaining health: ${state.health[player]}`);
    },
  },
});

// Export actions and reducer
export const {
  shuffleDeck,
  dealHands,
  determineStartingPlayer,
  playCard,
  switchTurn,
  reduceHealth,
} = gameSlice.actions;

export default gameSlice.reducer;
