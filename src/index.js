// import menuCardTpl from "./templates/menu.hbs";
import menuCardsTpl from "./templates/menuCards.hbs";
import menuItems from "./menu.json";

const refs = {
    menuContainer: document.querySelector('.js-menu'),
    checkBoxTheme: document.querySelector('#theme-switch-toggle'),
    body: document.body,
}

const menuMarcup = createMenuMarcup(menuItems);

refs.menuContainer.insertAdjacentHTML('beforeend', menuMarcup);

function createMenuMarcup(menuItems) {
    // return menuItems.map(menuItem => menuCardTpl(menuItem)).join('');
    // return menuItems.map(menuCardTpl).join('');
    return menuCardsTpl(menuItems);
}

// переключатель темы

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

let currentTheme = null;
refs.body.classList.add(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT
);

refs.checkBoxTheme.addEventListener('change', toggleTheme);

function toggleTheme(e) {
    e.target.checked ? setDarkTheme(e) : setLightTheme(e)
};

function setDarkTheme(e){
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    currentTheme = localStorage.getItem('theme');
};

function setLightTheme(e){
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    currentTheme = localStorage.getItem('theme');
};