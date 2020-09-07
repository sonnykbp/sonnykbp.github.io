import Link from 'next/link'

const MotionProjects = [
    {
        'title': 'THE WORLD BANK GROUP PRINT SYSTEM', 
        'description': 'An infomative video on the new WBG Print and Faxing system.', 
        'tools': 'ILLUSTRATOR, PHOTOSHOP, AFTER EFFECTS',
        'img': '/WBG-PRINT.png',
        'link': 'https://vimeo.com/455382360',
    },
    {
        'title': 'THE WORLD BANK GROUP PCREFRESH CAMPAIGN', 
        'description': 'An animated powerpoint presentation for the WBG PCRefresh Campaign.', 
        'tools': 'ILLUSTRATOR, POWERPOINT ANIMATION',
        'img': '/WBG-PPT.png',
        'link': 'https://vimeo.com/455382353',
    },        
    
]
const MotionPage = () => {
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
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> MOTION GRAPHICS</h2>
      <hr/>
        {MotionProjects.map(({title, description, tools, img, link}) => {
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
                    <a href={link} target="_blank">Watch Video</a>
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

export default MotionPage