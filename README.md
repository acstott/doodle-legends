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
│   │   ├── GameMat.tsx         # Main game mat layout
│   │   └── MultiplayerGame.tsx # Multiplayer features (coming soon)
│   ├── game/                   # Core game logic
│   │   ├── Card.ts             # Card class and logic
│   │   ├── Deck.ts             # Deck configuration with 40 cards
│   │   ├── GameState.ts        # Game state initialization
│   │   ├── GameTurn.ts         # Turn sequence and AI logic
│   ├── rules/                  # Rules engine
│   │   └── RulesEngine.ts      # Logic for handling damage, effects, and game mechanics
│   ├── utils/                  # Utility functions
│   │   └── generators.tsx      # JSX generators for cards and UI
│   ├── store/                  # Redux store and slices
│   │   ├── store.ts            # Redux store configuration
│   │   ├── gameSlice.ts        # Slice for game state and actions
│   ├── simulation/             # Turn sequence simulation
│   │   └── TurnSimulation.ts   # Simulation of turns and AI behavior
│   ├── styles/                 # Styles for the app
│   │   ├── components.css      # Component-specific styles
│   │   └── global.css          # Global styles
│   ├── main.tsx                # Entry point for Devvit integration
├── dist/                       # Output directory (generated after build)
│   ├── main.js                 # Compiled entry point for Devvit
├── manifest.json               # Devvit app configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── webpack.config.js           # Webpack configuration
└── README.md                   # Project documentation
```

``` Play Mat Layout
----------------------------------------------
|            Player 2 (AI) - Health: XX      |
| [Card Back] [Card Back] [Card Back]        |
|--------------------------------------------|
|             Action Log / Turn Info         |
| Current Turn: Player X                     |
| Last Move: "Player X played Fire Dragon!"  |
|--------------------------------------------|
|            Player 1 (You) - Health: XX     |
|[Card 1] [Card 2] [Card 3] [Card 4] [Card 5]|
----------------------------------------------
```