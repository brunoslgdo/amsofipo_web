const MENU = [
	{
		item: 'AMSOFIPO',
		url: 'amsofipo.html',
		child: [],
	},
	{
		item: 'SOFIPO',
		url: 'sofipo.html',
		child: [],
	},
	{
		item: 'Inclusión financiera',
		url: 'inclusion-financiera.html',
		child: [],
	},
	{
		item: 'Finanzas personales',
		url: 'finanzas-personales.html',
		child: [],
	},
	{
		item: 'Prensa',
		url: 'prensa.html',
		child: [],
	},
	{
		item: 'Blog',
		url: 'blog.html',
		child: [],
	},
]

/**
 * header
 * 	nav
 * 	  img (logo)
 * 	  ul (menu)
 *    a (contactanos)
 */

const $header = document.getElementById('header')

const headerNav = document.createElement('nav')
const headerLogo = document.createElement('img')
const headerMenu = document.createElement('ul')
const headerContact = document.createElement('a')

headerNav.setAttribute('class', 'header__nav')
headerLogo.setAttribute('class', 'header__logo')
headerLogo.setAttribute('src', 'img/amsofipo.svg')
headerLogo.setAttribute('alt', 'amsofipo')
headerMenu.setAttribute('class', 'header__menu')
headerContact.setAttribute('class', 'header__contact')
headerContact.setAttribute('href', '#')

headerContact.textContent = 'Contáctanos'

$header.appendChild(headerNav)
headerNav.appendChild(headerLogo)

MENU.forEach(item => {
	const menuItem = document.createElement('li')
	const menuLink = document.createElement('a')
	menuLink.setAttribute('href', item.url)
	menuLink.setAttribute('target', '_blank')
	menuLink.setAttribute('rel', 'noopener')
	menuItem.appendChild(menuLink)
	menuLink.textContent = item.item
	headerMenu.appendChild(menuItem)
})

headerNav.appendChild(headerMenu)
headerNav.appendChild(headerContact) 