import Link from 'next/link'
import config from '../../config'
export default function Logo({url}) {
	return (
		<>
			<Link href={url}>
				<picture>
			  		<source 
				    		srcSet="/icons/dark/logo.png" 
				    		media="(prefers-color-scheme: dark)"
					/>
  					<img src="/icons/light/logo.png" alt={config.title}/>
				</picture>	
			</Link>
			
			<style jsx>{`
			div {
				display: flex;
				align-items: center;
			}
			h1, img {
				cursor: pointer;
			}
			img {
				width: 80px;
				height: 80px;
				object-fit: cover;
				margin: 0 .5rem 0 0;
			}
			@media(min-width: 760px) {
				img {
					width: 120px;
					height: 120px;
				}
			}
			`}</style>
		</>
)}
