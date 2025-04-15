document.querySelectorAll('.item__title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.classList.toggle('active');
    });
});