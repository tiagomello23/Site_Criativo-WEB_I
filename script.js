// Pega botão do menu por classe utilizando querySelector.
const btnMobile = document.querySelector('#btn-mobile');

// Função que abre e fecha o menu com um evento de toque.
function toggleMenu(event) {
    //Se o tipo do evento for de toque, previne o comportamento padrão.
    if(event.type === 'touchstart') event.preventDefault();

    // Pega o elemento com a classe nav e adiciona ou remove a classe active.
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

// Adiciona um evento de clique ao botão do menu.
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
