import Link from 'next/link'
<<<<<<< HEAD
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
=======

export default function Button({url, text, variant}) {
	if (variant == "primary") {
		return (
			<Link href={`/${url}`}>
				<button className="btn-primary">{text}</button>
			</Link>
		)} else {
			return (
				<Link href={`/${url}`}>
					<button>{text}</button>
				</Link>
			)
}
>>>>>>> d64de1dfb996f297480fa2759378be18d64d1b47
