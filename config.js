export default {
	title: 'Star Serpent Records',
	author: 'Mac Hooper',
	description: 'An upcoming record label based in Southampton, UK',
	language: 'en',
	social: [
		{name: 'Twitter', user: 'unk'},
		{name: 'Facebook', user: 'unk'},
		{name: 'Instagram', user: 'unk'},
		{name: 'GitHub', user: 'unl'}
	],
	colors: {
		primary: '#0099ff',
		secondary: '#006bb3',
		tertiary: '#004db80',
		quaternary: '#a2f48e',
		black: '#1c1c1c',
		white: '#fff',
		grey: '#eaeaea',
		shade: 'rgba(0,0,0,.3)',
		warn: '#fddc5c',
		error: '#ff3961',
		success: '#56fca2'
	}, 
	typography: {
		head: '\'Maven Pro\', mmonospace',
		hWeight: '700',
		body: '\'Montserrat\', sans-serif',
		bodyWeight: '400',
		size: '16px',
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
