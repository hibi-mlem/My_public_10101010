document.addEventListener('DOMContentLoaded', function() {
    let scrollBtn = document.querySelector('.scroll-top');    
    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-top';
        scrollBtn.setAttribute('aria-label', 'Наверх');
        document.body.appendChild(scrollBtn);
    }
    function toggleScrollBtn() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', toggleScrollBtn);
    toggleScrollBtn();
    
    console.log('Сайт загружен. Кнопка "Наверх" работает.');
});