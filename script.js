const menuItems = document.querySelectorAll('.menu-item');
window.addEventListener('scroll', () => {
    menuItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemPosition < windowHeight - 100) {
            item.classList.add('fade-in');
        }
    });
});