import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { playCard } from '../store/gameSlice';
import Card from '@game/Card'; // Adjust the path as needed

const GameMat: React.FC = () => {
  const dispatch = useDispatch();
  const playedCards = useSelector((state: RootState) => state.game.playedCards);
  const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);

  const handleCardClick = (player: string, card: Card) => {
    dispatch(playCard({ player, card }));
  };

  return (
    <div className="game-mat">
      <div className="play-zone">
        {Object.entries(playedCards).map(([player, cards]) => (
          <div key={player} className={`player-zone player-${player.toLowerCase().replace(' ', '-')}`}>
            <h3>{player}</h3>
            <div className="cards">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card ${card.type}`}
                  onClick={() => handleCardClick(player, card)}
                >
                  <h4>{card.name}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMat;
