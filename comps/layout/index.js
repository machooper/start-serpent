import Head from './head'
import Wrapper from './wrapper'
import Header from './header/index'
import Content from './content'
import Footer from './footer/index'
export default function Layout({title, description, children}) {
	return (
		<>
			<Head title={title} description={description}/>
				<Wrapper>
					<Header/>
						<Content content={children}/>
					<Footer/>
				</Wrapper>
		</>
)}
