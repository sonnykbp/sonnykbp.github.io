import Link from 'next/link'
import { useRef, createRef } from 'react'

const Header = () => {
    return (
    <header className="navbar-fixed-top">

      <h1><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span><Link href="/"><a id="home-nav">SONNY KEOBOUNPHANH</a></Link></h1>

      <h1 className="name-mobile"><Link href="/"><a id="home-nav">SONNY KEOBOUNPHANH</a></Link></h1>


      <nav>
        <div className="nav_bar">
          <ul>
            <li><Link href="/#about"><a id="about-nav">ABOUT</a></Link></li>
            <li><Link href="/#work"><a id="work-nav">WORK</a></Link></li>
            <li><Link href="/#contact"><a id="contact-nav">CONTACT</a></Link></li>
          <style jsx>{`
            a {
              cursor: pointer;
            }
          `}</style>
          </ul>
        </div>
      </nav>

    </header>
    )
}

export default Header