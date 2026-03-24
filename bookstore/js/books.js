// books.js - handles all logic for the books page

// Wait for the page to fully load before running anything
document.addEventListener("DOMContentLoaded", function () {

     // Find the container where we will drop all the book cards
  const booksContainer = document.getElementById("books-container");


  // Find the search input and filter buttons
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");

   // Keep track of which category is currently selected
  // "all" means show everything by default
  let activeCategory = "all";


   //  RENDER BOOKS FUNCTION
  // This function takes an array of books and draws the cards on the page
  function renderBooks(booksToRender) {

    // Clear whatever is currently showing before drawing new cards
    booksContainer.innerHTML = "";

    // If no books match the search or filter, show a message
    if (booksToRender.length === 0) {
      booksContainer.innerHTML = "<p>No books found.</p>";
      return;
    }

     // Loop through each book and create a card
    booksToRender.forEach(function (book) {


      const card = document.createElement("div");
      card.classList.add("book-card");

      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="book-card-body">
          <h3>${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price">GHS ${book.price}</p>

          <div class="card-actions">


          <!-- Add to cart button -->
            <!-- data-id tells cart.js which book was clicked -->
            <button 
              class="btn btn-outline add-to-cart" 
              data-id="${book.id}">
              Add to Cart
            </button>


             <!-- Individual enquire button goes to that book's seller -->
            <a 
              href="https://wa.me/${book.whatsapp}?text=Hi, I am interested in ${book.title} priced at GHS ${book.price}. Is it available?" 
              target="_blank" 
              class="btn btn-primary">
              Enquire
            </a>

          </div>
        </div> `;
      booksContainer.appendChild(card);
    });
  }







// === FILTER FUNCTION ===
  // Filters books by active category and current search text
  function filterBooks() {
     // Get whatever the user has typed, lowercase for easy comparison
    const searchText = searchInput.value.toLowerCase();

    const filtered = books.filter(function (book) {
         // Check if the book matches the active category
      // if activeCategory is "all" every book passes this check
      const matchesCategory =
        activeCategory === "all" || book.category === activeCategory;

      // Check if the title or author contains the search text
      const matchesSearch =
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText);

      // Book only shows if it passes BOTH checks
      return matchesCategory && matchesSearch;
    });

    // Render only the filtered books
    renderBooks(filtered);
  }



    // SEARCH EVENT 
  // Runs filterBooks every time the user types something
  searchInput.addEventListener("input", filterBooks);

  // FILTER BUTTON EVENTS 
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      // Remove active class from all buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add active class to the button that was clicked
      button.classList.add("active");

      // Update activeCategory to the clicked button's data-category value
      activeCategory = button.dataset.category;

      // Re-run the filter
      filterBooks();
    });
  });

  // Show all books when the page first loads
  renderBooks(books);

});









