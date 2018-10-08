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

const content_area = document.querySelector("#content");
nav_item.forEach(item => item.addEventListener("click", function () {
    selected(item);
}, false));
function selected(item) {
    nav_item.forEach(item => item.classList.remove('selected'));
    item.classList.add('selected');
    load(item.textContent.trim());
}
function load(text) {
    toggleMenu();
    if (text == "Home") {
        content_area.innerHTML = '';
    } else if (text == "About me") {
        content_area.innerHTML = 'About';
    } else if (text == "Past projects") {
        content_area.innerHTML = 'Past projects';
    } else if (text == "Contact me") {
        content_area.innerHTML = 'Contact';
    }
}


// Context menu
// document.addEventListener('contextmenu', event => event.preventDefault());