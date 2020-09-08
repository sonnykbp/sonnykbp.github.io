import Link from 'next/link'
import Header from '../components/header'

const ProjectLayout = ({workType, projectData}) => {
    const CTA = !workType.includes("WEB") ? 'Watch Video' : workType == 'WEB DESIGN' ? 'Visit Site' : 'Launch'
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
      <h2><span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;</span> {workType}</h2>
      <hr/>
        {projectData.map(({title, description, tools, img, link, code_src}, i) => {
            return (
            <div 
                key={title}
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
                    <a href={link} target="_blank">{CTA}</a>
                    {code_src ? <a href={code_src} target="_blank">Source Code</a> : '' }
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
export default ProjectLayout