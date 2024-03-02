document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  const year = new Date().getFullYear();

  // Get the information of the last modification
  const lastModified = document.lastModified;

  const myName = "Juanita P. Aguilera";
  const myStateOrCountry = "Rancagua - Chile.";

  const miHeader = document.getElementById("miHeader");
  const burgerIcon = document.getElementById("burger-icon");
  let isHovered = false;

  miHeader.addEventListener("mouseenter", function () {
    isHovered = true;
    miHeader.style.backgroundColor = "#4e91c1bc";
  });

  miHeader.addEventListener("mouseleave", function () {
    isHovered = false;
    if (window.scrollY <= miHeader.clientHeight) {
      miHeader.style.backgroundColor = "transparent";
    }
  });

  document.addEventListener("scroll", function () {
    if (!isHovered) {
      if (window.scrollY > miHeader.clientHeight) {
        miHeader.style.backgroundColor = "#4e91c1bc";
      } else {
        miHeader.style.backgroundColor = "transparent";
      }
    }
  });

  burgerIcon.addEventListener("click", function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    burgerIcon.classList.toggle("active");
  
  });


  // Fill the second paragraph with the information of the last modification
  document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;

  // Fill the first paragraph with the copyright symbol, the current year, my name, my state or country
  document.getElementById("copyright-info").innerHTML = "&copy; " + year + " " + myName + " - " + myStateOrCountry;
});


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