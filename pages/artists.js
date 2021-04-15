import Link from 'next/link'
import Layout from '../comps/layout/layout'
import Title from '../comps/ui/title'
import List from '../comps/artists/list'
export default function Blog({allPosts}) {
  return (
    <Layout title="Blog" description="A collection of stories, opinions and tutorials by Mac Hooper">
      <Title anchor="/artists" text="Artists"/>
	    <List posts={allPosts}/>
    </Layout>
  )
}
