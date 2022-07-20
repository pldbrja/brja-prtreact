import React from 'react';

const aStyles = {
    icon: {
        width: 'auto',
        height: '200px',
    }
}
export default function About () {
    return (
    <div>
        <div>
            <h2>About the Dev</h2>
            <img style={aStyles.icon} className="img-thumbnail" src="https://raw.githubusercontent.com/pldbrja/mias-portfolio/main/assets/images/placeholder.png" alt="A gray graphic placeholder image."></img>
            <p>Armed with at least 5 Fridays of Coding Club and a handful of static Neocities pages, I am a web developer who has come a long way since high school. I started as a hobby, but awakened to a new love of CSS through SASS.</p>
        </div>
    </div>
    )
}