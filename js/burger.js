document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");


    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });


    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });


    const mobileLinks = mobileMenu.querySelectorAll("a, span");

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  });