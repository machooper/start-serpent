import content from '../../content/footer.json'
export default function Mailing() {
	return (
		<>
			<div className="info">
				<h1>{content.title}</h1>
				<span>{content.span}</span>
				<img src="/icons/light/logo2.png" alt="Start Serpent Full Logo"/>
			</div>
			<form>
				<label>Full Name</label>
				<input type="text" name="name"/>
				<label>E-Mail Address</label>
				<input type="email" name="email"/>
			</form>

			<style jsx>{`
				.info {
					height: 220px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
				}
				.info img {
					width: 80%;
				}
				form {
					display: flex;
					flex-direction: column;
					margin-bottom: 2rem;
				}
				form label {
					margin: 2rem 0 .1rem 0;
				}
				form input {
					background: transparent;
					border: 1px solid var(--white);
			`}</style>
		</>
)}
