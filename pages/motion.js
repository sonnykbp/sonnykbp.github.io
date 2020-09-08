import ProjectLayout from '../components/project-layout'

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
    <ProjectLayout workType={'MOTION GRAPHICS'} projectData={MotionProjects} />
    )
}

export default MotionPage