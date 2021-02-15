import Link from 'next/link'
export default function Button({ghost, text, url, bg, hov}) {
	return (
		<>
			<button href={url}>{text}</button>
			
			<style jsx>{`
			background: ${ghost ?	'var(--primary)' : 'transparent'};
			max-width: 100px;
			border: 1px solid ${ghost ? 'none' : 'var(--grey)'};		
			box-shadow: none;
			color: inherit;
			`}</style>
		</>
)}
