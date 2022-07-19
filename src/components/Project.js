import React, { useState } from 'react';

export default function Project ({ projects }) {
    const [hover, setHover] = useState();

    const textVisible = () => {
        setHover(true);
    };

    const textInvisible = () => {
        setHover(false);
    };

    return(
        <div className='project'>
           {projects.map(projects => {
                <div className='project' key={projects.id} style={{backgroundColor: projects.img}}>
                    {projects.name}
                    <p>This is {projects.name}.</p>
                </div>
            })}
        </div>
    );
};