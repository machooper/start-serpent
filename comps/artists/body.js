import md from './md.module.css'

export default function Body({content}) {
	return (
		<div 
			className={md['md']}
			dangerouslySetInnerHTML={{__html: content}}
		/>
	)}
