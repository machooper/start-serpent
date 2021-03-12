import content from '../../content/home.json'
import Title from '../ui/title'
import Button from '../ui/button'
export default function Hero() {
	return (
		<>
			<div className="container">
				<div className="content">
					<h1>{content.title}</h1>
					<p>{content.subheading}</p>
					<Button url="/about" text="Find Out More"/>
				</div>
			</div>
			
			<style jsx>{`
				.container {
					width: 100vw;
					display: flex;
					justify-content: center;
					padding-bottom: 10rem;
				}
				.content {
					text-align: center;
				}
				p {
					margin: 2rem 0;
				}
			`}</style>
		</>
)}
