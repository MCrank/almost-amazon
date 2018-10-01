import { printToDom, calculateDiscount } from '../helpers/util.js';
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
  loadCart();
  enableDiscountBtn();
};

const loadCart = () => {
  let newString = '';
  newString = `<div class="jumbotron">
    <h4 class="display-4">${cartBook.name}</h4>
    <hr class="my-4">
    <h4>Price: $${cartBook.price}</h4>
    <button type="button" id="discount-btn" class="btn btn-primary float-left">Discount Available (10%)</button>
    <button type="button" id="cont-shopping-btn" class="btn btn-primary float-right">Continue Shopping</button>
</div>`;
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

const attachCartEvents = () => {
  discountBtnEvent();
};

export { addToCart };
