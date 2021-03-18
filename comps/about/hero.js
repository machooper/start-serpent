import Title from '../ui/title'
import content from '../../content/about.json'
export default function Hero() {
	return (
		<>
			<div className="hero">
				<Title anchor="/" text={content.title}/>
				<img src={content.img} alt={content.imgalt}/>
				<p>{content.subheading}</p>
			</div>

			<style jsx>{`
				.hero {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					margin-bottom: 2rem;
				}
				img {
					width: 100vw;
					margin: 1rem 0;
				}
				p {
					display: none;
				}
				@media(min-width: 760px) {
					p {
						display: block;
					}
				}
			`}</style>
		</>
)}
