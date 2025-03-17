const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImage(i) {
    images.forEach((img, idx) => img.classList.toggle('active', idx === i));
}

setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 3000); // Auto-switch every 3 seconds