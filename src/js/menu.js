(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-open]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    

    mobileMenuRef.classList.toggle("is-open");
  });
})();


(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    
    
    mobileMenuRef.classList.toggle("is-open");
  });
})();