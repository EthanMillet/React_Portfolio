import React from 'react';
import EventifyImg from "../assets/Eventify.jpg"
import SpellBinderImg from "../assets/SpellBinder.jpg"
import SewerImg from "../assets/sewer.png"
import CoCalendarImg from "../assets/CoCalendar.png"
import SkyJamImg from "../assets/SkyJam.png"

function project() {
    const projects = [
        {
            projectTitle: "Eventify",
            projectImg: EventifyImg,
            projectDeployedLink: "https://github.com/EthanMillet",
            projectGitLink: "https://github.com/EthanMillet",
        },
    
        {
            projectTitle: "Spell Binder",
            projectImg: SpellBinderImg,
            projectDeployedLink: "https://github.com/EthanMillet/GM-s-Binder",
            projectGitLink: "https://github.com/EthanMillet/GM-s-Binder",},
    
        {
            projectTitle: "Southern Sewer Services",
            projectImg: SewerImg,
            projectDeployedLink: "https://github.com/MrBrandtCox/Whats-The-Charge",
            projectGitLink: "https://github.com/MrBrandtCox/Whats-The-Charge",},
    
        {
            projectTitle: "CoCalendar",
            projectImg: CoCalendarImg,
            projectDeployedLink: "https://chalcalendar.herokuapp.com/",
            projectGitLink: "https://github.com/magjoker/repo-title-goes-here",},
    
        {
            projectTitle: "SkyJam",
            projectImg: SkyJamImg,
            projectDeployedLink: "https://j3rkstore.github.io/weatheringo/",
            projectGitLink: "https://github.com/J3rkStore/weatheringo",}
        ]
    
    return (
    <ul className='ProjectContainer'> 
    {projects.map((project, index) => (
      <li key={index}>
    <div className="card" style={{width: "32rem", height: "24rem"}}>
        
        <div className="card-body">
            <h5 className="card-title">{project.projectTitle}</h5>
            <img src={project.projectImg} className="card-img-top card-img-thing" alt="Project"></img>
            <a href={project.projectDeployedLink} className="btn btn-primary" style={{marginRight: "3%"}}>Depolyed Code</a>
            <a href={project.projectGitLink} className="btn btn-primary">Github</a>
        </div>
    </div>
    </li>
    ))}
    </ul>
     )
}

export default project;
