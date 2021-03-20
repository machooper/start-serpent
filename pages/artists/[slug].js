import Head from 'next/head'
import Link from 'next/link';
import {getPostBySlug, getAllPosts} from '../../lib/posts'
import md from '../../lib/md'
import releases from '../../content/releases.json'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

export default function Post(post) {
    console.log(post.post.releases);
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
                    </div>
                </div>
                <div className="releases">
                	<h1 className="title">Latest Releases</h1>
                	<div className="list">
                      {post.post.releases.map((release, index) => {
                          return (
                              <div key={release.id}>
                                  <Link href={release.link}>
                                      <img src={release.img} alt={post.post.title}/>
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
                @media(min-width: 760px) {
                    .container img {
                        width: 400px;
                    }    
                    .releases {
                        margin-top: 2rem;
                    }
                    .releases .list img {
                        width: 300px;
                    }
                }
                @media(min-width: 1020px) {
                    #hero {
                        width: 450px;
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
}
