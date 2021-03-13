export default {
	title: 'Star Serpent Records',
	author: 'Mac Hooper',
	description: 'An upcoming record label based in Southampton, UK',
	language: 'en',
	social: [
		{name: 'Instagram', user: 'https://www.instagram.com/starserpentrecords/?hl=en-gb'},
		{name: 'Facebook', user: 'https://www.facebook.com/StarSerpentRecords/'},
		{name: 'Soundcloud', user: 'https://soundcloud.com/star-serpent-records'},
		{name: 'YouTube', user: 'https://www.youtube.com/channel/UCe1HpaBzZHVZU0MVoyDNTxw'}
	],
	colors: {
		primary: '#49B875',
		secondary: '#65ccb8',
		tertiary: '#004db80',
		quaternary: '#a2f48e',
		black: '#182628',
		white: '#f2f2f2',
		grey: '#eaeaea',
		shade: 'rgba(0,0,0,.3)',
		warn: '#fddc5c',
		error: '#ff3961',
		success: '#56fca2'
	}, 
	typography: {
		head: '\'Montserrat\', monospace',
		hWeight: '700',
		body: '\'Montserrat\', sans-serif',
		bodyWeight: '400',
		size: '40px',
		lHeight: '1.6'
	},
	buttons: {
		padding: '.8rem 1.4rem',
		border: '1px solid var(--black)'
	},
	other: {
		shadow: '1,5px 3px 6px var(--shade)',
		radius: '0'
	},
	navigation: ['about', 'artists', 'contact'],
	banner: {
		visisble: false,
		message: 'A test message for the banner',
		color: 'var(--warn)'
	}
}
