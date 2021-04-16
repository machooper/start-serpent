import Link from 'next/link'

<<<<<<< HEAD
export default function List({artists}) {
	return (
		<>
			<div className="artists">
=======
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
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
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
			@media(min-width: 600px) {
				.artists {
					width: 100vw;
					display: flex;
					flex-direction: row;
					justify-content: center;
					flex-wrap: wrap;
				}
				.post {
					width: 300px;	
					margin: .6rem .6rem;
				}
				.post:hover {
					transform: translate(7px, -10px) scale(1.04);
					transition: .3s ease;
				}
			}
			`}</style>
		</>
)}
