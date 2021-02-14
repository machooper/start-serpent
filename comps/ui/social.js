import Link from 'next/link'
import config from '../../config'
export default function Social() {
	return (
		<>
			<ul>
				{config.social.map((icon) => (
					<li>
						<Link href={`https://${name}.com/${user}`}/>
							<img src={`/social/${icon.name.toLowerCase()}.svg`} alt={icon.name}/>
						</Link>
					</li>
				))}
			</ul>
			
			<style jsx>{`
			ul {
				display: flex;
				align-items: center;
			}
			li {
				margin: 5px;
			}
			`}</style>

