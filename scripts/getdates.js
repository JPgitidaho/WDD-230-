document.addEventListener("DOMContentLoaded", function () {

  const year = new Date().getFullYear();

  const lastModified = document.lastModified;

  const myName = "Juanita P. Aguilera";
  const myStateOrCountry = "Rancagua - Chile.";


  document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;


  document.getElementById("copyright-info").innerHTML = "&copy; " + year + " " + myName + " - " + myStateOrCountry;
});


function toggleMenu() {

  const menuContainer = document.getElementById("menu-container");
  const burgerMenu = document.getElementById("burger-icon");

  menuContainer.classList.toggle("show");
 
  burgerMenu.classList.toggle("active");
}


function toggleDarkMode() {
  
  const body = document.body;

  body.classList.toggle('dark-mode');

  const miHeader = document.getElementById("miHeader");
  if (miHeader) {
 
    miHeader.classList.toggle('dark-mode', body.classList.contains('dark-mode'));
  }
}



