import { Devvit } from '@devvit/public-api';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const renderApp = () => {
  const container = document.createElement('div');
  container.id = 'doodle-legends-app';
  document.body.appendChild(container);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
};

Devvit.addMenuItem({
  location: 'post',
  label: 'Play Doodle Legends',
  onPress: (event, context) => {
    console.log(`Menu item pressed on post ${event.targetId}`);
    context.ui.showToast('Launching Doodle Legends...');
    renderApp();
  },
});

export default Devvit;
