export default function Wrapper({children}) {
	return (
		<>
			<div className="wrapper">
				{children}
			</div>
			
			<style jsx>{`
			.wrapper {
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			`}</style>
		</>
