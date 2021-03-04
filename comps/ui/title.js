export default function Title({anchor, text}) {
	return (
		<>
			<a name={anchor}>
				<h2>{text}</h2>
			</a>

			<style jsx>{`
				h2 {
					font-family: var(--head);
					text-align: center;
					margin-bottom: 2rem;
				}
			`}</style>
		</>
	)}
