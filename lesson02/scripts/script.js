// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var year = new Date().getFullYear();
  
    // Get the information of the last modification
    var lastModified = document.lastModified;
  
    // Get your name and your state or country 
    var yourName = "Juanita P. Aguilera";
    var yourStateOrCountry = "Rancagua - Chile.";
  
    // Fill the second paragraph with the information of the last modification
    document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;
  
    // Fill the first paragraph with the copyright symbol, the current year, your name, your state or country, and the Chilean flag
    document.getElementById("copyright-info").innerHTML = "&copy; " + year + " " + yourName + " - " + yourStateOrCountry ;
    
    // Wrap anchor links with buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      var button = document.createElement("button");
      button.appendChild(document.createTextNode("Scroll"));
      anchor.parentNode.insertBefore(button, anchor);
      button.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  