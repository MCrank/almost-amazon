import { loadCards, attachStoreEvents } from './components/store.js';

const initializeApp = () => {
  loadCards();
  attachStoreEvents();
};

initializeApp();
