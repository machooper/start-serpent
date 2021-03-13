export default function PostHeader({title, coverImage, date, author}) {
	return (
		<>
			<Title text={title}/>
			<div className="info">
				<div id="author">
					<img 
						src={`/blog/authors/${author}.webp`}
						alt={`${author} Profile Image`}
					/>
					<h3>{author}</h3>
				</div>

				<style jsx>{`
					
				`}</style>
			</>
