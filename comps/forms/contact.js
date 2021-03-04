export default function ContactForm() {
	return (
		<>
			<form>
      	<input id="name" name="name" type="text" placeholder="Name"/>
      	<input id="email" name="email" type="email" placeholder="Email"/>
      	<textarea id="message" name="message" placeholder="Message"/>
      	<button id="send" className="btn-primary" name="send" type="submit" >Send!</button>
			</form>

				<style jsx>{`
					form {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					input, textarea {
						width: 200px;
						background: var(--tertiary);
						font-family: var(--head);
						font-size: 11px;
						font-weight: 100;
						color: var(--white);
						text-align: center;
						border: none;
						border-radius: 5px;
						margin: .5rem 0;
						box-shadow: 1.5px 3px 6px rgba(shade);
					}
					input {
						height: 25px;
					}
					textarea {
						height: 70px;
						resize: none;
						padding-top: .3rem;
					}
					button {
						margin-top: 1rem;
					}
					@media(prefers-color-scheme: dark) {
						input, textarea, button {
							color: var(--black);
							background: var(--tertiary);
						}
					}
					@media(min-width: 1360px) {
						input {height: 35px;}
						textarea {height: 100px;}
					}
					@media(min-width: 1400px) {
						input, textarea {width: 280px;}
					}
				`}</style>
		</>
			)}
