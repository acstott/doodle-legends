# Doodle Legends: A Trading Card Game Experience

Welcome to **Doodle Legends**, a turn-based multiplayer trading card game built for the Reddit community using the Devvit API.

## Table of Contents

- [About the Game](#about-the-game)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Gameplay Overview](#gameplay-overview)
- [Contributing](#contributing)
- [License](#license)

---

## About the Game

Doodle Legends is a trading card game (TCG) designed for immersive gameplay. Players build decks, take turns, and use strategic combinations of cards to defeat their opponents. The game integrates seamlessly with Reddit through custom post types, triggers, and menu items.

---

## Features

- **Turn-Based Gameplay**: Play and track game turns with Redux-powered state management.
- **Multiplayer Support**: Play against other Reddit users through Devvit integration.
- **Custom Card Mechanics**: Propose and vote on new cards and rules.
- **Interactive UI**: Use React components for health bars, card hands, and turn logs.
- **Community Integration**: Integrates with Reddit posts, comments, and triggers.

---

## Project Structure

```plaintext
doodle-legends/
├── public/
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # Icon for the web app
├── src/
│   ├── index.tsx               # React entry point
│   ├── App.tsx                 # Main React component
│   ├── components/             # React UI components
│   │   ├── CardComponent.tsx   # UI for individual cards
│   │   ├── PlayerHand.tsx      # Hand management
│   │   ├── HealthBar.tsx       # Health display
│   │   ├── TurnLog.tsx         # Action log
│   │   └── MultiplayerGame.tsx # Multiplayer features
│   ├── game/                   # Core game logic
│   │   ├── Card.ts             # Card class and logic
│   │   ├── GameState.ts        # Game state initialization
│   │   ├── Actions.ts          # Actions and effects logic
│   │   └── GameTurn.ts         # Turn sequence management
│   ├── store/                  # Redux store and slices
│   │   ├── store.ts            # Redux store configuration
│   │   ├── gameSlice.ts        # Slice for game state and actions
│   ├── websocket/              # WebSocket management
│   │   ├── Server.ts           # WebSocket server logic
│   │   └── Client.tsx          # WebSocket client for React
│   ├── styles/                 # Styles for the app
│   │   ├── components.css      # Component-specific styles
│   │   └── global.css          # Global styles
│   ├── main.tsx                # Entry point for Devvit integration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── webpack.config.js           # Webpack configuration
└── dist/                       # Output directory (generated after build)
```