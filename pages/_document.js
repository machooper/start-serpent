import Document, {HTML, Head, Main, NextScript} from 'next/document'

classMyDocument extends Document {
	static async getinitialProps(ctx) {
		const initalProps = await Document.getInitialProps(ctx)
		return {...initialProps}
	}
	render() {
		return (
			<Html lang={config.lang}>
				<Head/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
)}}

export default MyDocument
