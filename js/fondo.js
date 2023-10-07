document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = [
        'linear-gradient(180deg, #0000008c 0%,#0000008c 100%), url("./images/portada.jpg")',
        'linear-gradient(180deg, #0000008c 0%,#0000008c 100%), url("./images/portada2.jpg")',
        'linear-gradient(180deg, #0000008c 0%,#0000008c 100%), url("./images/portada3.jpg")',
        'linear-gradient(180deg, #0000008c 0%,#0000008c 100%), url("./images/portada4.jpg")'
        // Agrega más valores de fondo aquí
    ];
    let currentBackgroundIndex = 0;
    const hero = document.querySelector('.hero');
    const linkContainer = document.querySelector('.nav_link--menu');

    // Pre-carga las imágenes de fondo
    backgrounds.forEach(background => {
        const img = new Image();
        img.src = background;
    });

    function changeBackground() {
        hero.style.backgroundImage = backgrounds[currentBackgroundIndex];
        hero.style.backgroundPosition= "center";
        hero.style.backgroundSize= "cover"; 
        hero.style.clipPath= "polygon(0 0, 100% 0, 100% 87%, 50% 100%, 0% 87%)";
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }
    changeBackground(); // Cambiar el fondo inmediatamente al cargar la página
    setInterval(changeBackground, 2000); // Cambia el fondo cada 5 segundos (5000 ms)
});