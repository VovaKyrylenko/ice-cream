const menu = document.querySelector('[data-menu]');
const btnMenu = document.querySelector('[data-menu-button]');

btnMenu.addEventListener('click' , () => {
    btnMenu.classList.toggle("is-open");
    menu.classList.toggle("is-open");

    const expanded = btnMenu.getAttribute("aria-expanded") === "true" || false;
    btnMenu.setAttribute("aria-expanded", !expanded);

    document.body.classList.toggle("body--hidden");
    
});