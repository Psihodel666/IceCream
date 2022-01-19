(() => {
    const refs = {
        openFranchiseMenu: document.querySelector('[open-franchise-menu]'),
        openDesctopModal: document.querySelector('[data-desctop-modal]'),
        openMobileModal: document.querySelector('[data-mobile-modal]'),
        closeFranchiseMenu: document.querySelector('[close-franchise-menu]'),
        menu: document.querySelector('[franchise-menu]'),
    };

    refs.openFranchiseMenu.addEventListener('click', toggleMenu);
    refs.openDesctopModal.addEventListener('click', toggleMenu);
    refs.openMobileModal.addEventListener('click', toggleMenu);
    refs.closeFranchiseMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        document.body.classList.toggle("modal-open");
        refs.menu.classList.toggle('is-hidden');
    }
})();

