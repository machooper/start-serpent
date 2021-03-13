import Link from 'next/link'

export default function PostList({posts}) {
	return (
		<>
			{posts.map((post, index) => {
				return (
				<div key={post.id} className="post">
					<div>
						<img src={post.image} alt={post.title}/>
						<h3>
							<Link as={`/posts/${post.slug}`} href="/posts/[slug]">
								<a>{post.title}</a>
							</Link>
						</h3>
					</div>
					<p>{post.excerpt}</p>
				</div>
			)})}

			<style jsx>{`
			.post {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.post img {
				width: 100px;
				height: 100px;
			}
			`}</style>
		</>
)}
