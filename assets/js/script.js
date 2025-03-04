// Função para alternar o menu mobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

// Espera o conteúdo ser carregado para aplicar o efeito do preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.conteudo');
    
    // Deixa o preloader visível por 1 segundo antes de iniciar o fade-out
    setTimeout(function() {
        // Adiciona a classe 'hidden' ao preloader para iniciar o fade-out
        preloader.classList.add('hidden');
        
        // Após o tempo da animação de fade-out (1.5 segundos), esconder o preloader e mostrar o conteúdo
        setTimeout(function() {
            preloader.style.display = 'none';  // Ocultar o preloader
            content.style.opacity = '1';  // Tornar o conteúdo visível
        }, 1500);  // Espera o tempo total da animação de fade-out
    }, 1000);  // Preloader visível por 1 segundo antes do fade-out
});

// Remover o bloqueio de inspeção de código e combinações de teclas (F12, Ctrl+Shift+I, etc)
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'P'))) {
        event.preventDefault();
        event.stopPropagation();
    }
});

// Permitir o clique direito na página
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();  // Permite o clique direito
});

// Remover redirecionamento automático baseado no tamanho da janela (evitar redirecionamento errado)
setInterval(() => {
    const outerWidth = window.outerWidth;
    const innerWidth = window.innerWidth;
    const outerHeight = window.outerHeight;
    const innerHeight = window.innerHeight;

    if (outerWidth - innerWidth > 160 || outerHeight - innerHeight > 160) {
        // Não realizar redirecionamento
    }
}, 1000);

// Tratamento de avatar e usuário (carregar avatar de usuário armazenado no localStorage)
document.addEventListener('DOMContentLoaded', () => {
    const avatarElement = document.querySelector('.user-avatar');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo && userInfo.avatar) {
        avatarElement.src = userInfo.avatar;
    } else {
        avatarElement.src = 'IMG/baseuser.png'; // Caso não tenha avatar, exibe a imagem padrão
    }

    avatarElement.onerror = () => {
        avatarElement.src = 'IMG/baseuser.png'; // Caso a imagem do avatar falhe, exibe a imagem padrão
    };
});
