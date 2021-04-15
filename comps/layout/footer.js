import Copy from './copy'
import Social from '../ui/social'
import Mailing from './mailing'
export default function Footer() {
  return (
    <>
      <footer>
        <Mailing/>
        <Copy/>
      </footer>
      
      <style jsx>{`
      footer {
         width: 100vw;
         display: flex;
         color: var(--white);
         flex-direction: column;
         align-items: center;
         background: var(--quaternary);
         padding: 2rem 0 .5rem 0;
      }
      @media(min-width: 760px) {
        footer {
         justify-content: space-between;
         align-items: center;
         flex-shrink: 0;
         padding: 2rem 1rem .5rem 1rem;
         margin: 2rem 0 0 0;
        }
      }
      `}</style>
    </>
)}
