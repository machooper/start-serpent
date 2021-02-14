import Banner from './banner'
import Logo from '../../ui/logo'
export default function Header() {
	return (
		<>
			<header>
				<Banner/>
				<Logo url="/"/>
			</header>
		
			<style jsx>{`
			header {
				width: 100vw;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 2rem;
			}
			`}</style>
		</>
)}
