import { printToDom } from '../helpers/util.js';
import { getBookInfo } from './store.js';

const cartBook = {
  name: '',
  price: '',
  hasDiscount: false
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
    <button type="button" id="discount-btn" class="btn btn-primary float-left">Discount Available</button>
    <button type="button" id="cont-shopping-btn" class="btn btn-primary float-right">Continue Shopping</button>
</div>`;
  printToDom(newString, 'shopping-cart');
};

const enableDiscountBtn = () => {
  const discountBtn = document.getElementById('discount-btn');
  if (cartBook.hasDiscount === true) {
    discountBtn.disabled = false;
  } else {
    discountBtn.disabled = true;
  }
};

const discountBtnEvent = () => {
  document.getElementById('discount-btn').addEventListener('click', () => {
    cartbok.price = calculateDiscount(cartBook.price);
    loadCart();
  });
};

export { addToCart };
