import Layout from '../comps/layout/layout'
import content from '../content/about.json'
export default function About() {
	return (
		<Layout title="About" description="Learn more about...">
			<h1>{content.title}</h1>
			<p>{content.subheading}</p>
		</Layout>
)}
