import config from '../config'
import content from '../content/home.json'
import Layout from '../comps/layout/index'
export default function Index() {
	return (
		<Layout title="Home" Description={config.description}>
			<h1>{content.title}</h1>
			<p>{content.subheading}</p>
		</Layout>
)}
