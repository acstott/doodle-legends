import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store, { RootState } from '../store/store';
import { generatePlayerHand, generateGameCenter } from '../utils/generators';

const GameMat: React.FC = () => {
  const hands = useSelector((state: RootState) => state.game.hands);
  const deckCount = useSelector((state: RootState) => state.game.deck.length);

  return (
    <Provider store={store}>
      <div className="game-mat">
        {generatePlayerHand('Player 1', hands['Player 1'])}
        {generateGameCenter(deckCount)}
        {generatePlayerHand('Player 2', hands['Player 2'])}
      </div>
    </Provider>
  );
};

export default GameMat;
