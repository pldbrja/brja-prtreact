import React from 'react';

export default function Project ({ projects }) {
    return(
        <div class='project'>
            {/* {projects.map(projects => {
                <div className='project' key={projects.id}>
                    {projects.name}
                    <p>This is {projects.name}.</p>
                </div>
            })} */}
            <div class='imgPlaceholder'></div>
            <p>Tester</p>
        </div>
    );
};