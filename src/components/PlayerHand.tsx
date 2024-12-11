import React from 'react';
import Card from '@game/Card'; // Adjust the path as needed
import { generateCards } from '../utils/generators'; // Adjust path to the generator function

interface PlayerHandProps {
  player: string; // 'Player 1' or 'Player 2'
  cards: Card[]; // The cards in the player's hand
  isFaceDown: boolean; // Whether the cards should be displayed face-down
}

const PlayerHand: React.FC<PlayerHandProps> = ({ player, cards, isFaceDown }) => {
  return (
    <div className={`player-hand player-${player.toLowerCase().replace(' ', '-')}`}>
      <h2>{player}'s Hand</h2>
      <div className="cards horizontal">
        {isFaceDown
          ? Array(cards.length).fill(<div className="card-back" />) // Render face-down cards
          : generateCards(cards, (card) => console.log(`Played card: ${card.name}`))} // Replace console.log with actual playCard logic
      </div>
    </div>
  );
};

export default PlayerHand;
