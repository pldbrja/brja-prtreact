import React from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        img: "'https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/ccss.png'",
        name: "Community Closet",
        github: "'https://github.com/areitan/Community_Closet'",
        deployed: "'https://community-closet-206.herokuapp.com/'",
    },
    {
        id: 2,
        img: "'https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/grandmass.png'",
        name: "My Grandma's Recipe Box",
        github: "'https://github.com/nbulger1/my-recipes'",
        deployed: "'https://nbulger1.github.io/my-recipes/'",
    },
    {
        id: 3,
        img: "'https://raw.githubusercontent.com/pldbrja/txt-editor/main/assets/jatescreenshot.png'",
        name: "Text Editor App",
        github: "'https://github.com/pldbrja/txt-editor'",
        deployed: "'https://fathomless-reaches-29007.herokuapp.com/'",
    },
    {
        id: 4,
        img: "'https://raw.githubusercontent.com/pldbrja/weather-forecast/main/assets/images/dashboardthumbnail.png'",
        name: "Weather Dashboard",
        github: "'https://github.com/pldbrja/weather-forecast'",
        deployed: "'https://pldbrja.github.io/weather-forecast/'",
    },
    {
        id: 5,
        img: "'https://raw.githubusercontent.com/pldbrja/tm-profile-gener8tor/main/assets/myteamss.png'",
        name: "Team Profile Generator",
        github: "'https://github.com/pldbrja/tm-profile-gener8tor'",
        deployed: "'https://github.com/pldbrja/tm-profile-gener8tor'",
    },
    {
        id: 6,
        img: "'https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/workdayss.png'",
        name: "Work Day Scheduler",
        github: "'https://github.com/pldbrja/day-2-day-planner'",
        deployed: "'https://pldbrja.github.io/day-2-day-planner/'",
    },
];

export default function Portfolio () {
    return (
        <div className="render container-xxl">
            <h2>Portfolio</h2>
                    <Project projects={projects}/>
        </div>
    );
};