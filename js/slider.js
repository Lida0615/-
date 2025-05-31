 document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const slides = track.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("dots");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateSlider() {
 const slideWidth = slides[0].getBoundingClientRect().width + 20;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  //  прогресс бар
      dotsContainer.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

 
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });

  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

 
    updateSlider();

   
  });