let show = true;
const menuContent = document.querySelector('.content'); // recebe a todo o conteudo da classe content
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
})