import React from 'react';
import Card from '@game/Card';

interface CardProps {
  card: Card;
  onPlay: () => void;
}

const CardComponent: React.FC<CardProps> = ({ card, onPlay }) => {
  // Define styles based on card type
  const getCardStyle = (type: string): React.CSSProperties => {
    const typeColours: Record<string, string> = {
      water: '#00BFFF', // Blue
      fire: '#FF4500', // Red
      magic: '#800080', // Purple
      lightning: '#FFD700', // Yellow
    };
    return {
      backgroundColor: typeColours[type] || '#FFFFFF', // Default to white if no match
      border: '2px solid #000',
      borderRadius: '8px',
      padding: '1rem',
      width: '120px',
      height: '180px',
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    };
  };

  return (
    <div style={getCardStyle(card.type)} className="card">
      <h3>{card.name}</h3>
      <p>Type: {card.type}</p>
      <p>Cost: {card.cost}</p>
      <button onClick={onPlay}>Play</button>
    </div>
  );
};

export default CardComponent;
