
(() => {
    const refs = {
        openContactsMenu: document.querySelector('[open-contacts-menu]'),
        closeContactsMenu: document.querySelector('[close-contacts-menu]'),
        menu: document.querySelector('[contacts-menu]'),
    };
    refs.openContactsMenu.addEventListener('click', toggleMenu);
    refs.closeContactsMenu.addEventListener('click', toggleMenu);
    function toggleMenu() {
        document.body.classList.toggle("modal-open");
        refs.menu.classList.toggle('is-hidden');
    }
})();