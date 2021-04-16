import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

export default function Artist(props) {
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
			margin: 0 auto;
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
                    .releases .list img {
                        width: 300px;
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
                        margin-right: 4rem8
                        margin-right: 4rem;
                    }
                    .text {
                        justify-content: space-around;
                        align-items: flex-start;
			max-width: 900px;
			margin-left: 2rem;
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
