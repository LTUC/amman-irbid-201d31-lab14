/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
  let optionEl = document.createElement('option');
  optionEl.textContent = Product.allProducts[i].name;
  selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  catalogForm.reset();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  const selectElement = document.getElementById('items');
  const optionSelected = selectElement.options[selectElement.selectedIndex].text;
  
  // TODO: get the quantity
  const quantityEl = document.getElementById('quantity');
  const quantity = quantityEl.value;

  // TODO: using those, add one item to the Cart
  cart.items.push(new CartItem(optionSelected,quantity));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCount = document.getElementById('itemCount');
  let itemslength  = JSON.parse(localStorage.getItem('cart')).length;
  itemCount.textContent = ` ${itemslength}`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  const selectElement = document.getElementById('items');
  const optionSelected = selectElement.options[selectElement.selectedIndex].text;
  
  
  const quantityEl = document.getElementById('quantity');
  const quantity = quantityEl.value;
  // TODO: Add a new element to the cartContents div with that information
 let cartContentsEl = document.getElementById('cartContents');
 let pEl = document.createElement('p');
 pEl.textContent = `${optionSelected} was added ${quantity} times.`
 cartContentsEl.appendChild(pEl);

 
 
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
showCart();
function showCart(){
  let items  = JSON.parse(localStorage.getItem('cart'));
  if(items!==null){
  let cartContentsEl = document.getElementById('cartContents');
  for (let i = 0; i < items.length; i++) {
    let pEl = document.createElement('p');
    pEl.textContent =` ${items[i].product} was added ${items[i].quantity} times `;
    cartContentsEl.appendChild(pEl);
  }
}
}