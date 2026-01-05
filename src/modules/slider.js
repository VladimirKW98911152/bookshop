export function initSlider() {
  const slider = document.querySelector('.slider');
  const dots = document.querySelectorAll('.dot');
  const images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg'];
  let currentIndex = 0;

  function updateSlider() {
    slider.style.backgroundImage = `url(./images/${images[currentIndex]})`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateSlider();
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 5000);

  updateSlider();
}
