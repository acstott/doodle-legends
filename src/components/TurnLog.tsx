import React from 'react';

interface TurnLogProps {
  log: string[];
}

const TurnLog: React.FC<TurnLogProps> = ({ log }) => {
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
