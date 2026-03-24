// cart.js - handles cart logic for all pages

// Our cart is just an array that stores books the user adds
// We load from localStorage so cart survives page refreshes and reload
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE CART COUNT IN NAVBAR

// This runs every time something changes in the cart
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;

}

// SAVE CART TO LOCALSTORAGE 

// Every time cart changes we save it so it survives page refresh
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART 

function addToCart(bookId) {

  // Find the book in our books array using its id
  const book = books.find(function (b) {
    return b.id === bookId;
  });


  // Check if the book is already in the cart
  const alreadyInCart = cart.find(function (b) {
    return b.id === bookId;
  });

  // If it's already there don't add it again

  if (alreadyInCart) {
    alert(`"${book.title}" is already in your cart.`);
    return;
  }

  // Add the book to the cart array
  cart.push(book);


  // Save and update the count badge
  saveCart();
  updateCartCount();

  alert(`"${book.title}" added to cart!`);
}

// REMOVE FROM CART
function removeFromCart(bookId) {

  // Filter out the book with this id
  cart = cart.filter(function (b) {
    return b.id !== bookId;
  });

  saveCart();
  updateCartCount();
}

// CHECKOUT VIA WHATSAPP 
function checkout() {

  // If cart is empty don't do anything
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // Build the order message line by line
  let message = "Hi, I would like to order the following books:%0A%0A";
  // %0A is a line break in WhatsApp URLs

  let total = 0;

  cart.forEach(function (book) {
    message += `- ${book.title} by ${book.author} - GHS ${book.price}%0A`;
    total += book.price;
  });

  message += `%0ATotal: GHS ${total}`;
  message += `%0A%0APlease confirm availability. Thank you!`;

  // All cart orders go to YOUR number
  const yourNumber = "23357610844";

  // Open WhatsApp with the full order message
  window.open(`https://wa.me/${yourNumber}?text=${message}`, "_blank");
}

// LISTEN FOR ADD TO CART BUTTON CLICKS

// We use document instead of each button because

// the buttons are created dynamically by JS not hardcoded in HTML
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {

    // Get the book id from the button's data-id attribute

    // parseInt converts it from a string to a number
    const bookId = parseInt(e.target.dataset.id);
    addToCart(bookId);
  }
});


// Run on page load to show correct count if cart already has items
updateCartCount();