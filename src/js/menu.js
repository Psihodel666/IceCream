(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-open]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    document.body.classList.toggle("modal-open");
    mobileMenuRef.classList.toggle("is-open");
  });
})();


(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    document.body.classList.toggle("modal-open");
    mobileMenuRef.classList.toggle("is-open");
  });
})();