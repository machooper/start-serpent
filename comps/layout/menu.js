import Link from 'next/link'
import {useState} from 'react'
import config from '../../config'

export default function Menu() {
  const [menu, setMenu] = useState(false);

  const menuToggle = () => {
    setMenu(!menu),
      [menu, setMenu]
  }

  return (
   <>
      <a id="menubtn" onClick={menuToggle}>
        <svg width="40" height="40">
          <rect width="40" height="3" x="0" y="12" style={{fill: '#1c1c1c'}}/>
         <rect width="40" height="3" x="0" y="24" style={{fill: '#1c1c1c'}}/>
       </svg>
      </a>
      <nav id="menu">
        <a id="close" onClick={menuToggle}>&times;</a>
        <ul>
          {config.navigation.map((link) => (
            <li key={link}>
              <Link href={`/${link.toLowerCase()}`}
                <a onClick={menuToggle}>{link}</a>
              </Link>
            </li>
         ))}
        </ul>
      </nav>

      <style jsx>{`
        #menu {
         width: 100vw;
         min-height: 100vh;
         position: absolute;
         top: 0;
         right: 0;
         background: var(--darkshade);
         transform: translate($menu ? '0%' : '130%'});
         transition: .3s ease;
         z-index: 1;
       }
       #menubtn {
         display: block;
       }
       #close {
         position: absolute;
         top: 45px;
         right: 45px;
         font-size: 2.5rem;
         color: var(--white);
       }
       nav {
         display: flex;
         justify-content: center;
         align-items: center;
       }
       ul {
         display: flex;
         flex-direction: column;
       }
       ul li {
         color: var(--white);
         font-size: 1.8rem;
         padding-bottom: 20px;
       }
       @media(prefers-color-scheme: dark) {
         svg {
           fill: #fcfcfc;
         }
       }
       @media(min-width: 1360px) {
         #menu {width: 30vw;}
         #menubtn {padding: 1rem 0;}
       }
     `}</style>
   </> 
 );
}

