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

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.conteudo');
    
    setTimeout(function() {
        preloader.classList.add('hide');
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.opacity = '1';
        }, 500);  // Reduzi o tempo para 500ms para um carregamento mais rápido
    }, 500);  // Inicia o carregamento do conteúdo após 500ms
});

// Remover o bloqueio de inspeção de código e combinações de teclas
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'P'))) {
        event.preventDefault();
        event.stopPropagation();
    }
});

// Remover o bloqueio de clique direito
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Permite o clique direito
});

// Remover redirecionamento automático baseado no tamanho da janela
setInterval(() => {
    const outerWidth = window.outerWidth;
    const innerWidth = window.innerWidth;
    const outerHeight = window.outerHeight;
    const innerHeight = window.innerHeight;

    if (outerWidth - innerWidth > 160 || outerHeight - innerHeight > 160) {
        // Não realizar redirecionamento
    }
}, 1000);

// Tratamento de avatar e usuário
document.addEventListener('DOMContentLoaded', () => {
    const avatarElement = document.querySelector('.user-avatar');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo && userInfo.avatar) {
        avatarElement.src = userInfo.avatar;
    } else {
        avatarElement.src = 'IMG/baseuser.png';
    }

    avatarElement.onerror = () => {
        avatarElement.src = 'IMG/baseuser.png';
    };
});
