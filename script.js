document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const menuToggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".close");
  const menu = document.querySelector(".header__menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      menu.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  }

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
});
