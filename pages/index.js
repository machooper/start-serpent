import config from '../config'
import Layout from '../comps/layout/index'
export default funciton Index() {
	return (
		<Layout title="Home" Description={config.description}/>
			<h1>Index Page</h1>
			<p>Content goes here</p>
		</Layout>
)}
