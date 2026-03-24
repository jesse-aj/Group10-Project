// darkmode.js - handles dark mode toggle for all pages

// Find the toggle button in the navbar
const darkModeToggle = document.getElementById("darkmode-toggle");

// Check if the user already had dark mode on from a previous visit
// localStorage remembers settings even after closing the browser
if (localStorage.getItem("darkmode") === "enabled") {
  document.body.classList.add("dark");
  darkModeToggle.textContent = "☀️";
}



// When the toggle button is clicked
darkModeToggle.addEventListener("click", function () {


  // If dark mode is currently on, turn it off
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    darkModeToggle.textContent = "🌙";


    // Remember the user turned it off
    localStorage.setItem("darkmode", "disabled");

  } else {
    // If dark mode is off, turn it on
    document.body.classList.add("dark");
    darkModeToggle.textContent = "☀️";

    
    // Remember the user turned it on
    localStorage.setItem("darkmode", "enabled");
  }

});