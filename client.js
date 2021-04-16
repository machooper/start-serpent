import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'h3zywcf7',
	dataset: 'content',
	apiVersion: '2021-03-25',
	useCdn: true
})
