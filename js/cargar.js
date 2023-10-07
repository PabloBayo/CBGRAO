const data = [
    { name: 'DaniP', value: 2 },
    { name: 'Pablo', value: 5 },
];
const puntosArray = [4.2, 12.1, 0];
const asistenciasArray = [4.2, 5.5, 0];
const rebotesArray = [1.8, 3.7, 0];
const libresArray = [89.6, 76.4, 0];
const triplesArray = [41.5, 36.7, 0];
const imagenesArray = [
    "./images/seniorA/DaniP.png",
    "./images/seniorA/Bayo.png",
];
const valoresArray = ["DaniP", "Pablo", "nada"];
const nombresArray = ["Dani Parsero Goterris", "Pablo Bayo Perez",""];
const fisicoArray = ["1.73 m / 62.6 kg", "1.85 m / 77.6 kg",""];
const expArray = ["3er año Senior Autonómico", "3er año Senior Autonómico",""];
const histArray = ["Anterior Equipo: CB Burriana", "Anterior Equipo: CB Grao Senior Preferente",""];
const edadesArray = ["Nacido: 23-02-1998", "Nacido: 12-07-2002", ""];
const dorsalesArray = [0, 32, 0];
const posicionArray = ["Base / CB Grao","Escolta / CB Grao",""];


const ptseq =11.2;
const rebeq =5.7;
const asteq =3.1;
const libeq =62.1;
const trieq =23.8;

const ptsmax=17.2;
const rebmax=8.4;
const astmax=5.5;
const libmax=100;
const trimax=100;

function actualizarNombre(nombre) {
    let indiceCalculado;
    indiceCalculado = valoresArray.indexOf(nombre);
    const nombreElement = document.getElementById("nombre");
    const edadElement = document.getElementById("edad");
    const fisicoElement = document.getElementById("fisico");
    const expElement = document.getElementById("exp");
    const histElement = document.getElementById("hist");
    const imgElement = document.getElementById("imagen");
    const dorsalElement = document.getElementById("dorsal");
    const posicionElement = document.getElementById("pos");
    const puntosElement = document.getElementById("pts");
    const asistenciasElement = document.getElementById("ast");
    const rebotesElement = document.getElementById("reb");

    puntosElement.textContent = puntosArray[indiceCalculado].toFixed(1);
    asistenciasElement.textContent = asistenciasArray[indiceCalculado].toFixed(1);
    rebotesElement.textContent = rebotesArray[indiceCalculado].toFixed(1);
    
    nombreElement.textContent = nombresArray[indiceCalculado];
    edadElement.textContent = edadesArray[indiceCalculado];
    imgElement.src = imagenesArray[indiceCalculado];
    dorsalElement.textContent = dorsalesArray[indiceCalculado].toFixed();
    posicionElement.textContent = posicionArray[indiceCalculado];
    expElement.textContent = expArray[indiceCalculado];
    fisicoElement.textContent = fisicoArray[indiceCalculado];
    histElement.textContent = histArray[indiceCalculado];
}    

// Obtener el valor de "q" de la URL
const queryParams = new URLSearchParams(window.location.search);
const searchTerm = queryParams.get('q');

const result = data.find(item => item.name === searchTerm);

if (result) {
    actualizarNombre(result.name);
    actualizarTodo(result.name);
} else {
    actualizarNombre("nada")
    actualizarTodo("nada");
}

const newSearchButton = document.getElementById('search-button');
const newSearchTermInput = document.getElementById('search-input');
newSearchButton.addEventListener('click', function () {
    search();
});

newSearchTermInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del Enter (envío del formulario)
        search();
    }
});

function search() {
    const newSearchTerm = newSearchTermInput.value;
    const newResult = data.find(item => item.name === newSearchTerm);

    if (newResult) {
        actualizarNombre(newResult.name);
        actualizarTodo(newResult.name);
    } else {
        actualizarNombre("nada")
        actualizarTodo("nada");
    }
}

//AQUI DEBERIA PONER UN ARRAY DE PTS REB AST TL 3PT Y UNO DE NOMBRES DORSAL BIOGRAFIA... COMO EN BUSCAR.JS PARA QUE ANALICE A QUE PERSONA HEMOS BUSCADO Y SAQUE EL INDICE Y MUESTRE TODOS LOS DATOS DE ESA PERSONA. EL ALGORITMO DE CALCULO DE BARRAS YA ESTA REALIZADO
function actualizarBarra(nombre,stat,maximo) {

    // Valor máximo (en este caso, 20)

    // Calcular el porcentaje en relación con el valor máximo
    const porcentaje = (stat / maximo) * 100;
    // Calcular la altura en función del porcentaje y el valor máximo de altura deseado
    const alturaMaxima = 175;
    const alturaCalculada = (alturaMaxima * porcentaje) / 100;
    // Actualizar el estilo "height" del elemento HTML
    const barra = document.getElementById(nombre);
    barra.style.height = alturaCalculada + "px";
}
function actualizarPrueba(valor,id) {
    if(id==libjug || id==trijug){
        const Asignarprueba = document.getElementById(id);
        Asignarprueba.textContent = (valor+"%");
    }else{
        const Asignarprueba = document.getElementById(id);
        Asignarprueba.textContent = valor.toFixed(1);    
    }
}
// Llamas a la función cuando sea necesario, por ejemplo, en respuesta a un evento.
function actualizarTodo(nombre) {
    indiceCalculado = valoresArray.indexOf(nombre);
    console.log(indiceCalculado);
    // Coloca todas las llamadas a actualizarPrueba aquí
    actualizarPrueba(puntosArray[indiceCalculado],"ptsjug");
    actualizarPrueba(ptseq,"ptseq");
    actualizarPrueba(rebotesArray[indiceCalculado],"rebjug");
    actualizarPrueba(rebeq,"rebeq");
    actualizarPrueba(asistenciasArray[indiceCalculado],"astjug");
    actualizarPrueba(asteq,"asteq");
    actualizarPrueba(libresArray[indiceCalculado],"libjug");
    actualizarPrueba(libeq,"libeq");
    actualizarPrueba(triplesArray[indiceCalculado],"trijug");
    actualizarPrueba(trieq,"trieq");

    // Llama a la función para calcular y aplicar la altura inicialmente
    actualizarBarra("PuntosJug",puntosArray[indiceCalculado],ptsmax);
    actualizarBarra("PuntosEqu",ptseq,ptsmax);
    actualizarBarra("RebotesJug",rebotesArray[indiceCalculado],rebmax);
    actualizarBarra("RebotesEqu",rebeq,rebmax);
    actualizarBarra("AsistenciasJug",asistenciasArray[indiceCalculado],astmax);
    actualizarBarra("AsistenciasEqu",asteq,astmax);
    actualizarBarra("LibresJug",libresArray[indiceCalculado],libmax);
    actualizarBarra("LibresEqu",libeq,libmax);
    actualizarBarra("TriplesJug",triplesArray[indiceCalculado],trimax);
    actualizarBarra("TriplesEqu",trieq,trimax);
}