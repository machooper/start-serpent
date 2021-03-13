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
				width: 300px;
				height: 400px;
				background: grey;
				position: relative;
				cursor: pointer;
				transition: .3s ease;
				margin: 1rem 0;
			}
			.post:hover {
				transform: translate(10px, -10px) scale(1.04);
				transition: .3s ease;
			}
			.post img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			`}</style>
		</>
)}
