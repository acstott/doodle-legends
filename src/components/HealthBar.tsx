import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { generateHealthBar } from '../utils/generators';

interface HealthBarProps {
  player: string; // 'Player 1' or 'Player 2'
}

const HealthBar: React.FC<HealthBarProps> = ({ player }) => {
  const health = useSelector((state: RootState) => state.game.health[player]);
  const maxHealth = 100; // Assuming max health is always 100

  return generateHealthBar(health, maxHealth);
};

export default HealthBar;
