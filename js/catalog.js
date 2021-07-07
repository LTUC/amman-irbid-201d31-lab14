/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
// object cart =[]
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
// console.log(cart.items);
const selectElement = document.getElementById('items');
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  for (let i in Product.allProducts) {
let optionEl =document.createElement('option');

optionEl.textContent=`${Product.allProducts[i].name}`
optionEl.setAttribute('value',`${Product.allProducts[i].name}`)
selectElement.appendChild(optionEl);
}
  }



// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
let sum=1;

function handleSubmit(event) {
 event.preventDefault();
  // TODO: Prevent the page from reloading
  
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();


sum++;

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  cart.addItem(event.target.items.value,event.target.quantity.value);
  // const cartItem = new CartItem(event.target.items.value,event.target.quantity.value);
// cart.items.push(cartItem);

  // cart.item.push(event.target.value);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
let counterEl=document.getElementById('itemCount');
counterEl.textContent=`${sum}`;
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
let  cartContentsEl=document.getElementById('cartContents');
 let ulEl =document.createElement('ul');
 cartContentsEl.appendChild(ulEl);
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information

 console.log(cart.items.length);
 
 ulEl.textContent="";

 for (let i = 0; i < cart.items.length; i++) {
 let liEl=document.createElement('li');
 liEl.textContent=`product : ${cart.items[i].product} and quantity : ${cart.items[i].quantity} `
 ulEl.appendChild(liEl);
}
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
