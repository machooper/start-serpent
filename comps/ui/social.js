import Link from 'next/link'
import config from '../../config'
export default function Social() {
	return (
		<>
			<ul>
				{config.social.map((icon) => (
					<Link href={`https://${icon.name}.com/${icon.user}`}>
						<li key={icon.name}>
							<img src={`/social/${icon.name.toLowerCase()}.svg`} alt={icon.name}/>
						</li>
					</Link>
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
	</>
)}
