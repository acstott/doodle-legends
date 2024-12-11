import React from 'react';
import Card from '@game/Card'; // Ensure the correct path to the Card class

// Utility function for type-based class names
const getTypeClass = (type: string) =>
  ['water', 'fire', 'magic', 'lightning'].includes(type) ? type : 'default';

export function generateCard(card: Card, onPlay?: () => void): JSX.Element {
  const typeClass = getTypeClass(card.type);

  return (
    <div className={`card ${typeClass}`}>
      <h3>{card.name}</h3>
      <p>Type: {card.type}</p>
      <p>Cost: {card.cost}</p>
      {onPlay && (
        <button className="card-button" onClick={onPlay}>
          Play
        </button>
      )}
    </div>
  );
}

export function generateCards(
  cards: Card[],
  onPlay?: (card: Card) => void
): JSX.Element[] {
  return cards.map((card, index) => (
    <div key={index} className={`card ${getTypeClass(card.type)}`}>
      <div className="card-header">
        <span>{card.name}</span>
        <span>{card.cost} AP</span>
      </div>
      <div className="card-content">{card.description}</div>
      <div className="card-stats">
        <span>HP: {card.hp}</span>
        <span>DMG: {card.attack}</span>
      </div>
      {onPlay && (
        <button
          className="card-action"
          onClick={() => onPlay(card)}
        >
          Play
        </button>
      )}
    </div>
  ));
}

export function generatePlayerHand(player: string, cards: Card[]): JSX.Element {
  return (
    <div className={`player-area player-${player.toLowerCase().replace(' ', '-')}`}>
      <h2>{player}</h2>
      <div className={`player-hand player-${player === 'Player 1' ? '1' : '2'}`}>
        {generateCards(cards)}
      </div>
    </div>
  );
}

export function generateGameCenter(deckCount: number): JSX.Element {
  return (
    <div className="play-area">
      <div className="play-zone">Play Zone</div>
      <div className="deck">Deck: {deckCount} cards</div>
      <div className="discard-pile">Discard Pile: 0 cards</div>
    </div>
  );
}

export function generateHealthBar(health: number, maxHealth: number): JSX.Element {
  const healthPercentage = Math.max(0, (health / maxHealth) * 100); // Avoid negative values

  return (
    <div className="health-bar">
      <div
        className="health-bar-fill"
        style={{ width: `${healthPercentage}%` }}
      />
    </div>
  );
}

export function generateLogEntries(log: string[]): JSX.Element[] {
  return log.map((entry, index) => <li key={index}>{entry}</li>);
}

export function generateStaticMessage(message: string): JSX.Element {
  return <h1>{message}</h1>;
}
