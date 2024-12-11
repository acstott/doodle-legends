import React from 'react';
import { useDispatch } from 'react-redux';
import { playCard } from '@store/gameSlice';
import Card from '@game/Card';

interface CardComponentProps {
  card: Card;
  player: string; // 'Player 1' or 'Player 2'
  isPlayable: boolean; // Determines if the Play button should be shown
}

const CardComponent: React.FC<CardComponentProps> = ({ card, player, isPlayable }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    if (isPlayable) {
      console.log(`Dispatching playCard for ${player} with card ${card.name}`);
      dispatch(playCard({ player, card }));
    } else {
      console.log(`Play button clicked but ${player} is not the current player.`);
    }
  };

  return (
    <div className="card-content">
        <div className="card-content">
        {isPlayable && (
        <button className="card-action" onClick={handlePlayClick}>
          Play
        </button>
      )}</div>
      <div className="card-component">
        <h3>{card.name}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
