import Link from 'next/link'
import Header from '../components/header'

const DesignProjects = [
    {
        'title': 'CAFE NATILEE', 
        'description': 'An upscale cafe that offers healthy, delicious cuisine.', 
        'tools': 'PHOTOSHOP, ILLUSTRATOR',
        'img': '/cafe-natilee.png',
        'link': 'http://cafenatilee.com/',
    },
    {
        'title': 'ECLERX DIGITAL', 
        'description': 'A full service digital agency for global brands.', 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/eclerx-digital.png',
        'link': 'https://www.eclerxdigital.com/',
    },
    {
        'title':'GREATER WASHINGTON ENDODONTICS', 
        'description': "The DMV area's premium specialty practice for dental treatment.", 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/greater-washington-endodontics.png',
        'link': 'http://www.va-rootcanal.com/',
    }, 
    {
        'title': 'LUCEQUE', 
        'description': 'A global business matchmaking and strategies providing service.', 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/luceque-global.png',
        'link': 'http://www.luceque.com/',
    },
    {
        'title':'SNUCMAA', 
        'description': "Seoul National University College of Medicine Alumni Association forum website.", 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/snucmaaus.png',
        'link': 'http://snucmaaus.org/',
    },
    {
        'title': 'TELESIS', 
        'description': 'A corporation that plans, builds and finances urban communities.', 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/telesis-corp.png',
        'link': 'http://www.telesiscorp.com/',
    },
    {
        'title':'WET N WAVY', 
        'description': 'A provider for hair care products for human and synthetic hair.', 
        'tools': 'PHOTOSHOP, ILLUSTRATOR, WORDPRESS',
        'img': '/wet-n-wavy.png',
        'link': 'http://www.wetnwavy.com/',
    },            
    
]
const DesignPage = () => {
    return (
    <>
    <Header />
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
        {DesignProjects.map(({title, description, tools, img, link}) => {
            return (
            <div 
                key={Math.random()}
                className="wrapper">
                <div className="project-img">
                <img src={img} alt={title} />
                </div>

                <div className="project-description">
                <h5>{title}</h5>
                <p>{description}</p>
                <br/>
                <p><em>({tools})</em></p>
                <br/>
                <div>
                    <a href={link} target="_blank">Visit Site</a>
                </div>
                </div>
            </div>
            )        
        })}

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