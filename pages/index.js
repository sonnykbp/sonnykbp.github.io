const HomePage = () => {
	return <div>  <main>
    <header className="navbar-fixed-top">

      <h1><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span><a href="#" id="home-nav">SONNY KEOBOUNPHANH</a></h1>

      <h1 className="name-mobile"><a href="#" id="home-nav">SONNY KEOBOUNPHANH</a></h1>


      <nav>
        <div className="nav_bar">
          <ul>
            <li><a href="#about" id="about-nav">ABOUT</a></li>
            <li><a href="#work" id="work-nav">WORK</a></li>
            <li><a href="#contact" id="contact-nav">CONTACT</a></li>
          </ul>
        </div>
      </nav>

    </header>


    <div className="slider">
      <h3 className="caption"><a href="#">&#60;&nbspDESIGN /&#62;</a></h3>
    </div>


    <section className="about" id="about">

      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> ABOUT</h2>
      <br/>
      <p>I am a creative, solution-seeking <em>full stack web developer</em> who enjoys design and functionality. Inquisitive by nature, I have a thirst to craft striking design aesthetics and construct solid code. With my imaginative visual sense and practical logic, I pave the path to success for myself and others.</p>
      <br/>
      <p>I'm also a huge foodie and a proud dog mom to a chirpy pomeranian.</p>
      <style jsx>{`
      em {
        color: 'black';
        font-style: 'normal';
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
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Angular JS</li>
            <li>React JS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>BOOTSTRAP</li>
          </ul>
        </div>

        <div className="online-profile">
          <h4>BACKEND</h4>
          <ul>
            <li>Ruby on Rails</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Sinatra</li>
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
          <h4>MISCELLANEOUS</h4>
          <ul>
            <li>WordPress</li>
            <li>CLI</li>
            <li>Git</li>
            <li>Github</li>
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


      </div>
    </section>




  <section className="work" id="work">
    <div className="brand">
      <p className="work-order">01</p>

      <h3><a href="pages/design.html">WEB<br/> DESIGN</a></h3>
    </div>

    <div className="ux-ui">
      <p className="work-order">02</p>
      <h3><a href="pages/web-app.html">WEB<br/> APPLICATION</a></h3>
    </div>

    <div className="motion">
      <p className="work-order">03</p>
      <h3><a href="pages/motion.html">MOTION<br/> GRAPHICS</a></h3>
    </div>

  </section>

  <section className="contact" id="contact">
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

      <div className="online-profile">
        <h4>PROFILES</h4>
        <ul>
          <li><a href="https://profiles.generalassemb.ly/sonny-keobounphanh" target="_blank">GENERAL ASSEMBLY</a></li>
          <li><a href="http://www.sonnykeobounphanh.com/" target="_blank">ILLUSTRATION SITE</a></li>
        </ul>
      </div>


      <div className="resume-links">
        <h4>RESUME</h4>
        <ul>
          <li><a href="https://drive.google.com/file/d/0B7vZFk2sVpVyTllUblRwV2lwblk/view?usp=sharing" target="_blank">RESUME</a></li>
        </ul>
      </div>
    </section>

  </section>

  <footer>
    <p>Sonny Keobounphanh Copyright 2017.</p>
  </footer>
</main></div>
}

export default HomePage
