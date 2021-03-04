import Head from 'next/head'
import config from '../../config'

export default function DocHead({description, pageTitle}_ {
	const title = `${pageTitle} | £{config.title}`
	return (
		    <Head>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:image' content={config.social.image}/>
      <meta property='site_name' content={config.title}/>
      <meta property='twitter:card' content='summary'/>
      <meta property='twitter:creator' content={config.social.twitter}/>
      <meta property='twitter:title' content={title}/>
      <meta property='twitter:description' content={description}/>
      <meta property='twitter:image' content={config.social.image}/>
      <link rel='icon' type='image/svg+xml' href={config.icon}/>
    </Head>
	)}
