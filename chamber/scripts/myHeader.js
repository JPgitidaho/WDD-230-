document.addEventListener("DOMContentLoaded", function () {
  const miHeader = document.getElementById("miHeader");
  const burgerIcon = document.getElementById("burger-icon");
  let isHovered = false;

  miHeader.addEventListener("mouseenter", function () {
    isHovered = true;
    miHeader.style.backgroundColor = "#15616dff";
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
        miHeader.style.backgroundColor = "#15616dff";
      } else {
        miHeader.style.backgroundColor = "#15616dff";
      }
    }
  });

  burgerIcon.addEventListener("click", function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    burgerIcon.classList.toggle("active");
  });
});
