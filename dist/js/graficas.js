const graficaBarra = document.querySelector('.grafica__barra');

graficaBarra.onmouseover = logMouseOver
graficaBarra.onmouseout = logMouseOut

function logMouseOver() {
    console.log(document.querySelector('.grafica__cifra').innerHTML = '4,236,601')
}

function logMouseOut() {
    document.querySelector('.grafica__cifra').innerHTML = '';
}