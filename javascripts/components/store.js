import { printToDom } from '../helpers/util.js';
import { addToCart } from './cart.js';

// Object to hold book details
const storeBooks = [
  {
    name: 'The Legacy: Legend of Drizzt: Legacy of the Drow, Book 1',
    author: ' R. A. Salvatore',
    description:
      "Having found a measure of peace among the dwarves in the reclaimed Mithral Hall, Drizzt begins to know contentment for perhaps the first time in his tumultuous life. But for a dark elf renegade from a city ruled by priestesses of a demon goddess, no peace can long last. It is Lolth herself, the dreaded Queen of the Demonweb Pits, who musters her followers to pour up from the black depths of the Underdark to reclaim for their goddess the one soul that had managed to elude her. The soul of Drizzt Do'Urden.",
    price: '17.95',
    imgUrl: '../../img/legacy.jpg',
    isDiscounted: false
  },
  {
    name: 'Starless Night: Legend of Drizzt: Legacy of the Drow, Book 2',
    author: ' R. A. Salvatore',
    description:
      "The Underdark. A place of brooding darkness, where no shadows exist, and where Drizzt Do'Urden does not wish to go. The noble dark elf must return there, though, he must go back to find his friends in the gnome city of Blingdenstone, and on to Menzoberranzan, the city of drow. Only then can Drizzt discern what perils might reach out from that dark place to threaten his friends in Mithril Hall. ",
    price: '21.95',
    imgUrl: '../../img/starless.jpg',
    isDiscounted: true
  },
  {
    name: 'Siege of Darkness: Legend of Drizzt: Legacy of the Drow, Book 3',
    author: ' R. A. Salvatore',
    description:
      "Rising up from the black depths of the Underdark, the drow once more meet the dwarves of Mithral Hall. Bruenor Battlehammer, with Drizzt at his side, won't go down without a fight - but they'll have to fight without Wulfgar or Catti-brie at their sides.",
    price: '21.95',
    imgUrl: '../../img/darkness.jpg',
    isDiscounted: true
  },
  {
    name: 'Passage to Dawn: Legend of Drizzt: Legacy of the Drow, Book 4',
    author: ' R. A. Salvatore',
    description:
      "Drizzt and Catti-brie have been away from Mithral Hall for six long years, but the pain of a lost companion still weighs heavily on their strong shoulders. Chasing pirates aboard Captain Deudermont's Sea Sprite is enough to draw their attention away from their grief. Then a mysterious castaway on an uncharted island sends them back to the very source of their pain, and into the clutches of a demon with vengeance on his mind.",
    price: '21.95',
    imgUrl: '../../img/passage.jpg',
    isDiscounted: true
  }
];

const loadCards = () => {
  let newString = '';
  for (let i = 0; i < storeBooks.length; i++) {
    const element = storeBooks[i];
    newString += `<div class="card mx-2 shadow text-white bg-secondary" style="width: 23rem;">
        <img class="card-img-top" src="${element.imgUrl}" alt="${element.name}">
        <div class="card-body">
            <h5 class="book-name card-title">${element.name}</h5>
            <h6 class="card-text">${element.author}</h6>
            <p class="card-text">${element.description}</p>
        </div>
        <div class="card-footer bg-light text-dark">
            <h5 class="align-middle" style="display:inline">Price:  <span class="badge badge-warning">$${
              element.price
            }</span></h5>
            <button type="button" class="purchase-btn btn btn-primary float-right">Purchase</button>

        </div>
    </div>`;
  }
  printToDom(newString, 'books');
};

// Get Method for the selected book
const getBookInfo = (bookName) => {
  const bookIndex = storeBooks.findIndex((book) => book.name === bookName);
  if (bookIndex === 'Undefined') {
    alert(`Could not find a book named ${bookName}`);
  }
  return storeBooks[bookIndex];
};

const purchaseButtonEvents = () => {
  const storeBooks = document.getElementsByClassName('purchase-btn');
  for (let i = 0; i < storeBooks.length; i++) {
    const element = storeBooks[i];
    element.addEventListener('click', () => {
      const selectedBookName = event.target.parentElement.previousElementSibling.firstElementChild.innerHTML;
      addToCart(selectedBookName);
    });
  }
};

const attachStoreEvents = () => {
  purchaseButtonEvents();
};

export { loadCards, attachStoreEvents, getBookInfo };
