var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/dogcat.jpg') {
      miImage.setAttribute('src', 'images/as.jpg');
    } else {
      miImage.setAttribute('src', 'images/dogcat.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h2');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Ya te vi, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola de nuevo, ' + nombreAlmacenado;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}