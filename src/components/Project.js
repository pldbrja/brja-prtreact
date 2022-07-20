import React, { useState } from 'react';

const pStyle = {
    card: {
        background: 'none',
    }
}

export default function Project (props) {
    const [hover, setHover] = useState(false);

    const mouseOver = () => {
        setHover(true);
    };

    const mouseOut = () => {
        setHover(false);
    };


    // Not working at the moment, so opted for rendering each project individually.

    // return(
    //     <div className="row row-cols-1 row-cols-md-2 g-4">
    //         {props.projects.map((result) => {
    //             <div className="col" key={result.id}>
    //             <div className='card'>
    //                 <img alt={result.name} src={result.img}></img>
    //                 <p>{result.name}</p>
    //                 <p>{result.github}</p>
    //             </div>
    //         </div>
    //         })}
    //     </div>
    // );

    return(
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="Community Closet" src="https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/ccss.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/areitan/Community_Closet"><p>Community Closet</p></a>

                        <a href="https://community-closet-206.herokuapp.com/"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>

            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="My Grandma's Recipe Box" src="https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/grandmass.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/nbulger1/my-recipes"><p>My Grandma's Recipe Box</p></a>

                        <a href="https://nbulger1.github.io/my-recipes/"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>

            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="Text Editor App" src="https://raw.githubusercontent.com/pldbrja/txt-editor/main/assets/jatescreenshot.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/pldbrja/txt-editor"><p>Text Editor App</p></a>

                        <a href="https://fathomless-reaches-29007.herokuapp.com/"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>

            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="Weather Dashboard" src="https://raw.githubusercontent.com/pldbrja/weather-forecast/main/assets/images/dashboardthumbnail.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/pldbrja/weather-forecast"><p>Weather Dashboard</p></a>

                        <a href="https://pldbrja.github.io/weather-forecast/"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>

            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="Team Profile Generator" src="https://raw.githubusercontent.com/pldbrja/tm-profile-gener8tor/main/assets/myteamss.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/pldbrja/tm-profile-gener8tor"><p>Team Profile Generator</p></a>

                        <a href="https://github.com/pldbrja/tm-profile-gener8tor"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>

            <div className="col">
                <div style={pStyle.card} className="card" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <img alt="Work Day Scheduler" src="https://raw.githubusercontent.com/pldbrja/brjaportfolio-v2/main/assets/images/workdayss.png"/>

                    {hover &&  
                    <div class="hovering">
                        <a href="https://github.com/pldbrja/day-2-day-planner"><p>Work Day Scheduler</p></a>

                        <a href="https://pldbrja.github.io/day-2-day-planner/"><i className="fa-brands fa-github"></i></a>
                    </div>}
                </div>
            </div>
        </div>
    );
};