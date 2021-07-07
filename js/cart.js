/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName('tbody')[0];
  tbody.textContent = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let tbody = document.getElementsByTagName('tbody')[0];

  
  for(let i= 0;i<cart.items.length;i++){
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = '✂';
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = cart.items[i].quantity;
    
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = cart.items[i].product;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tbody.appendChild(trEl);
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
 let tr = event.target.parentNode;
console.log(tr);
tr.classList.add('remove');
let item = document.querySelector(`.remove td:nth-child(3)`).innerHTML;
console.log(cart);
cart.removeItem(item);
console.log(cart);
table.deleteRow(tr.rowIndex);
cart.saveToLocalStorage();
renderCart();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
