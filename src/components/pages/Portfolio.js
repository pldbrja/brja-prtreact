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
        github: "",
    },
    {
        id: 4,
        bg: "#032B43",
        name: "Weather Dashboard",
        github: "",
    },
    {
        id: 5,
        bg: "#032B43",
        name: "Team Profile Generator",
        github: "",
    },
    {
        id: 6,
        bg: "#032B43",
        name: "Work Day Scheduler",
        github: "",
    },
];

export default function Portfolio () {
    return <Project projects={projects}/>;
};