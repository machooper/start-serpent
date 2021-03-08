import Link from 'next/link'
<<<<<<< HEAD
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
=======
export default function Logo() {
	return (
		<>
			<div id="logolight">
				<Link href="/">
					<a>
						<img 
							src="/icons/logo.svg"
							alt={`${config.title} Logo`}
						/>
					</a>
				</Link>
			</div>

			<div id="logodark">
				<Link href="/">
					<a>
						<img 
							src="/icons/logodark.svg"
							alt={`${config.title} Logo`}
						/>
					</a>
				</Link>
			</div>

			<style jsx>{`
				img {
					width: 55px;
					height: 55px;
				}
				#logodark {
					display: none;
				}
				@media(prefers-color-scheme: dark) {
					#logolight {
						display: none;
					}
					#logodark {
						display: block;
					}
				}
				@media(min-width: 3840px) {
					img {
						width: 180x;
					}
				}
			`}</style>
		</>
	)}
>>>>>>> d64de1dfb996f297480fa2759378be18d64d1b47
