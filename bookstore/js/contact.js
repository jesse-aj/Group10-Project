// contact.js - handles the contact form WhatsApp redirect

function sendMessage() {

  // Get values from each field
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation - make sure nothing is empty
  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  // Build the WhatsApp message
  const whatsappMessage = 
    `Hi, my name is ${name}.%0A` +
    `Email: ${email}%0A` +
    `Phone: ${phone}%0A%0A` +
    `Message: ${message}`;

  // Your number - all contact form messages come to you
  const yourNumber = "233576170844";

  // Open WhatsApp with the message
  window.open(`https://wa.me/${yourNumber}?text=${whatsappMessage}`, "_blank");
}