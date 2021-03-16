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
          width: 100vw;
          min-height: 100vh;
	        position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          right: ${menu ? '0' : '-100vw'};
          background: var(--primary);
          width: 100vw;
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
	@media(prefers-color-scheme: dark) {
		svg rect {
			fill: var(--white);
		}
	}
        @media(min-width: 1360px) {
          #menu {
            width: 500px;
            min-height: auto;
            transform: translate(0);
            background: transparent;
            position: relative;
          }
          ul {
            flex-direction: row;
          }
          ul li a {
            padding: 0 1rem;
          }
          #menubtn {padding: 1rem 0; display: none;}
          #close {display: none;}
        }
      `}</style>
    </>
  );
}
