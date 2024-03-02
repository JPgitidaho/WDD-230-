document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.fade-in');
    images.forEach(function (image) {
        image.classList.add('animate');
        image.classList.add('visible');
    });
});

