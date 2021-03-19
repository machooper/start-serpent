import {useState} from 'react'
import Link from 'next/link'
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
          <rect width="40" height="3" x="0" y="12"/>
          <rect width="40" height="3" x="0" y="24"/>
        </svg>
      </a>
      <nav id="menu">
        <a id="close" onClick={menuToggle}>&times;</a>
        <ul>
          {config.navigation.map((link) => (
            <li key={link}>
              <Link href={link}>
                <a onClick={menuToggle}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        #menu {
          min-height: 100vh;
	        position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          right: 0;
          width: ${menu ? '100vw' : '0vw'};
          background: var(--primary);
          transition: 0.3s ease;
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
          display: ${menu ? 'block':'none'};
          text-decoration: none;
        }
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ul {
          display: flex;
          flex-direction: column;
          text-align: center;
          display: ${menu ? 'block':'none'};
        }
        ul li {
          padding: 1rem 0;
        }
        ul li a {
          color: inherit;
	        font-size: 1.8rem;
        }
        svg rect {
          fill: var(--black);
        }
        @media(min-width: 760px) {
          #menubtn {
            display: none;
          }
          #menu {
            width:  auto;
            min-height: auto;
            position: relative;
          }
        }  
	      @media(prefers-color-scheme: dark) {
		      svg rect {
		  	    fill: var(--white);
	        }
        }
        @media(min-width: 760px) {
          #menu {
            background: transparent;
          }
          ul {
            display: flex;
            flex-direction: row;
          }
          ul li {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}
