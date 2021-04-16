import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import releases from '../../content/releases.json'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

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
                <div className="content">
	    	    <h1>{props.title}</h1>
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
                    </div>
                </div>
                <div className="releases">
                	<h1 className="title">Latest Releases</h1>
                	<div className="list">
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
                    .releases .list img div {
                        width: 300px;
			cursor: pointer;
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
                        align-items: flex-start;
                        padding-top: 1rem;
                    }
                }
                @media(min-width: 1600px) {
                    .content {
                        justify-content: center;
                    }
                    #hero {
                        width: 400px;
                        margin-right: 4rem;
                    }
                    .text {
                        justify-content: space-around;
                        align-items: flex-start;
                        height: 430px;
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
}
