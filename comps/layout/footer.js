import Copy from './copy'
import Social from '../ui/social'
export default function Footer() {
  return (
    <>
      <footer>
        <Copy/>
        <Social/>
      </footer>
      
      <style jsx>{`
      footer {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        padding: 0 1rem .5rem 1rem;
        margin: 2rem 0 0 0;
      }
      `}</style>
    </>
)}
