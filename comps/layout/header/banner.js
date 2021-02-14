import {useState} from 'react'
import config from '../../../config'
export default function Banner() {
	var [banner, setBanner] = useState(config.banner.visible)
	function closeBanner() {
		setBanner(false)
	}
	return (
		<>
			<div>
				<p>{config.banner.message}</p>
				<a onClick={closeBanner}>&times;</a>
			</div>
		
		<style jsx>{`
		background: ${config.banner.color};
		display: ${banner ? 'grid' : 'none'}
		a {color: inherit;}
		a:hover {border-bottom: none; color: inherit;}
		div {
			width: 100vw;
			height: 0px;
			opacity: 0;
			place-items: center;
			position: absolute;
			top: 0; left: 0;
			animation: slideDown .3s forwards;
		}
		div a {
			position: absolute;
			right: 10px;
		}
		@keyframes slideDown {
			100% {height: 30px;opacity:1;}
		}
		`}</style>
	</>
)}
