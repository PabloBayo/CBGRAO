const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Función para manejar la búsqueda
function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== '') {
        // Redireccionar a la página "comparativa" con los datos buscados
        window.location.href = 'comparativa.html?q=' + encodeURIComponent(searchTerm);
    }
}

// Evento para el clic en el botón de búsqueda
searchButton.addEventListener('click', performSearch);

// Evento para presionar la tecla "Enter" en el campo de búsqueda
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});
function actualizarMedalla(valoresArray, tipoMedalla, stat) {
    let valorCalculado, indiceCalculado;
    const imagenesArray = [
        "./images/seniorA/DaniP.png",
        "./images/seniorA/DaniG.png",
        "./images/seniorA/Bayo.png",
    ];
    const nombresArray = ["DaniP", "Joan", "Sergi", "Pedro", "Diego", "Alejandro", "Luciano", "David", "Jorge", "DaniG", "Bayo", "Sebas"];
    const edadesArray = [25, 21, 21, 19, 22, 24, 22, 18, 23, 27, 21, 24];
    const dorsalesArray = [0, 2, 7, 11, 10, 13, 23, 27, 29, 30, 32, 44];
    if (tipoMedalla === 'Oro') {
        valorCalculado = Math.max(...valoresArray);
        indiceCalculado = valoresArray.indexOf(valorCalculado);
    } else if (tipoMedalla === 'Plata') {
        const valoresSinMaximo = valoresArray.filter(valor => valor !== Math.max(...valoresArray));
        valorCalculado = Math.max(...valoresSinMaximo);
        indiceCalculado = valoresArray.indexOf(valorCalculado);
    } else if (tipoMedalla === 'Bronce') {
        const valorMaximo = Math.max(...valoresArray);
        const valoresSinMaximos = valoresArray.filter(valor => valor !== valorMaximo);
        const segundoValorMaximo = Math.max(...valoresSinMaximos);
        valorCalculado = Math.max(...valoresArray.filter(valor => valor !== valorMaximo && valor !== segundoValorMaximo));
        indiceCalculado = valoresArray.indexOf(valorCalculado);
    }

    const nombreMedallaElement = document.getElementById(`nombre${tipoMedalla}${stat}`);
    const edadMedallaElement = document.getElementById(`edad${tipoMedalla}${stat}`);
    const imgMedallaElement = document.getElementById(`imagen${tipoMedalla}${stat}`);
    const dorsalMedallaElement = document.getElementById(`dorsal${tipoMedalla}${stat}`);
    const valorMedallaElement = document.getElementById(`valor${tipoMedalla}${stat}`);

    if (stat === 'Puntos') {
        valorMedallaElement.textContent = puntosArray[indiceCalculado].toFixed(1);
    } else if (stat === 'Asistencias') {
        valorMedallaElement.textContent = asistenciasArray[indiceCalculado].toFixed(1);
    }else if (stat === 'Rebotes') {
        valorMedallaElement.textContent = rebotesArray[indiceCalculado].toFixed(1);
    }else if (stat === 'Robos') {
        valorMedallaElement.textContent = robosArray[indiceCalculado].toFixed(1);
    }else if (stat === 'Tapones') {
        valorMedallaElement.textContent = taponesArray[indiceCalculado].toFixed(1);
    }else if (stat === 'Valoracion') {
        valorMedallaElement.textContent = valoracionArray[indiceCalculado].toFixed(1);
    }
    nombreMedallaElement.textContent = nombresArray[indiceCalculado];
    edadMedallaElement.textContent = edadesArray[indiceCalculado].toFixed();
    imgMedallaElement.src = imagenesArray[indiceCalculado];
    dorsalMedallaElement.textContent = dorsalesArray[indiceCalculado].toFixed();
}

const puntosArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
const asistenciasArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
const rebotesArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
const robosArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
const taponesArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
const valoracionArray = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
actualizarMedalla(robosArray,"Oro","Robos");
actualizarMedalla(robosArray,"Plata","Robos");
actualizarMedalla(robosArray,"Bronce","Robos");
actualizarMedalla(puntosArray,"Oro","Puntos");
actualizarMedalla(puntosArray,"Plata","Puntos");
actualizarMedalla(puntosArray,"Bronce","Puntos");
actualizarMedalla(taponesArray,"Oro","Tapones");
actualizarMedalla(taponesArray,"Plata","Tapones");
actualizarMedalla(taponesArray,"Bronce","Tapones");
actualizarMedalla(valoracionArray,"Oro","Valoracion");
actualizarMedalla(valoracionArray,"Plata","Valoracion");
actualizarMedalla(valoracionArray,"Bronce","Valoracion");
actualizarMedalla(asistenciasArray,"Oro","Asistencias");
actualizarMedalla(asistenciasArray,"Plata","Asistencias");
actualizarMedalla(asistenciasArray,"Bronce","Asistencias");
actualizarMedalla(rebotesArray,"Oro","Rebotes");
actualizarMedalla(rebotesArray,"Plata","Rebotes");
actualizarMedalla(rebotesArray,"Bronce","Rebotes");
//AQUI AÑADO LA INTRODUCCION DE DATOS EN LA TABLA
// JavaScript para generar la tabla
var tabla = document.getElementById("miTabla");

// Array de nombres
var nombres = ["DaniP", "Joan", "Sergi", "Pedro", "Diego", "Alejandro", "Luciano", "David", "Jorge", "DaniG", "Bayo", "Sebas"];
var numeros = [0, 2, 7, 11, 10, 13, 23, 27, 29, 30, 32, 44];
var partidos = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
var puntos = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var asistencias = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var rebotes = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var robos = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var tapones = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var perdidas = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var faltas = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var forzadas = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var ofensivos = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var defensivos = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var valoracion = [4.2, 12.1, 7.2, 15.4, 8.3, 1.3, 16.3, 7.2, 6.2, 5.2, 10.2, 6.5];
var dos = ["4.2%", "12.1%", "7.2%", "15.4%", "8.3%", "1.3%", "16.3%", "7.2%", "6.2%", "5.2%", "10.2%", "6.5%"];
var tres = ["4.2%", "12.1%", "7.2%", "15.4%", "8.3%", "1.3%", "16.3%", "7.2%", "6.2%", "5.2%", "10.2%", "6.5%"];
var libre = ["4.2%", "12.1%", "7.2%", "15.4%", "8.3%", "1.3%", "16.3%", "7.2%", "6.2%", "5.2%", "10.2%", "6.5%"];
var campo = ["4.2%", "12.1%", "7.2%", "15.4%", "8.3%", "1.3%", "16.3%", "7.2%", "6.2%", "5.2%", "10.2%", "6.5%"];

// Crea 13 filas
for (var i = 0; i < 12; i++) {
  var fila = document.createElement("tr");
  // Aplica la clase "fila-datos" a todas las filas
  fila.className = "fila-datos";
  if (i % 2 === 0) {
    fila.className += " colores";
  }
  // Crea las 18 columnas
  for (var j = 0; j < 18; j++) {
    var celda = document.createElement("td");

    // Asigna clases de ancho según la columna
    if (j==0){
      celda.className = "ancho-numero";
      celda.textContent = numeros[i];
    }else if (j === 1) {
      celda.className = "ancho-nombre";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = nombres[i];
    }else if (j === 2) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = partidos[i];
    }else if (j === 3) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = puntos[i];
    }else if (j === 4) {
        celda.className = "ancho-numero";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = asistencias[i];
    }else if (j === 5) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = rebotes[i];
    }else if (j === 6) {
        celda.className = "ancho-numero";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = robos[i];
    }else if (j === 7) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = tapones[i];
    }else if (j === 8) {
        celda.className = "ancho-numero";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = perdidas[i];
    }else if (j === 9) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = faltas[i];
    }else if (j === 10) {
        celda.className = "ancho-numero";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = forzadas[i];
    }else if (j === 11) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = ofensivos[i];
    }else if (j === 12) {
        celda.className = "ancho-numero";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = defensivos[i];
    }else if (j === 13) {
        celda.className = "ancho-numero";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = valoracion[i];
    }else if (j === 14) {
        celda.className = "ancho-porcentaje";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = dos[i];
    }else if (j === 15) {
        celda.className = "ancho-porcentaje";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = tres[i];
    }else if (j === 16) {
        celda.className = "ancho-porcentaje";
      // Asigna el elemento correspondiente del array de nombres
      celda.textContent = libre[i];
    }else if (j === 17) {
        celda.className = "ancho-porcentaje";
        // Asigna el elemento correspondiente del array de nombres
        celda.textContent = campo[i];
    }        

    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}