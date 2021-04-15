import sanityClient from '@sanity/client'

export default sanityClient({
	projectID: 'ss',
	dataset: 'content',
	useCdn: true
})
