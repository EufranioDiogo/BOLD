const closeMenuButton = document.querySelector('.close-menu-button');
const openMenuButton = document.querySelector('.open-menu-button');
const menu = document.querySelector('.nav-menu');

closeMenuButton.addEventListener('click', () => {
    menu.style.width = '0%';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 495);
})
openMenuButton.addEventListener('click', () => {
    menu.style.display = 'block';
    setTimeout(() => {
        menu.style.width = '75%';
    }, 100);
})
