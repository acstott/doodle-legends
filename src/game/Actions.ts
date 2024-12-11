// Actions.ts

import { createAction } from '@reduxjs/toolkit';
import Card from '@game/Card';

// Define game actions
export const drawCard = createAction<{ player: string }>('game/drawCard');
export const playCard = createAction<{ player: string; card: Card }>('game/playCard');
export const attack = createAction<{ attacker: string; defender: string; damage: number }>('game/attack');
export const discardCard = createAction<{ player: string; card: Card }>('game/discardCard');
export const endTurn = createAction<{ player: string }>('game/endTurn');

// Define additional actions for specific gameplay mechanics
export const initializeGame = createAction('game/initializeGame');
export const dealInitialHands = createAction('game/dealInitialHands');
export const setActionsPerTurn = createAction<{ player: string; actions: number }>('game/setActionsPerTurn');
export const updateHealth = createAction<{ player: string; amount: number }>('game/updateHealth');

// Debug or utility actions
export const shuffleDeck = createAction<{ player: string }>('game/shuffleDeck');
export const resetGame = createAction('game/resetGame');
