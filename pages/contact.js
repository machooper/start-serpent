import Layout from '../comps/layout/layout'
import Title from '../comps/ui/title'
import ContactForm from '../comps/forms/contact'

export default function Contact() {
	return (
		<Layout title="Contact" description="Contact here">
			<Title anchor="/contact" text="Contact"/>
			<ContactForm/>
		</Layout>
)}
