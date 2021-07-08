/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
let tbodyEl = document.getElementById('body');
table.appendChild(tbodyEl);
tbodyEl.addEventListener('click', removeItemFromCart);

let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log(cart.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

tbodyEl.textContent=''
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let trEl;
  let tdEl;
  let aEl;
function showCart() {

  // TODO: Find the table body
  
for (let i = 0; i < cart.items.length; i++) {
   trEl=document.createElement('tr');
  tdEl = document.createElement('td');
   aEl =document.createElement('a');
  aEl.setAttribute('id',`${i}`)
  aEl.textContent='x';
  tdEl.appendChild(aEl);
  trEl.appendChild(tdEl);
  let tdEl1 = document.createElement('td');
  tdEl1.textContent=`${cart.items[i].quantity}`;
  trEl.appendChild(tdEl1);
  let tdEl2 = document.createElement('td');
  tdEl2.textContent=`${cart.items[i].product}`;
  trEl.appendChild(tdEl2);
  tbodyEl.appendChild(trEl);
}

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  

  console.log();
  event.preventDefault();
cart.removeItem() ;
cart.saveToLocalStorage();
renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
