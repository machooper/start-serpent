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
					<b>{content.subheading}</b>
					<p>{content.par1}</p>
					<p>{content.par2}</p>
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
					margin-top: -1rem;
				}
				.text {
					max-width: 90vw;
				}
				p {
					text-align: left;
				}
				@media(min-width: 760px) {
					b {
						display: none;
					}
				}
			`}</style>
		</Layout>
)}
