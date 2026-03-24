// index.js - handles logic for the home page only

// Wait for the page to fully load before running anything
document.addEventListener("DOMContentLoaded", function () {

  // Find the empty div we created in index.html with id="featured-books"
  const featuredContainer = document.getElementById("featured-books");

  // Loop through the featuredBooks array from books-data.js
  // For each book, create a card and add it to the page
  featuredBooks.forEach(function (book) {

    // Create a div element that will be our book card
    const card = document.createElement("div");

    // Give it the book-card class so our CSS styles it
    card.classList.add("book-card");

    // Build the inner HTML of the card using the book's data
    card.innerHTML = `
      <!-- Book cover image -->
      <img src="${book.image}" alt="${book.title}">

      <!-- Card body with book details -->

      <div class="book-card-body">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="price">GHS ${book.price}</p>

        <!-- Enquire button - opens WhatsApp with a pre-filled message -->

        <a 
          href="https://wa.me/${book.whatsapp}?text=Hi, I am interested in ${book.title} priced at GHS ${book.price}. Is it available?" 
          target="_blank" 
          class="btn btn-primary">
          Enquire
        </a>
        
      </div>
    `;

    // Drop the finished card into the featured-books container
    featuredContainer.appendChild(card);
  });

});