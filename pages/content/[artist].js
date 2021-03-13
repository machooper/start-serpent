import Head from 'next/head
import Link from 'next/link'
import Layout from '../../comps/layout/layout'
import {getPostBySlug, getAllPosts} from '../../lib/fetchposts'
import md from '../../lib/md'
import PostBody from '../../comps/blog/body'

export default function Artist(post) {
	return (
		<Layout title={`${post.post.title}`} description={post.post.excerpt}>
			<Head>
				<meta property='og:image' content={post.post.ogImage}/>
				<meta propert='twitter:image' content={post.post.ogImage}/>
			</Head>

			<div className="container">
				<h1>{post.post.title}</h1>
				<img src={post.post.coverImage} alt={post.post.title}/>
				<PostBody content={post.post.content}/>
			</div>

			<style jsx>{`
				.container {
					width: 90vw;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.container h1 {
					font-weight: 500;
					text-align: center;
				}
				.container img {
					width: 100%;
				}
				@media(min-width: 1020px) {
					.container img {
						width: 700px;
						height: 400px;
						margin: 1rem 0;
					}
					.container {
						width: 700px;
					}
				}
				@media(min-width: 3000px) {
					.container img {
						width: 1400px;
						height: 800px;
						margin: 1rem 0;
					}
					.container {
						width: 1400px;
					}
				}
			`}</style>
		</Layout>
)}
