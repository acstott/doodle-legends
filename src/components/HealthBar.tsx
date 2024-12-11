// HealthBar.tsx
import React from 'react';

interface HealthBarProps {
  health: number; // Current health
  maxHealth: number; // Maximum health
}

const HealthBar: React.FC<HealthBarProps> = ({ health, maxHealth }) => {
  const healthPercentage = Math.max(0, (health / maxHealth) * 100);

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
