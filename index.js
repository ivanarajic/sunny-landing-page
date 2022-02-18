const headerEl = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    btnOpen.style.display = "none";
    btnClose.style.display = "inline-block";
  } else {
    btnClose.style.display = "none";
    btnOpen.style.display = "inline-block";
  }
});
