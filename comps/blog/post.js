import Link from 'next/link'
import Date from './date'

export default function Post({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}) {
	return (
		<div>
			<img src={coverImage} alt={title}/>
			<h3>
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a>{title}</a>
				</Link>
			</h3>
			<Date date={date}/>
		</div>
		<p>{excerpt}</p>
		<div>
			<img 
				src={`/blog/authors/${author}.webp`}
				alt={`${author} Profile Image`}
			/>
			<h3>{author}</h3>
		</div>
)}
