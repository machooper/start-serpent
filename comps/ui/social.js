import Link from 'next/link'
import config from '../../config'
export default function Social() {
	return (
		<>
			<ul id="light">
				{config.social.map((icon) => (
					<Link href={`https://${icon.name}.com/${icon.user}`}>
						<li key={icon.name}>
							<img src={`/icons/light/social/${icon.name.toLowerCase()}.png`} alt={icon.name}/>
						</li>
					</Link>
				))}
			</ul>
			
			<ul id="dark">
				{config.social.map((icon) => (
					<Link href={`https://${icon.name}.com/${icon.user}`}>
						<li key={icon.name}>
							<img id={icon.name} src={`/icons/dark/social/${icon.name.toLowerCase()}.png`} alt={icon.name}/>
						</li>
					</Link>
				))}
			</ul>

			<style jsx>{`
			ul {
				align-items: center;
			}
			li {
				margin: 5px;
				padding: 0 .6rem;
				cursor: pointer;
			}
			#Facebook {
				width: 20px;
				height: 40px;
			}
			#light {display: flex;}
			#dark {display: none;}
			@media(prefers-color-scheme: dark) {
				#dark {display: flex;}
				#light {display: none;}
			}
			`}</style>
	</>
)}
