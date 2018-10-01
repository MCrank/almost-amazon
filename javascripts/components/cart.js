import { printToDom, calculateDiscount, showPages, updateCartCounter } from '../helpers/util.js';
import { getBookInfo } from './store.js';

const cartBook = {
  name: '',
  price: '',
  hasDiscount: false,
  discountApplied: false
};

// Populate our shopping cart book object
const addToCart = (selectedBookName) => {
  const selectedBookInfo = getBookInfo(selectedBookName);
  cartBook.name = selectedBookInfo.name;
  cartBook.price = selectedBookInfo.price;
  cartBook.hasDiscount = selectedBookInfo.isDiscounted;
  cartBook.discountApplied = false;
  loadCart();
  enableDiscountBtn();
  updateCartCounter();
};

const loadCart = () => {
  let newString = '';
  newString = `<div id="cart" class="jumbotron">
    <h2 class="">${cartBook.name}</h2>
    <hr class="my-4">
    <h4>Price: $${cartBook.price}</h4>
    <button type="button" id="discount-btn" class="btn btn-primary float-left">Discount Available (10%)</button>
    <button type="button" id="cont-shopping-btn" class="btn btn-primary float-right">Continue Shopping</button>
    </div>`;
  showPages('cart');
  printToDom(newString, 'shopping-cart');
  attachCartEvents();
};

const enableDiscountBtn = () => {
  const discountBtn = document.getElementById('discount-btn');
  if (cartBook.hasDiscount === true && cartBook.discountApplied === false) {
    discountBtn.disabled = false;
  } else {
    discountBtn.disabled = true;
  }
};

const discountBtnEvent = () => {
  document.getElementById('discount-btn').addEventListener('click', () => {
    if (cartBook.discountApplied === false) {
      cartBook.price = calculateDiscount(cartBook.price);
      cartBook.discountApplied = true;
      loadCart();
      enableDiscountBtn();
    } else {
      alert('Sorry but the discount is already applied');
    }
  });
};

const contShoppingEvents = () => {
  document.getElementById('cont-shopping-btn').addEventListener('click', () => {
    showPages('books');
  });
};

const attachCartEvents = () => {
  discountBtnEvent();
  contShoppingEvents();
};

export { addToCart };
