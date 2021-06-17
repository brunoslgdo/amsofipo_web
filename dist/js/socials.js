const SOCIALS = [
	{
		icon: 'facebook.svg',
		url: 'https://es-la.facebook.com/Amsofipo/',
	},
	{
		icon: 'linkedin.svg',
		url: 'https://mx.linkedin.com/company/amsofipo',
	},
	{
		icon: 'twitter.svg',
		url: 'https://twitter.com/amsofipo',
	},
]

/**
 * socials
 * 	li.socials__item
 *    a.socials__link
 *      img.socials__icon
 */

const socials = document.createElement('ul')
socials.setAttribute('id', 'socials')
socials.setAttribute('class', 'socials')

SOCIALS.forEach(item => {
	const socialsItem = document.createElement('li')
	const socialsLink = document.createElement('a')
	const socialsIcon = document.createElement('img')

	socialsItem.setAttribute('class', 'socials__item')
	socialsLink.setAttribute('href', item.url)
	socialsLink.setAttribute('class', 'socials__link')
	socialsIcon.setAttribute('src', `img/${item.icon}`)
	socialsIcon.setAttribute('alt', 'social')
	socialsIcon.setAttribute('class', 'socials__icon')
	
	socials.appendChild(socialsItem)
	socialsItem.appendChild(socialsLink)
	socialsLink.appendChild(socialsIcon)
})

headerNav.appendChild(socials)