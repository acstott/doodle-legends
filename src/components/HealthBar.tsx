import React from 'react';

interface HealthBarProps {
  health: number;
  maxHealth: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ health, maxHealth }) => {
  const healthPercentage = (health / maxHealth) * 100;
  return (
    <div className="health-bar">
      <div
        className="health-bar-fill"
        style={{ width: `${healthPercentage}%` }}
      />
    </div>
  );
};

export default HealthBar;
