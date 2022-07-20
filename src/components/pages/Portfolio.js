import React from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        bg: "#032B43",
        name: "Community Closet",
        github: "https://github.com/areitan/Community_Closet",
    },
    {
        id: 2,
        bg: "#032B43",
        name: "My Grandma's Recipe Box",
        github: "https://github.com/nbulger1/my-recipes",
    },
    {
        id: 3,
        bg: "#032B43",
        name: "Text Editor App",
        github: "https://github.com/pldbrja/txt-editor",
    },
    {
        id: 4,
        bg: "#032B43",
        name: "Weather Dashboard",
        github: "https://github.com/pldbrja/weather-forecast",
    },
    {
        id: 5,
        bg: "#032B43",
        name: "Team Profile Generator",
        github: "https://github.com/pldbrja/tm-profile-gener8tor",
    },
    {
        id: 6,
        bg: "#032B43",
        name: "Work Day Scheduler",
        github: "https://github.com/pldbrja/day-2-day-planner",
    },
];

export default function Portfolio () {
    return (
        <div className="render container-xxl">
            <h2>Portfolio</h2>
            <Project projects={projects}/>,
            <p>Broken, sorry.</p>
        </div>
    );
};