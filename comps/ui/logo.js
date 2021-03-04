import Link from 'next/link'
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
