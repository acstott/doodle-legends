import { GameState, Player } from './GameState';
import Card from './Card';

export interface LocalGameState {
  health: { [player: string]: number };
  discardPile: { [player: string]: Card[] };
  log: string[];
}

const MAX_HEALTH = 100; // Maximum health value

export default class RulesEngine {
  static applyCardEffects(card: Card, player: Player, gameState: LocalGameState): LocalGameState {
    const opponent = player === 'Player 1' ? 'Player 2' : 'Player 1';

    // Apply card damage to the opponent
    gameState.health[opponent] = Math.max(0, gameState.health[opponent] - card.attack);

    // Log the attack
    gameState.log.push(
      `${player} played ${card.name}, dealing ${card.attack} damage to ${opponent}.`
    );

    // Handle card-specific effects
    if (card.effect) {
      switch (card.effect) {
        case 'revive':
          gameState.health[player] = Math.min(MAX_HEALTH, gameState.health[player] + 20);
          gameState.log.push(`${card.name} revived ${player}, restoring 20 HP.`);
          break;
        case 'stun':
          gameState.log.push(`${card.name} stunned ${opponent}, skipping their next turn.`);
          // Additional stun logic could go here
          break;
        case 'poison':
          gameState.log.push(`${card.name} poisoned ${opponent}, causing damage over time.`);
          // Additional poison logic could go here
          break;
        default:
          gameState.log.push(`${card.name} had no special effect.`);
          break;
      }
    }

    // If the opponent's health reaches 0, log the defeat
    if (gameState.health[opponent] === 0) {
      gameState.log.push(`${opponent} has been defeated! ${player} wins the game!`);
    }

    return gameState;
  }

  static moveToDiscardPile(card: Card, player: Player, gameState: LocalGameState): LocalGameState {
    if (!gameState.discardPile[player]) {
      gameState.discardPile[player] = []; // Ensure discard pile exists
    }
    gameState.discardPile[player].push(card);
    gameState.log.push(`${card.name} was moved to ${player}'s discard pile.`);
    return gameState;
  }
}
