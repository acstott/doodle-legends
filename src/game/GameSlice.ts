import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  name: string;
  type: string;
  cost: number;
  description: string;
  health: number;
  damage: number;
}

interface GameState {
  hands: Record<string, Card[]>;
  deck: Card[];
  currentPlayer: string;
  health: Record<string, number>;
  log: string[];
  discardPile: Card[];
}

const initialState: GameState = {
  hands: { 'Player 1': [], 'Player 2': [] },
  deck: [
    { name: 'Water Elemental', type: 'water', cost: 4, description: 'Splash damage', health: 80, damage: 10 },
    { name: 'Fire Dragon', type: 'fire', cost: 4, description: 'Breathes fire', health: 100, damage: 15 },
    { name: 'Magic Wizard', type: 'magic', cost: 3, description: 'Casts spells', health: 60, damage: 8 },
    { name: 'Lightning Bolt', type: 'lightning', cost: 2, description: 'Strikes with electricity', health: 50, damage: 12 },
    { name: 'Thunderstorm', type: 'lightning', cost: 3, description: 'Deals massive damage to all', health: 70, damage: 20 },
    { name: 'Ice Spirit', type: 'water', cost: 2, description: 'Freezes an enemy', health: 50, damage: 5 },
  ],
  log: [],
  currentPlayer: Math.random() > 0.5 ? 'Player 1' : 'Player 2',
  health: { 'Player 1': 100, 'Player 2': 100 },
  discardPile: [],
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
      state.log.push('Deck shuffled.');
    },
    dealHands: (state) => {
      state.hands['Player 1'] = state.deck.splice(0, 5);
      state.hands['Player 2'] = state.deck.splice(0, 5);
      state.log.push('Hands dealt to both players.');
    },
    determineStartingPlayer: (state) => {
      state.currentPlayer = Math.random() > 0.5 ? 'Player 1' : 'Player 2';
      state.log.push(`${state.currentPlayer} will go first.`);
    },
    playCard: (state, action: PayloadAction<{ player: string; card: Card }>) => {
      const { player, card } = action.payload;
      state.hands[player] = state.hands[player].filter((c) => c !== card);
      const opponent = player === 'Player 1' ? 'Player 2' : 'Player 1';
      state.health[opponent] = Math.max(0, state.health[opponent] - card.damage);
      state.discardPile.push(card);

      state.log.push(`${player} played ${card.name}, dealing ${card.damage} damage to ${opponent}.`);

      if (state.health[opponent] === 0) {
        state.log.push(`${opponent} has been defeated! ${player} wins the game!`);
      }
    },
    addLogEntry: (state, action: PayloadAction<string>) => {
      state.log.push(action.payload);
    },
  },
});

export const { shuffleDeck, dealHands, determineStartingPlayer, playCard, addLogEntry } = gameSlice.actions;
export default gameSlice.reducer;
