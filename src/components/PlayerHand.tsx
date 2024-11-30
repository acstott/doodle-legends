import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@store/store';
import { playCard } from '@store/gameSlice';
import CardComponent from './CardComponent';
import Card from '@game/Card';

interface PlayerHandProps {
  player: string; // 'Player 1' or 'Player 2'
  isFaceDown: boolean; // Whether cards are displayed face down
}

const PlayerHand: React.FC<PlayerHandProps> = ({ player, isFaceDown }) => {
  const dispatch = useDispatch<AppDispatch>();
  const hand = useSelector((state: RootState) => state.game.hands[player]);

  const handlePlayCard = (card: Card) => {
    // Correctly dispatch the playCard action with player and card payload
    dispatch(playCard({ player, card })); // Ensure playCard expects a single object
    console.log(`${player} played ${card.name}`);
  };

  return (
    <div className={`player-hand ${player.toLowerCase().replace(' ', '-')}`}>
      {hand.map((card, index) => (
        isFaceDown ? (
          <div key={index} className="card-back">
            <p>Card Back</p>
          </div>
        ) : (
          <CardComponent
            key={index}
            card={card}
            onPlay={() => handlePlayCard(card)}
          />
        )
      ))}
    </div>
  );
};

export default PlayerHand;
