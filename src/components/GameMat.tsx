import React from 'react';
import PlayerHand from './PlayerHand';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const GameMat: React.FC = () => {
  const currentPlayer = useSelector((state: RootState) => state.game.currentPlayer);

  return (
    <div className="game-mat">
      <h2>Current Turn: {currentPlayer}</h2>
      <div className="player-zone opponent">
        <h3>Player 2</h3>
        <PlayerHand player="Player 2" isFaceDown={true} />
      </div>
      <div className="player-zone player">
        <h3>Player 1</h3>
        <PlayerHand player="Player 1" isFaceDown={false} />
      </div>
    </div>
  );
};

export default GameMat;
