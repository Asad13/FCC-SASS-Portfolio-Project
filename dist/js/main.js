let navBarOpen = false;
document.querySelector(".toggle-menu").addEventListener('click', () => {
    let hamBurger = document.querySelector('.toggle-menu-burger');
    let topNav = document.querySelector(".nav");
    let topNavMenu = document.querySelector(".nav-menu");
    let topNavItems = document.querySelectorAll(".nav-item");

    if (!navBarOpen) {
        hamBurger.classList.add('open');
        topNav.classList.add('open');
        topNavMenu.classList.add('open');
        topNavItems.forEach(item => item.classList.add('open'));
        navBarOpen = true;
    } else {
        hamBurger.classList.remove('open');
        topNav.classList.remove('open');
        topNavMenu.classList.remove('open');
        topNavItems.forEach(item => item.classList.remove('open'));
        navBarOpen = false;
    }
})