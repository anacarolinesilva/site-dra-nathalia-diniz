document.addEventListener('DOMContentLoaded', function () {

    // Funcionalidade do Acordeão
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            // Fecha todos os outros itens
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0px';
                }
            });

            // Abre ou fecha o item clicado
            const content = item.querySelector('.accordion-content');
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        });
    });

    // Funcionalidade de Rolagem Suave para links de âncora
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste de 70px para não colar no topo
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- INÍCIO do código do Swiper ---
    const swiper = new Swiper('.procedure-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // --- FIM do código do Swiper ---

});