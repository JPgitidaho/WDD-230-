document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  const year = new Date().getFullYear();

  // Get the information of the last modification
  const lastModified = document.lastModified;

  const myName = "Juanita P. Aguilera";
  const myStateOrCountry = "Rancagua - Chile.";

  // Fill the second paragraph with the information of the last modification
  document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;

  // Fill the first paragraph with the copyright symbol, the current year, my name, my state or country
  document.getElementById("copyright-info").innerHTML = "&copy; " + year + " " + myName + " - " + myStateOrCountry;
});

// Function to toggle the visibility of the menu
function toggleMenu() {
  // Get the menu container and the burger icon
  const menuContainer = document.getElementById("menu-container");
  const burgerMenu = document.getElementById("burger-icon");

  // Toggle the 'show' class to display or hide the menu
  menuContainer.classList.toggle("show");
  // Toggle the 'active' class to change the appearance of the burger icon
  burgerMenu.classList.toggle("active");
}

// Function to toggle dark mode
function toggleDarkMode() {
  // Get the document body
  const body = document.body;
  // Get the saved dark mode state from localStorage
  const savedDarkMode = localStorage.getItem('dark-mode');

  // If dark mode is enabled, toggle the 'dark-mode' class on the body
  if (savedDarkMode === 'true') {
    body.classList.toggle('dark-mode');
  }
}



