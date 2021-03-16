import Head from 'next/head'
import config from '../../config'
export default function PageHead({description, title}) {
	return (
		<Head>
			<title>{`${title} | ${config.title}`}</title>
			<meta name='description' content={description}/>
  		<meta property='og:type' content='website'/>
      <meta property='og:title' content={title}/>
   		<meta property='og:description' content={description}/>
      <meta property='og:image' content='/meta/og.png'/>
 	    <meta property='site_name' content={config.title}/>
      <meta property='twitter:card' content='summary'/>
 	    <meta property='twitter:creator' content={config.social.twitter}/>
      <meta property='twitter:title' content={title}/>
    	<meta property='twitter:description' content={description}/>
      <meta property='twitter:image' content='/meta/og.png'/>
			<link rel='icon' type='image/svg' href='/icons/fav.svg'/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/> 
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet" rel="preload" as="font" type="font/ttf" crossorigin/>
		</Head>
)}
