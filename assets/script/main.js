document.addEventListener('DOMContentLoaded', function () {
    // Lógica do scroller
    const scrollerContents = document.querySelectorAll('.scroller-content');
    const contentList = [
        { tag: 'h3', text: 'Expertise no setor de saúde não assistencial' },
        { tag: 'h5', text: 'MLX Capital' },
        { tag: 'h3', text: 'Histórico de transações' },
        { tag: 'h5', text: 'MLX Capital' },
        { tag: 'h3', text: 'Rede de relacionamento com stakeholders relevantes' },
        { tag: 'h5', text: 'MLX Capital' }
    ];

    function insertContent(scrollerContent) {
        contentList.forEach(item => {
            const element = document.createElement(item.tag);
            element.textContent = item.text;
            if (item.tag === 'h5') {
                const wrapper = document.createElement('div');
                wrapper.classList.add('content-scroller-h5');
                wrapper.appendChild(element);
                scrollerContent.appendChild(wrapper);
            } else {
                scrollerContent.appendChild(element);
            }
        });
        contentList.forEach(item => {
            const element = document.createElement(item.tag);
            element.textContent = item.text;
            if (item.tag === 'h5') {
                const wrapper = document.createElement('div');
                wrapper.classList.add('content-scroller-h5');
                wrapper.appendChild(element);
                scrollerContent.appendChild(wrapper);
            } else {
                scrollerContent.appendChild(element);
            }
        });
    }

    scrollerContents.forEach(insertContent);

    scrollerContents.forEach(scrollerContent => {
        let scrollAmount = 0;
        const scrollSpeed = 1;
        const itemWidth = scrollerContent.children[0].offsetWidth + 48; // Largura do item + margem

        function scrollContinuously() {
            scrollAmount -= scrollSpeed;
            scrollerContent.style.transform = `translateX(${scrollAmount}px)`;
            if (Math.abs(scrollAmount) >= itemWidth) {
                scrollAmount = 0;
                scrollerContent.appendChild(scrollerContent.firstElementChild); // Mover o primeiro item para o fim
            }
            requestAnimationFrame(scrollContinuously);
        }

        scrollContinuously();
    });

    // Lógica do menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    function toggleMenu() {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navMenu.style.display = 'none'; // Esconde o menu
        } else {
            navMenu.classList.add('open');
            navMenu.style.display = 'flex'; // Mostra o menu
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em qualquer link ou botão dentro do .header-nav-menu, apenas em modo mobile
    const menuLinks = navMenu.querySelectorAll('a, #header-contact-btn');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se a largura da tela é menor ou igual a 1024px (breakpoint onde .menu-square é ativado)
            if (window.innerWidth <= 1024) {
                navMenu.classList.remove('open');
                navMenu.style.display = 'none'; // Esconde o menu apenas no mobile
            }
        });
    });

    // Ajustar o menu ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            // No desktop, garante que o menu esteja visível e sem a classe 'open'
            navMenu.classList.remove('open');
            navMenu.style.display = 'flex';
        } else if (window.innerWidth <= 1024 && !navMenu.classList.contains('open')) {
            // No mobile, garante que o menu esteja escondido se não estiver aberto
            navMenu.style.display = 'none';
        }
    });

    // Inicializar o estado do menu com base na largura da tela
    if (window.innerWidth > 1024) {
        navMenu.style.display = 'flex'; // Garante que o menu esteja visível no desktop ao carregar
    } else {
        navMenu.style.display = 'none'; // Garante que o menu esteja escondido no mobile ao carregar
    }

    // Lógica de rolagem suave para o botão "Entrar em contato" do header
    const headerContactButton = document.getElementById('header-contact-btn');
    headerContactButton.addEventListener('click', () => {
        document.getElementById('CONTATO').scrollIntoView({ behavior: 'smooth' });
    });

    // Lógica de rolagem suave para o botão "Entrar em contato"
    const contactButton = document.querySelector('.button-secondary');
    contactButton.addEventListener('click', () => {
        document.getElementById('CONTATO').scrollIntoView({ behavior: 'smooth' });
    });

    // Lógica para o botão do footer abrir o cliente de e-mail
    const footerContactButton = document.getElementById('footer-contact-btn');
    footerContactButton.addEventListener('click', () => {
        window.location.href = 'mailto:secretaria@mlxcapital.com.br';
    });

    // Atualizar o ano no copyright automaticamente
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `MLX Capital ${currentYear}. Todos os direitos reservados`;
    }
});