// Menu actions
const menu_btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menu_branding = document.querySelector(".menu-branding");
const menu_nav = document.querySelector(".menu-nav");
const nav_item = document.querySelectorAll(".nav-item");

let menu_status = false;

menu_btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!menu_status) {

        menu_btn.classList.add("close");
        menu.classList.add("show");
        menu_branding.classList.add("show");
        menu_nav.classList.add("show");
        nav_item.forEach(item => item.classList.add('show'));

        menu_status = true;
    } else {
        menu_btn.classList.remove("close");
        menu.classList.remove("show");
        menu_branding.classList.remove("show");
        menu_nav.classList.remove("show");
        nav_item.forEach(item => item.classList.remove('show'));

        menu_status = false;
    }
}

// Loading content





// Context menu
document.addEventListener('contextmenu', event => event.preventDefault());