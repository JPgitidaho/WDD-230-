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

  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Check if the header is present on the page
  const miHeader = document.getElementById("miHeader");
  if (miHeader) {
    // Toggle the 'dark-mode' class on the header for dark mode
    miHeader.classList.toggle('dark-mode', body.classList.contains('dark-mode'));
  }
}



