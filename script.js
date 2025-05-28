document.addEventListener('scroll', () => {
    const arrow = document.querySelector('.hero-arrow');
    if (arrow) {
        arrow.classList.remove('hero-arrow');
    }
});
