import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';
import GlobalSvgSprite from './images/Sprite/GlobalSvgSprite';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalSvgSprite />
      <App />
    </Provider>
  </React.StrictMode >
);
