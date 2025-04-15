const implementosImgs = document.querySelectorAll('.item__content.implementos img');

implementosImgs.forEach(img => {
    img.addEventListener('click', () => {

        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';

        const fullImg = document.createElement('img');
        fullImg.src = img.src;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'fullscreen-close';
        closeBtn.innerText = 'Fechar';

        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.appendChild(fullImg);
        overlay.appendChild(closeBtn);

        document.body.appendChild(overlay);
    });
});