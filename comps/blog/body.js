import md from './md.module.css'

export default function PostBody({content}) {
	return (
		<div 
			className={md['md']}
			dangerouslySetInnerHTML={{__html: content}}
		/>
	)}
