document.addEventListener('DOMContentLoaded', function () {
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
});