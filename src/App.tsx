import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleDeck, dealHands } from './store/gameSlice';
import { RootState } from './store/store';
import GameMat from './components/GameMat';
import TurnLog from './components/TurnLog';
import HealthBar from './components/HealthBar';
import PlayerHand from './components/PlayerHand';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const player1 = useSelector((state: RootState) => state.game.hands['Player 1']);
  const player2 = useSelector((state: RootState) => state.game.hands['Player 2']);
  const player1Health = useSelector((state: RootState) => state.game.health['Player 1']);
  const player2Health = useSelector((state: RootState) => state.game.health['Player 2']);

  useEffect(() => {
    dispatch(shuffleDeck());
    dispatch(dealHands());
  }, [dispatch]);

  return (
    <div className="app">
      <header>
        <h1>Doodle Legends</h1>
      </header>
      <main>
        <div className="player-area">
          <HealthBar health={player1Health} maxHealth={100} />
          <PlayerHand player="Player 1" cards={player1} isFaceDown={false} />
        </div>
        <GameMat />
        <div className="player-area">
          <HealthBar health={player2Health} maxHealth={100} />
          <PlayerHand player="Player 2" cards={player2} isFaceDown={false} />
        </div>
      </main>
      <footer>
        <TurnLog />
      </footer>
    </div>
  );
};

export default App;
