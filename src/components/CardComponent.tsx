import React from 'react';
import { generateCard } from '../utils/generators';
import Card from '../game/Card';

interface CardProps {
  card: Card;
  onPlay: () => void;
}

const CardComponent: React.FC<CardProps> = ({ card, onPlay }) => {
  return generateCard(card, onPlay);
};

export default CardComponent;
