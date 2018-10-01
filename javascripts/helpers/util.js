const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const calculateDiscount = (bookPrice) => {
  return (bookPrice - parseFloat(bookPrice) * 0.1).toFixed(2);
};

const showPages = () => {
  console.log('yeehaw');
};

const updateCartCounter = () => {
  const cartIcon = document.getElementById('');
};

export { printToDom, calculateDiscount };
