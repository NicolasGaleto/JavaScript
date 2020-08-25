
const contenedor = document.querySelector('#contenedor');

const imagen = document.createElement('img');

imagen.src = "puerco_potter.jpg";

imagen.id = "img";

// elemento.classList.add("clase")
// elemento.classList.remove("clase")

// imagen.classList.toggle('deshabilitado')
// imagen.classList.toggle('deshabilitado')
// imagen.classList.toggle('deshabilitado')

imagen.addEventListener("click", pepito)


contenedor.appendChild(imagen);
    



function pepito(e) {
    e.target.classList.toggle('deshabilitado')
}


/////


const parrafos = document.querySelectorAll('p');

const cantidad = parrafos.length;

for (let i = 0; i < cantidad; i++ ) {
    parrafos[i].addEventListener('click', callbackParrafos)
}

function callbackParrafos(e) {
    e.target.classList.toggle('deshabilitado')
}

