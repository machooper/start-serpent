import Link from 'next/link'

export default function List({posts}) {
	return (
		<>
			<div className="artists">
				{posts.map((post, index) => {
					return (
					<Link as={`/artists/${post.slug}`} href="/artists/[slug]">
						<div key={post.id} className="post">
							<div>
								<img src={post.image} alt={post.title}/>
								<h3>
									<a>{post.title}</a>
								</h3>
							</div>
						</div>
					</Link>
					)})}
			</div>

			<style jsx>{`
			.post {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 85vw;
				height: 400px;
				background: grey;
				position: relative;
				cursor: pointer;
				transition: .3s ease;
				margin: 1rem 0;
			}
			.post:hover {
				transform: translate(7px, -10px) scale(1.04);
				transition: .3s ease;
			}
			.post img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			@media(min-width: 410px) {
				.post {
					height: 435px
				}
			}
			@media(min-width: 760px) {
				.artists {
					display: flex;
					flex-direction: row;
					justify-content: center;
					flex-wrap: wrap;
				}
				.post {
					width: 300px;	
					margin: .6rem .6rem;
				}
			}
			`}</style>
		</>
)}
