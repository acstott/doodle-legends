import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { playCard } from '../store/gameSlice';
import { generateCards } from '../utils/generators';
import Card from '../game/Card';

interface PlayerHandProps {
  player: string; // 'Player 1' or 'Player 2'
  isFaceDown: boolean;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ player, isFaceDown }) => {
  const dispatch = useDispatch<AppDispatch>();
  const hand = useSelector((state: RootState) => state.game.hands[player]);

  const handlePlayCard = (card: Card) => {
    dispatch(playCard({ player, card }));
    console.log(`${player} played ${card.name}`);
  };

  return (
    <div className={`player-hand ${player.toLowerCase().replace(' ', '-')}`}>
      {isFaceDown
        ? hand.map((_, index) => (
            <div key={index} className="card-back">
              <p>Card Back</p>
            </div>
          ))
        : generateCards(hand, handlePlayCard)}
    </div>
  );
};

export default PlayerHand;
