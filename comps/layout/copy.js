import Link from 'next/link'
import config from '../../config'
export default function Copy() {
	const yr = new Date().getFullYear();
	return (
		<p>Produced by &copy; <Link href="https://adaptstudio.co.uk">Adapt Studio</Link> {yr}</p>
)}
