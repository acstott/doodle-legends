import React from 'react';
import Card from '@game/Card'; // Ensure the correct path to the Card class

export function generateCard(
  card: Card,
  onPlay: () => void
): JSX.Element {
  // Determine the type-based class name
  const typeClass = ['water', 'fire', 'magic', 'lightning'].includes(card.type)
    ? card.type
    : 'default';

  return (
    <div className={`card ${typeClass}`}>
      <h3>{card.name}</h3>
      <p>Type: {card.type}</p>
      <p>Cost: {card.cost}</p>
      <button className="card-play-button" onClick={onPlay}>Play</button>
    </div>
  );
}

export function generateCards(
  cards: Card[],
  onPlay?: (card: Card) => void
): JSX.Element[] {
  return cards.map((card) =>
    generateCard(card, () => onPlay && onPlay(card))
  );
}

// Generate a player's hand
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

// Generate the game center (deck, discard pile, play area)
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
  const healthPercentage = (health / maxHealth) * 100;

  return (
    <div className="health-bar">
      <div
        className="health-bar-fill"
        style={{ width: `${healthPercentage}%` }}
      />
    </div>
  );
}

// Generate log entries for turn 
export function generateLogEntries(log: string[]): JSX.Element[] {
  return log.map((entry, index) => <li key={index}>{entry}</li>);
}

// Generate message for static content 
export function generateStaticMessage(message: string): JSX.Element {
  return <h1>{message}</h1>;
}
