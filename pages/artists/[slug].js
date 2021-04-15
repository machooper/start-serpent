import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import releases from '../../content/releases.json'
import Layout from '../../comps/layout/layout'
import Body from '../../comps/artists/body'
import Button from '../../comps/ui/button'

export default function Artist(post) {
    const router = useRouter()

    return (
        <Layout title="blog" description="">
            <Head>
                <meta property='og:image' content="" />
                <meta property='twitter:image' content="" />
            </Head>
            <div className="container">
                <h1>{router.query.slug}</h1>
                <div className="content">
                    <img id="hero" src="" alt=""/>
                    <div className="text">
                      <Body content=""/>
                      <Button url={`https://$""`} text="Listen Now"/>
                    </div>
                </div>
                <div className="releases">
                <h1>{router.query.slug}</h1>
                	<h1 className="title">Latest Releases</h1>
                	<div className="list">
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
    )
}
