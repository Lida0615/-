document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".image-slider .slide");
    let current = 0;

    setInterval(() => {
      const currentSlide = slides[current];
      currentSlide.classList.remove("active");
      currentSlide.classList.add("out-left");

      current = (current + 1) % slides.length;
      const nextSlide = slides[current];

      // Сброс стилей, чтобы вернуть slide для повторной анимации
      nextSlide.classList.remove("out-left");

      // Плавное включение следующего слайда
      setTimeout(() => {
        nextSlide.classList.add("active");
        currentSlide.classList.remove("out-left");
      }, 20); // чуть-чуть, чтобы CSS успел применить изменения
    }, 4000);
  });