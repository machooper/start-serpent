import Head from 'next/head'
import config from '../../config'
export default function PageHead({description, title}) {
	return (
		<Head>
			<title{`${title} | ${config.title}`}</title>
			<meta name='description' content={description}/>
  		<meta property='og:type' content='website'/>
      <meta property='og:title' content={title}/>
   		<meta property='og:description' content={description}/>
      <meta property='og:image' content='/meta/og.png'/>
 	    <meta property='site_name' content={seo.title}/>
      <meta property='twitter:card' content='summary'/>
 	    <meta property='twitter:creator' content={seo.social.twitter}/>
      <meta property='twitter:title' content={title}/>
    	<meta property='twitter:description' content={description}/>
      <meta property='twitter:image' content='/meta/og.png'/>
			<link rel='icon' type='image/svg' href='/icons/fav.svg'/>
		</Head>
)}
