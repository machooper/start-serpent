import Layout from '../comps/layout/layout'
import Hero from '../comps/about/hero'
import Social from '../comps/ui/social'
import Button from '../comps/ui/button'
import content from '../content/about.json'

export default function About() {
	return (
		<Layout title="About" description="Learn more about...">
			<Hero/>
			<div className="container">
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus odio, mollis eget volutpat quis, ultrices nec felis. Integer consectetur lacus quam. Cras purus lectus, rutrum a arcu at, blandit volutpat leo. Curabitur ut nibh a massa sagittis varius. Donec pretium convallis volutpat. Curabitur ut efficitur lectus. Quisque nisl sapien, cursus sed viverra a, luctus ac ex. Fusce lacinia aliquet volutpat. Donec lobortis dignissim lacinia.</p>
	
					<p>Aliquam dignissim feugiat nisi, vel mattis arcu blandit et. Curabitur in interdum turpis. Curabitur pretium gravida vulputate. Praesent id libero eu tellus sodales maximus. Nunc a dictum erat. In volutpat hendrerit est vitae scelerisque. Suspendisse sed sem viverra, dapibus enim eget, pulvinar ligula.</p>
				</div>

				<Social/>
				<Button url="/contact" text="Contact"/> 
			</div>

			<style jsx>{`
				.container {
					height: 100vh;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding-bottom: 1rem;
				}
				p {
					text-align: left;
				}
			`}</style>
		</Layout>
)}
