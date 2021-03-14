import Link from 'next/link'
import Layout from '../comps/layout/layout'
import {getAllPosts} from '../lib/posts'
import List from '../comps/artists/list'
export default function Blog({allPosts}) {
  return (
    <Layout title="Blog" description="A collection of stories, opinions and tutorials by Mac Hooper">
	    <List posts={allPosts}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'date',
    'slug',
    'image',
  ])
  return {
    props: {allPosts}
  }
}
