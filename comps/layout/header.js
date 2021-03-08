import Banner from './banner'
import Logo from '../ui/logo'
import Menu from './menu'
import config from '../../config'

export default function Header() {
  return (
    <>
      <Banner banner={config.banner.visible}/>
      <header>
        <Logo/>
        <Menu/>
      </header>

      <style jsx>{`
        header {
          width: 100vw;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.2rem;
          margin: 0 auto;
          position: fixed;
          top: 0;
          z-index: 1;
        }
        @media(min-width: 760px) {
          header {
            padding: 0 3rem;
          }
        }
        @media(min-width: 3840px) {
          header {
            padding: 0 4rem;
          }
        }
      `}</style>
    </>
  )}
