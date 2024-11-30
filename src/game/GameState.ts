import Card from './Card';

interface GameState {
  hands: Record<string, Card[]>; // Hands for Player 1 and Player 2
  deck: Card[]; // The deck of all cards
  currentPlayer: string; // Either 'Player 1' or 'Player 2'
  health: Record<string, number>; // Health points for each player
  playedCards: Record<string, Card[]>; // Cards that have been played by each player
}

export default GameState;
