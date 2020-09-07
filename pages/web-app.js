import Link from 'next/link'

const WebProjects = [
    {
        'title': 'WHISK', 
        'description': 'A baking-recipe sharing platform.', 
        'tools': 'RUBY ON RAILS, jQUERY, BOOTSTRAP',
        'img': '/Whisk.png',
        'link': 'https://whisk-baking.herokuapp.com/',
        'code_src': 'https://github.com/sonnykbp/project2',
    },
    {
        'title': 'FETCH!', 
        'description': 'A pet-finder app where pet-owners and pet-sitters find each other.', 
        'tools': 'RUBY ON RAILS, ANGULAR JS, jQUERY, BOOTSTRAP',
        'img': '/Fetch.png',
        'link': 'https://sonnykbp.github.io/project-3/#/',
        'code_src': 'https://github.com/sonnykbp/project-3',
    },       
    
]
const WebPage = () => {
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
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> WEB APPLICATION</h2>
      <hr/>
        {WebProjects.map(({title, description, tools, img, link, code_src}) => {
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
                    <a href={link} target="_blank">Launch</a>
                    <a href={code_src} target="_blank">Source Code</a>
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

export default WebPage