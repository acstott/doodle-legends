import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from '../game/Card';

interface GameState {
  hands: Record<string, Card[]>;
  deck: Card[];
  currentPlayer: string;
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
    },
  });
  
  export const { shuffleDeck, dealHands, determineStartingPlayer, nextTurn, playCard } = gameSlice.actions;
  export default gameSlice.reducer;