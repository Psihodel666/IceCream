(() => {
    const refs = {
        openFranchiseMenu: document.querySelector('[open-franchise-menu]'),
        closeFranchiseMenu: document.querySelector('[close-franchise-menu]'),
        menu: document.querySelector('[franchise-menu]'),
    };

    refs.openFranchiseMenu.addEventListener('click', toggleMenu);
    refs.closeFranchiseMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
    }
})();