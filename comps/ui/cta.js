import Button from './button'
import Title from './title'

export default function CTA({title, text, button, url}) {
	return (
		<>
			<div id="cta">
				<Title text={title}/>
				<p>{text}</p>
				<Button url={url} text={button} variant="primary"/>
			</div>

			<style jsx>{`
			#cta {
				width: 100vw;
				height: 200px;
				display: flex;
				flex-direction: column;
				color: var(--black);
				align-items: center;
				justify-content: center;
				background: var(--grey);
			}
			`}</style>
		</>
	)
}
