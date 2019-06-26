const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.top-nav');      
console.log(menuButton, nav);

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
}
)
