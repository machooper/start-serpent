import Link from 'next/link'
export default function Button({ghost, text, url, bg, hov}) {
	return (
		<>
			<Link href={url}>
				<button>
					{text}
				</button>
			</Link>	
			<style jsx>{`
			button {
				background: ${ghost ?	 'transparent' : 'var(--primary)'};
				border: 1px solid ${ghost ? 'var(--grey)': 'none'};		
				box-shadow: none;
				color: inherit;
			}
			button:hover {
				background: ${ghost ? 'var(--primary)' : 'var(--grey)'};
				color: var(--primary);
			}
			`}</style>
		</>
)}
