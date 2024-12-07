import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import GameMat from '@components/GameMat'; // Adjust the path as necessary
import store from '@store/store';
import '../styles/components.css'; // Adjust path if necessary
import '../styles/global.css'; // Adjust path if necessary
import { Devvit } from '@devvit/public-api';

// React Rendering
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Devvit Configuration
Devvit.configure({});

// Define a custom post type for Doodle Legends
Devvit.addCustomPostType({
  name: 'doodle_game',
  description: 'Play Doodle Legends in this post!',
  render: () => (
    <Provider store={store}>
      <React.StrictMode>
        <GameMat />
      </React.StrictMode>
    </Provider>
  ), // Reference the GameMat component directly
});

// Add "Play Game" menu item
Devvit.addMenuItem({
  location: 'post',
  label: 'Play Doodle Legends',
  onPress: async (event, context) => {
    try {
      context.ui.showToast('Redirecting to Doodle Legends...');
      const subreddit = 'DoodleLegends'; // Your subreddit name
      const playtestUrl = `https://www.reddit.com/r/${subreddit}/?playtest=doodle-legends`;

      context.ui.navigateTo(playtestUrl); // Open the game URL in a new tab
    } catch (error) {
      console.error('Error launching Doodle Legends:', error);
      context.ui.showToast('Something went wrong launching the game.');
    }
  },
});

// Add "Play Card" menu item
Devvit.addMenuItem({
  location: 'post',
  label: 'Play Card',
  onPress: async (event, context) => {
    try {
      const card = {
        name: 'Fire Dragon',
        type: 'fire',
        description: 'Breathes fire to damage enemies.',
        effect: 'Deals 10 damage to the opponent.',
      };

      const commentBody = `
        🃏 **Card Played:** ${card.name}  
        🔥 **Type:** ${card.type}  
        📜 **Description:** ${card.description}  
        🎯 **Effect:** ${card.effect}  
      `;

      console.log(`Simulating posting comment: ${commentBody}`);
      context.ui.showToast(`Simulated: Card "${card.name}" played successfully!`);
    } catch (error) {
      console.error('Error playing card:', error);
      context.ui.showToast('Something went wrong while playing the card.');
    }
  },
});

// Export Devvit for integration
export default Devvit;
