import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { generateLogEntries } from '../utils/generators';

const TurnLog: React.FC = () => {
  // Retrieve logs from Redux state
  const log = useSelector((state: RootState) => state.game.log);

  return (
    <div className="turn-log">
      <h2>Turn Log</h2>
      <ul>{generateLogEntries(log)}</ul>
    </div>
  );
};

export default TurnLog;
