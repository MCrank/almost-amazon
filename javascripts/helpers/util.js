const bookPage = document.getElementById('books');
const cartPage = document.getElementById('shopping-cart');

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const calculateDiscount = (bookPrice) => {
  return (bookPrice - parseFloat(bookPrice) * 0.1).toFixed(2);
};

const showPages = (whichPage) => {
  if (whichPage === 'books') {
    bookPage.classList.remove('d-none');
    cartPage.classList.add('d-none');
  } else {
    bookPage.classList.add('d-none');
    cartPage.classList.remove('d-none');
  }
};

const updateCartCounter = () => {
  let cartItemCount = document.getElementById('counter');
  cartItemCount.innerHTML = parseInt(cartItemCount.innerHTML, 10) + 1;
};

export { printToDom, calculateDiscount, showPages, updateCartCounter };
