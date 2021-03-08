import Link from 'next/link'
import config from '../../config'
export default function Logo({url}) {
	return (
		<>
			<Link href={url}><h1>{config.title}</h1></Link>
			
			<style jsx>{`
			div {
				display: flex;
				align-items: center;
			}
			img {
				width: 30px;
				height: 30px;
				object-fit: cover;
				margin: 0 .5rem 0 0;
			}
			`}</style>
		</>
)}
