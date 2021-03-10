import Document, {Html, Head, Main, NextScript} from 'next/document'
import config from '../config'
class MyDocument extends Document {
	static async getinitialProps(ctx) {
		const initalProps = await Document.getInitialProps(ctx)
		return {...initialProps}
	}
	render() {
		return (
			<Html lang={config.language}>
				<Head/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
)}}

export default MyDocument
