import { getBookPrice, getBookIsDiscounted } from './store.js';

const addToCart = () => {
  const selectedBookName = event.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  console.log(selectedBookName);
};

const loadCart = (bookName) => {
  let newString = '';
  newString = `<div class="jumbotron">
    <h1 class="display-4">Booya</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to
        featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <button type="button" class="btn btn-primary btn-lg float-left">Discount Available</button>
    <button type="button" class="btn btn-primary btn-lg float-right">Continue Shopping</button>
    <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
</div>`;
};

export { addToCart };
