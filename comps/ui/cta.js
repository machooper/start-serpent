import Button from './button'
import Title from './title'

export default function CTA({title, text, button, url}) {
	return (
		<>
			<div id="cta" className="container">
				<Title text={title}/>
				<p>{text}</p>
				<Button url={url} text={button} variant="primary"/>
			</div>

			<style jsx>{`
				#cta {
					height: 40vh;
				}
			`}</style>
		</>
	)
}
