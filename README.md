# OpenShelf Books

A modern, responsive online bookstore built with vanilla HTML, CSS, and JavaScript. Browse and purchase self-help, Christian, leadership, finance, communication, and relationship books with ease.

🌐 **Live Demo:** [https://bookstore-five-phi.vercel.app](https://group-10-bookstore.vercel.app/)

## Features

✨ **Core Features:**
- 📚 Browse curated collection of books with detailed information
- 🛒 Shopping cart functionality with real-time item count
- 🌙 Dark mode toggle for comfortable reading
- 📱 Fully responsive design for all devices
- 🎨 Modern, clean user interface
- 💬 WhatsApp integration for checkout and customer support
- ⚡ Fast and lightweight - no external frameworks required

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with responsive design
- **Hosting:** Vercel
- **Language Composition:** 42.9% JavaScript | 30.9% HTML | 26.2% CSS

## Project Structure

```
bookstore/
├── index.html          # Homepage with featured books
├── books.html          # Full book catalog
├── about.html          # About the bookstore
├── contact.html        # Contact information
├── favicon.ico         # Browser tab icon
│
├── css/
│   └── style.css       # All styling
│
├── js/
│   ├── index.js        # Homepage functionality
│   ├── books-data.js   # Book inventory and database
│   ├── cart.js         # Shopping cart logic
│   └── darkmode.js     # Dark mode toggle
│
└── images/             # Book covers and assets
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies required!

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jesse-aj/Group10-Project.git
   cd Group10-Project
   ```

2. **Navigate to the bookstore directory:**
   ```bash
   cd bookstore
   ```

3. **Open in your browser:**
   - Double-click `index.html` to open it directly, OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with live-server)
     npx live-server
     ```
   - Visit `http://localhost:8000` (or the port shown)

## Usage

### Browse Books
- Visit the **Books** page to see the full catalog
- Click on any book card to view details
- Add books to your cart with the "Add to Cart" button

### Shopping Cart
- Click the 🛒 cart icon in the navigation bar
- View all items in your cart with prices
- See the total cost in GHS (Ghana Cedis)
- Click "Order via WhatsApp" to complete your purchase

### Dark Mode
- Use the toggle switch in the navigation bar to enable/disable dark mode
- Your preference is saved for future visits

## Pages

### Home Page (`index.html`)
- Hero section with call-to-action
- Featured books showcase
- Navigation links

### Books Page (`books.html`)
- Complete book inventory
- Book details (title, author, price)
- Add to cart functionality
- Filter and search options

### About Page (`about.html`)
- Information about OpenShelf Books
- Company mission and values
- Team information

### Contact Page (`contact.html`)
- Contact information
- Customer support details
- Newsletter signup

## Key JavaScript Modules

### `books-data.js`
Contains the complete book inventory with:
- Book titles, authors, descriptions
- Prices (in GHS)
- Book categories
- Cover image paths

### `index.js`
Handles homepage functionality:
- Display featured books
- Dynamic content rendering
- Event listeners for buttons

### `cart.js`
Shopping cart management:
- Add/remove items from cart
- Update cart count badge
- Calculate totals
- WhatsApp order integration
- Local storage persistence

### `darkmode.js`
Dark mode implementation:
- Toggle dark/light theme
- Save user preference
- Apply theme on page load

## Customization

### Add New Books
Edit `js/books-data.js` and add entries to the books array:
```javascript
{
  id: uniqueId,
  title: "Book Title",
  author: "Author Name",
  price: 49.99,
  category: "Self-Help",
  description: "Book description...",
  image: "images/book-cover.jpg"
}
```

### Modify Styling
Edit `css/style.css` to customize:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Dark mode styles

### Update Contact Info
- Edit `contact.html` with your contact details
- Update WhatsApp number in `js/cart.js` for order processing

## Future Enhancements

- 🔐 User authentication system
- 💳 Secure payment integration (Stripe, Paystack)
- 📧 Email order notifications
- ⭐ Customer reviews and ratings
- 🔍 Advanced search and filtering
- 📊 Admin dashboard
- 🚚 Order tracking system

## Contributing

This is a Group 10 project. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact & Support

📧 Have questions? Visit the [Contact Page](bookstore/contact.html)

💬 For order inquiries, use WhatsApp integration from the cart

🐛 Found a bug? [Create an issue](https://github.com/jesse-aj/Group10-Project/issues)

---

**Built with ❤️ by Group 10**

Last updated: March 2026
