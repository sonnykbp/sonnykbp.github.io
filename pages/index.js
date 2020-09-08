import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, createRef } from 'react'


const HomePage = ({href}) => {
  const router = useRouter()
  const url = router.pathname
  const myRef = useRef([])
  const scrollToSection = ({target}) => {
    const {name} = target
    const location = myRef.current[name]
    window.scrollTo({
      top: location.offsetTop - 100,
      left: 0,
      behavior: 'smooth'
    });
  }
	return (
  <>
    <header className="navbar-fixed-top">

      <h1><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span><Link href="/"><a id="home-nav">SONNY KEOBOUNPHANH</a></Link></h1>

      <h1 className="name-mobile"><Link href="/"><a id="home-nav">SONNY KEOBOUNPHANH</a></Link></h1>


      <nav>
        <div className="nav_bar">
          <ul>
            <li><a id="about-nav" name="0" onClick={scrollToSection}>ABOUT</a></li>
            <li><a name="1" id="work-nav" onClick={scrollToSection}>WORK</a></li>
            <li><a name="2" id="contact-nav" onClick={scrollToSection}>CONTACT</a></li>
          <style jsx>{`
            a {
              cursor: pointer;
            }
          `}</style>
          </ul>
        </div>
      </nav>

    </header>


    <div className="slider">
      <h3 className="caption"><a href="#">&#60;&nbsp;DESIGN /&#62;</a></h3>
    </div>


    <section className="about" id="about" ref={(ref) => myRef.current[0] = ref}>

      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> ABOUT</h2>
      <br/>
      <p>I am a creative, solution-seeking full stack <em>software engineer</em> who enjoys <em>design and functionality</em>. Inquisitive by nature, I have a thirst to craft striking design aesthetics and construct <em>solid code</em>. With my imaginative visual sense and practical logic, I pave the path to <em>success for myself and others.</em></p>
      <style jsx>{`
      em {
        color: black;
        font-style: normal;
      }
    `}</style>
    </section>


    <section className="skills-section">
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> SKILLS</h2>
      <br/>
      <div className="links">

        <div className="online-profile">

          <h4>FRONTEND</h4>
          <ul>
            <li>Javascript (ES6+)</li>
            <li>jQuery</li>
            <li>Angular 2+</li>
            <li>React 16+ (Hooks)</li>
            <li>Redux (Redux Toolkit)</li>
            <li>CSS Preprocessors</li>
            <li>Sass/SASS</li>
            
          </ul>
        </div>

        <div className="online-profile">
          <h4>BACKEND</h4>
          <ul>
            <li>Ruby on Rails 5</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>ActiveRecord</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="online-profile">
          <h4>DATABASE</h4>
          <ul>
            <li>PostgresSQL</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="online-profile">
          <h4>SOFTWARE</h4>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Muse</li>
            <li>InDesign</li>
            <li>After Effects</li>
            <li>Dreamweaver</li>
          </ul>
        </div>

        <div className="online-profile">
          <h4>OTHER</h4>
          <ul>
            <li>.NET/ASP.NET</li>
            <li>Jenkins</li>
            <li>Agile/Kanban</li>
            <li>WordPress</li>
            <li>Git/GitLab</li>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>Webpack</li>
          </ul>
        </div>




      </div>
    </section>

     <section className="skills-section">
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> STRENGTHS</h2>
      <br/>
      <div className="links">
          <div className="strengths">
          <ul>
            <li>Team Player</li>
            <li>Reliable</li>
            <li>Humble</li>
            <li>Ambitious</li>
            <li>Radiant</li>
            <li>Powerhouse</li>
            <li>Genuine</li>
            <li>Empathetic</li>
            <li>Passionate</li>
            <li>Resourceful</li>
            <li>Flexible</li>
            <li>Expressive</li>
            <li>Dedicated</li>
            <li>Multicultural</li>
          </ul>
        </div>
      </div>
    </section>





  <section className="work" id="work" ref={(ref) => myRef.current[1] = ref}>
    <div className="brand">
      <p className="work-order">01</p>

      <h3><Link href="/design"><a>WEB<br/> DESIGN</a></Link></h3>
    </div>

    <div className="ux-ui">
      <p className="work-order">02</p>
      <h3><Link href="/web-app"><a>WEB<br/> APPLICATION</a></Link></h3>
    </div>

    <div className="motion">
      <p className="work-order">03</p>
      <h3><Link href="/motion"><a>MOTION<br/> GRAPHICS</a></Link></h3>
    </div>

  </section>

  <section className="contact" id="contact" ref={(ref) => myRef.current[2] = ref}>
    <div className="contact-description">
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> CONTACT</h2>
      <br/>
      <p>Thank you for stopping by! Please feel free to <a className="email" href="mailto:skeobounphanh@gmail.com?Subject=Hello" target="_top">say hello.</a>
      <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    </p>

    </div>

    <section className="links">
      <div className="online-profile">
        <h4>CONTACT</h4>
        <ul>
          <li><a href="mailto:skeobounphanh@gmail.com?Subject=Hello" target="_top">SKEOBOUNPHANH@GMAIL.COM</a>
          <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style></li>
          <li><a href="https://www.linkedin.com/in/sonnykbp/" target="_blank">LINKEDIN</a></li>
          <li><a href="https://github.com/sonnykbp" target="_blank">GITHUB</a></li>
        </ul>
      </div>

      <div className="resume-links">
        <h4>RESUME</h4>
        <ul>
          <li><a href="https://drive.google.com/file/d/1jEBa-MrGu_tj1NoTdz09OG8WJMGvFW41/view?usp=sharing" target="_blank">RESUME</a></li>
        </ul>
      </div>

      <div className="online-profile">
        <h4>PROFILES</h4>
        <ul>
          <li><a href="http://www.sonnykeobounphanh.com/" target="_blank">ILLUSTRATION SITE</a></li>
        </ul>
      </div>

    </section>

  </section>
</>
  )
}

export default HomePage