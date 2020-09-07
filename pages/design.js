import Link from 'next/link'

const DesignPage = () => {
    return (
        <>
    <section className="breadcrumbs">
      <ul>
        <li><Link href="/design"><a>Web Design</a></Link>  &nbsp;&nbsp;/&nbsp;&nbsp;  </li>
        <li><Link href="/web-app"><a>Web Application</a></Link>    &nbsp;&nbsp;/&nbsp;&nbsp;  </li>
        <li><Link href="/motion"><a>Motion Graphics</a></Link> </li>
      </ul>
    </section>

    <section className="sections">
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> WEB DESIGN</h2>
      <hr/>

      <div className="wrapper">
        <div className="project-img">
          <img src="/cafe-natilee.png" alt="cafe natilee" />
        </div>

        <div className="project-description">
          <h5>CAFE NATILEE</h5>
          <p>An upscale cafe that offers healthy, delicious cuisine.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR)</em></p>
          <br/>
          <div>
            <a href="http://cafenatilee.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="/eclerx-digital.png" alt="eclerx digital" />
        </div>

        <div className="project-description">
          <h5>ECLERX DIGITAL</h5>
          <p>A full service digital agency for global brands.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="https://www.eclerxdigital.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="/greater-washington-endodontics.png" alt="greater washington endodontics" />
        </div>

        <div className="project-description">
          <h5>GREATER WASHINGTON ENDODONTICS</h5>
          <p>The DMV area's premium specialty practice for dental treatment.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="http://www.va-rootcanal.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="/luceque-global.png"  alt="luceque-global" />
        </div>

        <div className="project-description">
          <h5>LUCEQUE</h5>
          <p>A global business matchmaking and strategies providing service.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="http://www.luceque.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="../img/Design/snucmaaus.png"/>
        </div>

        <div className="project-description">
          <h5>SNUCMAA</h5>
          <p>Seoul National University College of Medicine Alumni Association forum website.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="http://snucmaaus.org/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="/telesis-corp.png"  alt="telesis" />
        </div>

        <div className="project-description">
          <h5>TELESIS</h5>
          <p>A corporation that plans, builds and finances urban communities.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="http://www.telesiscorp.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="project-img">
          <img src="/wet-n-wavy.png"  alt="wet-n-wavy" />
        </div>

        <div className="project-description">
          <h5>WET N WAVY</h5>
          <p>A provider for hair care products for human and synthetic hair.</p>
          <br/>
          <p><em>(PHOTOSHOP, ILLUSTRATOR, WORDPRESS)</em></p>
          <br/>
          <div>
            <a href="http://www.wetnwavy.com/" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>

    </section>
    <style jsx>{`
      .project-description div {
        margin-top: 30px;
      }
    `}</style>
    </>
    )
}

export default DesignPage