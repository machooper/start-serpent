import Link from 'next/link'
import config from '../../../config'
export default function Copy() {
	const yr = new Date().getFullYear();
	return (
		<Link href="/"><a style={{color: 'inherit'}}>&copy; {config.title} {yr}</a></Link>
)}
