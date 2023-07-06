//Menu para mobile
document.addEventListener("DOMContentLoaded", () => {
  function toggleMenu() {
    document.querySelector(".botonera").classList.toggle("show");
  }

  document.querySelector(".btn_menu").addEventListener("click", toggleMenu);
});