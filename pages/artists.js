import Link from 'next/link'
import Layout from '../comps/layout/layout'
import {getAllPosts} from '../lib/posts'
import PostList from '../comps/artists/list'

export default function Blog({allPosts}) {
  return (
    <Layout title="Artists" description="A collection of artists managed by Star Serpent Records">
      <PostList posts={allPosts}/>
    </Layout>
)}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'slug',
    'image',
    'releases',
    'url'
  ])
  return {
    props: {allPosts}
}}
