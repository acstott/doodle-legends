import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { shuffleDeck, dealHands, determineStartingPlayer } from './store/gameSlice';
import GameMat from './components/GameMat';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffleDeck());
    dispatch(dealHands());
    dispatch(determineStartingPlayer());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Doodle Legends</h1>
      <GameMat />
    </div>
  );
};

export default App;
