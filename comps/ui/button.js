import Link from 'next/link'
export default function Button({ghost, text, url, bg, hov}) {
	return (
		<>
			<button href={url}>{text}</button>
			
			<style jsx>{`
			button {
				background: ${ghost ?	 'transparent' : 'var(--primary)'};
				max-width: 100px;
				border: 1px solid ${ghost ? 'var(--grey)': 'none'};		
				box-shadow: none;
				color: inherit;
			}
			button:hover {
				background: ${ghost ? 'var(--primary)' : 'var(--grey)'};
			}
			`}</style>
		</>
)}
