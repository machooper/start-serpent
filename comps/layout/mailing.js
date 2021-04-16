import content from '../../content/footer.json'
export default function Mailing() {
	return (
		<>
			<div className="container">
				<div className="info">
					<h1>{content.title}</h1>
					<span>{content.span}</span>
					<img src="/icons/light/logo2.png" alt="Start Serpent Full Logo"/>
				</div>
				<form>
<<<<<<< HEAD
					<label htmlFor="name">Full Name
						<input type="text" name="name"/>
					</label>
					<label htmlFor="email">E-Mail Address
=======
					<label for="name">Full Name
						<input type="text" name="name"/>
					</label>
					<label for="email">E-Mail Address
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
						<input type="email" name="email"/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>

			<style jsx>{`
				.info {
					height: 220px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					color: var(--white);
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
					display: flex;
					flex-direction: column;
					margin: 2rem 0 .1rem 0;
				}
				form input {
					max-width: 90vw;
					color: var(--white);
					background: transparent;
					border: 1px solid var(--white);
				}
				button {
					background: var(--secondary);
					color: var(--black);
					padding: var(--btnpadding);
					min-width: 150px;
					margin: 2rem auto;
				}
				@media(min-width: 760px) {
					.container {
						min-height: auto;
						display: flex;
						justify-content: space-evenly;
					}
			`}</style>
		</>
)}
