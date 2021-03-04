import Link from 'next/link'

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
