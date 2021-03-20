import Link from 'next/link'
import config from '../../config'
export default function Copy() {
	const yr = new Date().getFullYear();
	return (
		<Link href="/"><p style={{fontWeight: '300'}}>Produced by &copy; <span>Adapt Studio</span> {yr}</p></Link>
)}
