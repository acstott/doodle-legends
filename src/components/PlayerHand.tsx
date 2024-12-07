import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@store/store';
import { playCard } from '@store/gameSlice';
import Card from '@game/Card';
import { generateCards } from '../utils/generators';

interface PlayerHandProps {
  player: string; // 'Player 1' or 'Player 2'
  isFaceDown: boolean; // Whether cards are displayed face down
}

const PlayerHand: React.FC<PlayerHandProps> = ({ player, isFaceDown }) => {
  const dispatch = useDispatch<AppDispatch>();
  const hand = useSelector((state: RootState) => state.game.hands[player]);
  const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);

  const handlePlayCard = (card: Card) => {
    if (player === currentPlayer) {
      dispatch(playCard({ player, card }));
      console.log(`${player} played ${card.name}`);
    }
  };

  return (
    <div className={`player-hand ${player.toLowerCase().replace(' ', '-')}`}>
      {isFaceDown
        ? hand.map((_, index) => (
            <div key={index} className="card-back">
              <p>Card Back</p>
            </div>
          ))
        : generateCards(
            hand,
            player === 'Player 1' ? handlePlayCard : undefined // Player 2 has no "Play" button
          )}
    </div>
  );
};

export default PlayerHand;
