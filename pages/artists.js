import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Layout from '../comps/layout/layout'
import Title from '../comps/ui/title'
import List from '../comps/artists/list'
export default function Artists(props) {
	const {artists = []} = props
	function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
  return (
    <Layout title="Blog" description="A collection of stories, opinions and tutorials by Mac Hooper">
      <Title anchor="/artists" text="Artists"/>
	  {artists.map(
		  ({_id, title='', slug='', listImage=''}) =>
		    slug && (
		      <li key={_id} className="post">
		       <Link href="/artists/[slug]" as={`/artists/${slug.current}`}>
			    <img
			    	src={urlFor(listImage)
				.url()}
			   />
			   </Link>

			    </li>
		    )
	  )}

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
			@media(min-width: 500px) {
				.post {
					width: 300px;
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
    </Layout>
  )
}

Artists.getInitialProps = async () => ({
    artists: await client.fetch(groq`
      *[_type == "artist"]
    `)
})
