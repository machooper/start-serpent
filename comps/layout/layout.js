import Header from './header/header'
import Footer from './footer'

export default funciton Layout({title, description, children}) {
	return (
		<>
			<div className="wrapper">
				<Header/>
					<div className="content">
						{children}
					</div>
				<Footer/>
			</div>

			<style jsx>{`
				.wrapper {
					min-height: 100vh;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 100px;
				}
				.content {
					flex: 1 0 auto;
					margin: 0 auto;
				}
			`}</style>
		</>
	)}
