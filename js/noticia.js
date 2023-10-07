// Datos de la primera noticia
const titulo1 = "Título de la Noticia 1";
const imagenSrc1 = "imagen1.jpg";
const resumen1 = "Resumen de la noticia 1. Esto es una descripción breve de lo que trata la noticia.";
const cuerpoNoticia1 = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Phasellus nec augue eu nunc cursus ullamcorper. Sed at facilisis dui.</p>
    <!-- Puedes agregar más párrafos según sea necesario -->
`;

// Datos de la segunda noticia
const titulo2 = "Título de la Noticia 2";
const imagenSrc2 = "./images/seniorA/DaniP.png";
const resumen2 = "Resumen de la noticia 2. Esto es una descripción breve de lo que trata la noticia.";
const cuerpoNoticia2 = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Phasellus nec augue eu nunc cursus ullamcorper. Sed at facilisis dui.</p>
    <!-- Puedes agregar más párrafos según sea necesario -->
`;

// Función para crear una noticia
function crearNoticia(titulo, imagenSrc, resumen, cuerpoNoticia, contenedorId) {
    const noticiaContainer = document.getElementById(contenedorId);

    const tituloElement = document.createElement("div");
    tituloElement.className = "titulo";
    tituloElement.textContent = titulo;

    const resumenElement = document.createElement("div");
    resumenElement.className = "resumen";

    const imagenElement = document.createElement("div");
    imagenElement.className = "imagen";
    const imagen = document.createElement("img");
    imagen.src = imagenSrc;
    imagen.alt = "Imagen de la noticia";
    imagenElement.appendChild(imagen);

    const textoResumenElement = document.createElement("div");
    textoResumenElement.className = "texto-resumen";
    textoResumenElement.innerHTML = `<p>${resumen}</p>`;

    resumenElement.appendChild(imagenElement);
    resumenElement.appendChild(textoResumenElement);

    const cuerpoNoticiaElement = document.createElement("div");
    cuerpoNoticiaElement.className = "cuerpo-noticia";
    cuerpoNoticiaElement.innerHTML = cuerpoNoticia;

    noticiaContainer.appendChild(tituloElement);
    noticiaContainer.appendChild(resumenElement);
    noticiaContainer.appendChild(cuerpoNoticiaElement);
}

// Crear la primera noticia
crearNoticia(titulo1, imagenSrc1, resumen1, cuerpoNoticia1, "noticia1");

// Crear la segunda noticia
crearNoticia(titulo2, imagenSrc2, resumen2, cuerpoNoticia2, "noticia2");