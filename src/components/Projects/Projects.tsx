import React, { useEffect, useRef } from 'react';

import './style.scss';

const Projects: React.FC = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const projectsDiv = projectsRef.current as HTMLDivElement | null;
        if (projectsDiv) {
            projectsDiv.style.height=`${window.innerHeight}px`;
        }
    }, [])

    return (
        <div id="projects" ref={projectsRef}>
            <div className="projects-container">
                <div className="scrollable"></div>
                <div className="scrollable"></div>
                <div className="scrollable"></div>
                <div className="scrollable"></div>
                <div className="scrollable"></div>
                <div className="scrollable"></div>

                <div className="scrollable"></div>
                <div className="scrollable"></div>
            </div>
        </div>
    )
}
export default Projects;