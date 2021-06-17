const COMUNICATE = [
    {
        item: 'contacto@amsofipo.mx',
        url: 'mailtio:contacto@amsofipo.mx',
    },
    {
        item: '55 5001 4851',
        url: 'tel:+525550014851',
    },
]

const DIRECCION = [
    {
        item: 'Av. Insurgentes Sur #2047 Esq. Cracovia, Edificio "B" Col. San Ángel, C. P. 01000 Alcaldía Álvaro Obregón Ciudad de México, CDMX',
        url: 'https://goo.gl/maps/jr7jtdiaHptABvCB7',
    },
]

const SITIOS = [
    {
        item: 'SHCP',
        url: 'https://www.gob.mx/shcp/',
    },
    {
        item: 'CNBV',
        url: 'https://www.cnbv.gob.mx/',
    },
    {
        item: 'CONDUSEF',
        url: 'https://www.condusef.gob.mx/',
    },
    {
        item: 'BANXICO',
        url: 'https://www.banxico.org.mx/',
    },
    {
        item: 'FIRA',
        url: 'https://www.fira.gob.mx/',
    },
]

const LEGALES = [
    {
        item: 'Marco Legal',
        url: '#',
    },
    {
        item: 'Aviso de privacidad',
        url: '#',
    },
]

/**
 * footer
 *   footer__nav
 *     footer__comunicate
 *     footer__direccion
 *     footer__sitios
 *     footer__legales
 */

const $footer = document.getElementById('footer')

const footerNav = document.createElement('nav')
const footerComunicate = document.createElement('div')
const footerDireccion = document.createElement('div')
const footerSitios = document.createElement('div')
const footerLegales = document.createElement('div')

footerNav.setAttribute('class', 'footer__nav')
footerComunicate.setAttribute('class', 'footer__comunicate footer__child')
footerDireccion.setAttribute('class', 'footer__direccion footer__child')
footerSitios.setAttribute('class', 'footer__sitios footer__child')
footerLegales.setAttribute('class', 'footer__legales footer__child')

$footer.appendChild(footerNav)
footerNav.appendChild(footerComunicate)
footerNav.appendChild(footerDireccion)
footerNav.appendChild(footerSitios)
footerNav.appendChild(footerLegales)

const comunicateLabel = document.createElement('h5')
comunicateLabel.textContent = 'Comunícate con nosotros'
const comunicateUl = document.createElement('ul')
comunicateUl.setAttribute('class', 'footer__menu')
COMUNICATE.forEach(item => {
    const comunicateLi = document.createElement('li')
    const comunicateA = document.createElement('a')
    comunicateA.setAttribute('href', item.url)
    comunicateA.setAttribute('target', '_blank')
    comunicateA.setAttribute('rel', 'noopener')
    comunicateA.textContent = item.item
    comunicateUl.appendChild(comunicateLi)
    comunicateLi.appendChild(comunicateA)
})
footerComunicate.appendChild(comunicateLabel)
footerComunicate.appendChild(comunicateUl)

const direccionLabel = document.createElement('h5')
direccionLabel.textContent = 'Ubica nuestras oficinas'
const direccionUl = document.createElement('ul')
direccionUl.setAttribute('class', 'footer__menu')
DIRECCION.forEach(item => {
    const direccionLi = document.createElement('li')
    const direccionA = document.createElement('a')
    direccionA.setAttribute('href', item.url)
    direccionA.setAttribute('target', '_blank')
    direccionA.setAttribute('rel', 'noopener')
    direccionA.textContent = item.item
    direccionUl.appendChild(direccionLi)
    direccionLi.appendChild(direccionA)
})
footerDireccion.appendChild(direccionLabel)
footerDireccion.appendChild(direccionUl)

const sitiosLabel = document.createElement('h5')
sitiosLabel.textContent = 'Sitios de interés'
const sitiosUl = document.createElement('ul')
sitiosUl.setAttribute('class', 'footer__menu')
SITIOS.forEach(item => {
    const sitiosLi = document.createElement('li')
    const sitiosA = document.createElement('a')
    sitiosA.setAttribute('href', item.url)
    sitiosA.setAttribute('target', '_blank')
    sitiosA.setAttribute('rel', 'noopener')
    sitiosA.textContent = item.item
    sitiosUl.appendChild(sitiosLi)
    sitiosLi.appendChild(sitiosA)
})
footerSitios.appendChild(sitiosLabel)
footerSitios.appendChild(sitiosUl)

const legalesLabel = document.createElement('h5')
legalesLabel.textContent = 'Legales'
const legalesUl = document.createElement('ul')
legalesUl.setAttribute('class', 'footer__menu')
LEGALES.forEach(item => {
    const legalesLi = document.createElement('li')
    const legalesA = document.createElement('a')
    legalesA.setAttribute('href', item.url)
    legalesA.setAttribute('target', '_blank')
    legalesA.setAttribute('rel', 'noopener')
    legalesA.textContent = item.item
    legalesUl.appendChild(legalesLi)
    legalesLi.appendChild(legalesA)
})
footerLegales.appendChild(legalesLabel)
footerLegales.appendChild(legalesUl)