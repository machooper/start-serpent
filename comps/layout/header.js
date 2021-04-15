import Banner from './banner'
import Logo from '../ui/logo'
import Menu from './menu'
export default function Header() {
  return (
    <>
      <header>
        <Banner/>
        <Logo url="/"/>
        <Menu/>
      </header>
    
      <style jsx>{`
      header {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
      }
      `}</style>
    </>
)}
