import content from '../../content/about.json'
export default function Hero() {
	return (
		<>
			<div className="hero">
				<h1>{content.title}</h1>
				<img src={content.img} alt={content.imgalt}/>
				<span>{content.subheading}</span>
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
			`}</style>
		</>
)}
