import React from 'react';

const aStyles = {
    icon: {
        width: 'auto',
        height: '200px',
    },
    p: {
        marginTop: '20px',
    }
}
export default function About () {
    return (
        <div className="render container-xxl">
            <h2>About Me</h2>
            <img style={aStyles.icon} className="img-thumbnail" src="https://raw.githubusercontent.com/pldbrja/mias-portfolio/main/assets/images/placeholder.png" alt="A gray graphic placeholder image."></img>

            <p style={aStyles.p}>Initially armed with nothing but some static sites, I am a Front-End Developer who pursues the unknown. At least, unknown for myself. I am easy to teach new technologies, and can adapt to new languages that come along with it. My passions lie in learning more about crafting the best user experience, including both accessibility and design.</p>

            <p style={aStyles.p}>I have been practicing HTML and CSS since my 10th grade year of high school, but took the next step to becoming stronger in all aspects of front-end development in 2022. Javascript is still new to me, but the enjoyment of becoming an experienced user of something that once stumped you is greater than the fear of failing at it.</p>

            <p style={aStyles.p}>I am a team player, and working together where ideas are plentiful is the best thrill I could ever get.</p>
        </div>
    )
}