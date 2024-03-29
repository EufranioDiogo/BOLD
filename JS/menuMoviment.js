const closeMenuButton = document.querySelector('.close-menu-button');
const openMenuButton = document.querySelector('.open-menu-button');
const menu = document.querySelector('.nav-menu');
const closeContactFormButton = document.querySelector('.close-menu-button-contact');
const openContactFormButton = document.querySelector('.contact-option-menu');
const contactContainerFilter = document.querySelector('.contact-container-filter');
const contactContainer = document.querySelector('.contact-container');


const openContactForm = () => {
    contactContainer.style.display = 'flex';
    contactContainerFilter.style.display = 'block';

    setTimeout(() => {
        contactContainer.style.opacity = '1';
        contactContainerFilter.style.opacity = '1';
    }, 100);
}

const closeContactForm = () => {
    contactContainer.style.opacity = '0';
    setTimeout(() => {
        contactContainerFilter.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        contactContainer.style.display = 'none';
        contactContainerFilter.style.display = 'none';
    }, 650)
}

const openMenu = () => {
    menu.style.display = 'block';
    setTimeout(() => {
        menu.style.width = '75%';
    }, 100);
}

const closeMenu = () => {
    menu.style.width = '0%';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 495);
}

closeMenuButton.addEventListener('click', () => {
    closeMenu();
});

openMenuButton.addEventListener('click', () => {
    openMenu();
});

closeContactFormButton.addEventListener('click', () => {
    closeContactForm();
});

openContactFormButton.addEventListener('click', () => {
    openContactForm();
    closeMenu();
});