function createStarts() {
    const numStars = Math.floor(Math.random() * 11) + 50;
    const starsContainer = document.querySelector('.stars');

    const divsHijos = starsContainer.children;
    const divsActuales = divsHijos.length;
    const cantidadAeliminar = Math.floor(divsActuales / 2);
    for (let i = 0; i < cantidadAeliminar; i++) {
        starsContainer.removeChild(divsHijos[i]);
    }

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star blink-animation';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }
}

createStarts()
setInterval(createStarts, 7000);