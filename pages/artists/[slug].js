import Head from 'next/head'
import Link from 'next/link';
import {getPostBySlug, getAllPosts} from '../../lib/posts'
import md from '../../lib/md'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

export default function Post(post) {
    return (
        <Layout title={`${post.post.title}`} description={post.post.excerpt}>
            <Head>
                <meta property='og:image' content={post.post.image} />
                <meta property='twitter:image' content={post.post.image} />
            </Head>
            <div className="container">
                <h1>{post.post.title}</h1>
                <img src={post.post.artistImage} alt={post.post.title}/>
                <Body content={post.post.content}/>
                <Button url={`https://${post.post.url}`} text="Listen Now"/>
            </div>
            {/*            <div className="releases">
                <Link href={post.post.releases.oneu}>
                    <img src={post.post.releases.one} alt={post.post.releases.one}/>
                </Link>
            </div>
                */}
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
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'id',
        'title',
        'date',
        'artistImage',
        'image',
        'releases',
        'url',
        'slug',
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
