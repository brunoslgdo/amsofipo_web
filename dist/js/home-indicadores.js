const HOME_INDICADORES = [
    {
        label: 'SOFIPOS en operación',
        cifra: '39',
        icon: 'icon-indicadores-sofipos-en-operacion.svg',
    },
    {
        label: 'Número de clientes',
        cifra: '4,946,365',
        icon: 'icon-indicadores-numero-de-clientes.svg',
    },
    {
        label: 'Municipios atendidos',
        cifra: '1,629',
        icon: 'icon-indicadores-municipios-atendidos.svg',
    },
    {
        label: 'Número de sucursales',
        cifra: '1,223',
        icon: 'icon-indicadores-numero-de-sucursales.svg',
    },
    {
        label: 'Activo total',
        cifra: '31,009 MDP',
        icon: 'icon-indicadores-activo-total.svg',
    },
    {
        label: 'Captación',
        cifra: '20,451 MDP',
        icon: 'icon-indicadores-captacion.svg',
    },
]

/**
 * home-indicadores
 *   home-indicadores__item
 *     home-indicadores__icon
 *     home-indicadores__cifra
 *     home-indicadores__label
 */

const $homeIndicadores = document.getElementById('home-indicadores')

HOME_INDICADORES.forEach(item => {
    
    const homeIndicadoresItem = document.createElement('li')
    const homeIndicadoresIconWrap = document.createElement('div')
    const homeIndicadoresIconImg = document.createElement('img')
    const homeIndicadoresContent = document.createElement('div')
    const homeIndicadoresCifra = document.createElement('h3')
    const homeIndicadoresLabel = document.createElement('p')
    
    homeIndicadoresItem.setAttribute('class', 'home-indicadores__item')
    homeIndicadoresIconImg.setAttribute('src', `img/${item.icon}`)
    homeIndicadoresIconImg.setAttribute('alt', `${item.label}`)
    homeIndicadoresIconWrap.setAttribute('class', 'home-indicadores__icon')
    homeIndicadoresContent.setAttribute('class', 'home-indicadores__content')
    homeIndicadoresCifra.setAttribute('class', 'home-indicadores__cifra')
    homeIndicadoresLabel.setAttribute('class', 'home-indicadores__label')

    homeIndicadoresCifra.textContent = item.cifra
    homeIndicadoresLabel.textContent = item.label
    
    $homeIndicadores.appendChild(homeIndicadoresItem)
    homeIndicadoresItem.appendChild(homeIndicadoresIconWrap)
    homeIndicadoresItem.appendChild(homeIndicadoresContent)
    homeIndicadoresIconWrap.appendChild(homeIndicadoresIconImg)
    homeIndicadoresContent.appendChild(homeIndicadoresCifra)
    homeIndicadoresContent.appendChild(homeIndicadoresLabel)
    
    $homeIndicadores.appendChild(homeIndicadoresItem) 

})
