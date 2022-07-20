import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const rStyles = {
    list: {
        listStyleType: 'none',
    },
    heading: {
        color: '#FFBA08',
    },
    indent: {
        paddingLeft: '10%',
    }
}

export default function Resume(){
    return (
        <div className="render container-xxl">
            <h2>Resume</h2>
            <p>My resume can be found <a href="https://drive.google.com/file/d/110f_Y3hwxkbWnkG_muv4m8LHl0TR6gkv/view?usp=sharing">here</a>.</p>

            <div style={rStyles.indent}>
                <h3 style={rStyles.heading}>Front-End Skills</h3>
                <ul style={rStyles.list}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>SASS</li>
                    <li>React.js</li>
                    <li>jQuery</li>
                    <li>Anime.js</li>
                </ul>
            </div>

            <div style={rStyles.indent}>
                <h3 style={rStyles.heading}>Back-End Skills</h3>
                <ul style={rStyles.list}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                    <li>Ruby</li>
                </ul>
            </div>
        </div>
    )
}