import { loadCards, attachEvents } from './components/store.js';

const initializeApp = () => {
  loadCards();
  attachEvents();
};

initializeApp();
