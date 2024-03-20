document.addEventListener("DOMContentLoaded", function() {
    const weatherSection = document.querySelector('.weather');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function showElements() {
      
  
      if (isInViewport(weatherSection)) {
        weatherSection.classList.add('show');
      }
    }
  
    // Mostrar elementos al cargar la página
    showElements();
  
    // Mostrar elementos al hacer scroll
    window.addEventListener('scroll', showElements);
  });

  
  