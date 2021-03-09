import config from '../config'
import content from '../content/home.json'
import Layout from '../comps/layout/layout'
export default function Index() {
	return (
		<Layout title="Home" description="Testing Description">
			<h1>{content.title}</h1>
			<p>{content.subheading}</p>
		</Layout>
)}
