export default function Content({content}) {
	return (
	<>
		<div className="content">
			{content}
		</div>	
		
		<style jsx>{`
			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				flex: 1 0 auto;
		 	}
		 	@media(min-width: 760px) {
				.content {
					max-width: 960px;
					margin: 0 auto;
			 }
		 	}
		  @media(min-width: 2500px) {
				.content {
					max-width: 100vw;
					margin: 0;
				}
		  }	
		`}</style>
	</>
)}
