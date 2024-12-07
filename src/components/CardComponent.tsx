import React from 'react';
import { useDispatch } from 'react-redux';
import { playCard } from '@store/gameSlice';
import Card from '@game/Card';

interface CardProps {
  card: Card;
  player: string; // 'Player 1' or 'Player 2'
  onPlay?: () => void; // Optional onPlay callback
}

const CardComponent: React.FC<CardProps> = ({ card, player, onPlay }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    if (onPlay) {
      onPlay();
    } else {
      console.log(`${player} tried to play ${card.name}, but no action is defined.`);
    }
  };

  return (
    <div className={`card ${card.type}`}>
      <h3>{card.name}</h3>
      <p>Type: {card.type}</p>
      <p>Cost: {card.cost} AP</p>
      {onPlay && (
        <button onClick={handlePlay} className="card-action">
          Play
        </button>
      )}
    </div>
  );
};

export default CardComponent;
