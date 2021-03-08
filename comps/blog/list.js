import Link from 'next/link'
import Post from './post'

export default function PostList({posts}) {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					excerpt={post.excerpt}
				/>
			))}
		</div>
	)}
