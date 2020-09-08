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
    {
        'title': 'CODE PERFECT', 
        'description': 'A drag and drop, responsive email template building tool.', 
        'tools': 'ASP.NET, jQUERY, BOOTSTRAP',
        'img': '/code-perfect.png',
        'link': 'https://www.codeperfect.com/',
    }, 
    {
        'title': 'PRODUCT FASTLANE', 
        'description': 'A product information management system.', 
        'tools': 'ASP.NET, jQUERY, BOOTSTRAP, SASS/SCSS, BABEL',
        'img': '/product-fastlane.png',
        'link': 'https://www.pharossuite.com/product-fastlane-detail/',
    },          
      {
        'title': 'PHAROS CRM', 
        'description': 'A customer relationship management tool.', 
        'tools': 'ASP.NET, ANGULAR 2, jQUERY, SASS/SCSS',
        'img': '/pharos-crm.png',
        'link': 'https://www.pharossuite.com/pharos-crm-detail',
    },
      {
        'title': 'COVID-19 EMPLOYEE HEALTH SCREENING TOOLKIT', 
        'description': 'An employee health screening solution (health tracking with mobile app, configurable SMS and HIPAA settings, dynamic reporting dashboard).', 
        'tools': 'RUBY ON RAILS 5, REACT 16, REDUX, SASS/SCSS',
        'img': '/gc-c19.png',
        'link': 'https://www.gocanvas.com/toolkits/employee-health-screening',
    },
      {
        'title': 'GOCANVAS APP BUILDER', 
        'description': 'A drag-and-drop form builder for the GoCanvas mobile app. A customization tool that offers a variety of field types (text, number, GPS, signature, image capture) and smart fields that pre-populate with customer’s uploaded data.', 
        'tools': 'RUBY ON RAILS 5, ANGULAR, JQUERY',
        'img': '/gc-app-builder.png',
        'link': 'https://www.gocanvas.com/content/how-gocanvas-works/',
    },          
]
const WebPage = () => {
    return (
    <ProjectLayout workType={'WEB APPLICATION'} projectData={WebProjects} />
    )
}

export default WebPage