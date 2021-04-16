import Head from 'next/head'
<<<<<<< HEAD
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
=======
import Link from 'next/link';
import {getPostBySlug, getAllPosts} from '../../lib/posts'
import md from '../../lib/md'
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
import releases from '../../content/releases.json'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

<<<<<<< HEAD
function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

export default function Artist(props) {
	console.log(props)
    const {
      title = 'Missing Title',
      releases,
      body,
      mainImage
    } = props

    return (
        <Layout title="blog" description="">
            <Head>
                <meta property='og:image' content={props.mainImage} />
                <meta property='twitter:image' content={props.mainImage} />
            </Head>
            <div className="container">
	    	    <h1>{props.title}</h1>
                <div className="content">
                    <img 
	    		id="hero" 
	    		src={urlFor(mainImage)
			.url()}
	    	    />

                    <div className="text">
	    	      <BlockContent 
	    		blocks={props.body}
	    		imageOptions={{w:320, fit: 'max'}}
	    		{...client.config()}
	    	    />
	    			
                      <Button url={props.listen} text="Listen Now"/>
=======
export default function Post(post) {
    return (
        <Layout title={`${post.post.title}`} description={post.post.excerpt}>
            <Head>
                <meta property='og:image' content={post.post.image} />
                <meta property='twitter:image' content={post.post.image} />
            </Head>
            <div className="container">
                <h1>{post.post.title}</h1>
                <div className="content">
                    <img id="hero" src={post.post.artistImage} alt={post.post.title}/>
                    <div className="text">
                      <Body content={post.post.content}/>
                      <Button url={`https://${post.post.url}`} text="Listen Now"/>
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                    </div>
                </div>
                <div className="releases">
                	<h1 className="title">Latest Releases</h1>
                	<div className="list">
<<<<<<< HEAD
	    		{props.releases.map(release => {
				let relimg = release.image
				return (
				  <div key={release._id}>
				   <Link href={release.url}>
				    <img 
					src={urlFor(relimg)
					.url()} 
					style={{cursor: 'pointer'}}
					alt={`${release.title} image`}/>
					</Link>
		         		</div>
				)})}
=======
                      {post.post.releases.map((release, index) => {
                          return (
                              <div key={release.id}>
                                  <Link href={release.link}>
                                      <img src={release.img} alt={post.post.title}/>
                                    </Link>
                                </div>
                          )})}
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                	</div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 90vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 2rem;
                }
                .container h1 {
                    font-weight: 500;
                    text-align: center;
                    margin-bottom: 1rem;
                }
                .container img {
                    width: 100%;
                }
                .text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
               }
                @media(min-width: 600px) {
                    .container img {
                        width: 400px;
                    }    
                    .releases {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin-top: 2rem;
                    }
                    .releases .list {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
<<<<<<< HEAD
                    .releases .list img div {
                        width: 300px;
			cursor: pointer;
=======
                    .releases .list img {
                        width: 300px;
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                    }
                }
                @media(min-width: 1020px) {
                    #hero {
                        width: 300px;
                    }
                    .content {
                        width: 90vw;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
<<<<<<< HEAD
			align-items: flex-start;
                        padding-top: 1rem;
                    }
		    .text {
		    	max-width: 600px;
			margin-left: 2rem;
		}
                }
		@media(min-width: 1360px) {
			.text {
				max-width: 700px;
				}
				}
=======
                        align-items: flex-start;
                        padding-top: 1rem;
                    }
                }
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                @media(min-width: 1600px) {
                    .content {
                        justify-content: center;
                    }
                    #hero {
                        width: 400px;
<<<<<<< HEAD
                        margin-right: 4rem8
=======
                        margin-right: 4rem;
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                    }
                    .text {
                        justify-content: space-around;
                        align-items: flex-start;
<<<<<<< HEAD
			max-width: 900px;
			margin-left: 2rem;
=======
                        height: 430px;
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                    }
                }
                @media(min-width: 3000px) {
                    .container img {
                        width: 1400px;
<<<<<<< HEAD
=======
                        height: 800px;
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
                        margin: 1rem 0;
                    }
                    .container {
                        width: 1400px;
                    }
                }
            `}</style>
        </Layout>
<<<<<<< HEAD
)}

const query = groq`*[_type == "artist" && slug.current == $slug][0]{
  title,
  mainImage,
  body,
  listen,
  "releases": releases[]->
}`
Artist.getInitialProps = async function (context) {
	const {slug = ""} = context.query
	return await client.fetch(query, {slug})
=======
    )
}

export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug, [
        'id',
        'title',
        'date',
        'artistImage',
        'image',
        'releases',
        'url',
        'slug',
        'releases',
        'content'
    ])
    const content = await md(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
>>>>>>> 3767c0b17f41bbce9fb09eacc02a4981b0f3b9a3
}
