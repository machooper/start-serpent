import {useEffect} from 'react'
import {vars} from '../lib/var'
import '../styles/global.css'
export default function App({Component, pageProps}) {
	useEffect(() => {vars()})
	return <Component{...pageProps}/>
}
