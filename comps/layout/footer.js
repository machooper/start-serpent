import Link from 'next/link'
import Social from '../ui/social'

export default function Footer() {
  return (
  <>
    <footer>
      <Link href="/"><a>&copy; Name</a></Link>
      <Social/>
    </footer> 

    <style jsx>{`
      footer {
        padding: 0 1rem;
      }
      a {
        font-size: 1.4rem;
      }
    `}</style>
  </>
)}
