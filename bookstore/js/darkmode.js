// darkmode.js - handles dark mode toggle for all pages

const darkModeToggle = document.getElementById("darkmode-toggle");

// Check if user already had dark mode on from a previous visit
if (localStorage.getItem("darkmode") === "enabled") {
  document.body.classList.add("dark");
}

// When the toggle switch is clicked
darkModeToggle.addEventListener("click", function () {

  if (document.body.classList.contains("dark")) {
    // Turn off dark mode
    document.body.classList.remove("dark");
    localStorage.setItem("darkmode", "disabled");
  } else {
    // Turn on dark mode
    document.body.classList.add("dark");
    localStorage.setItem("darkmode", "enabled");
  }

});