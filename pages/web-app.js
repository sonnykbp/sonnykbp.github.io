import ProjectLayout from '../components/project-layout'

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
    <ProjectLayout workType={'WEB APPLICATION'} projectData={WebProjects} />
    )
}

export default WebPage