import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TurnLog: React.FC = () => {
  const log = useSelector((state: RootState) => state.game.log);

  return (
    <div className="turn-log">
      <h2>Turn Log</h2>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default TurnLog;
