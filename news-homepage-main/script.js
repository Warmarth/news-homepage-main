document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-logo");
  const menu = document.getElementById("menu");
  const closeIcon = document.getElementById("closeIcon");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
  closeIcon.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
