import React, { useEffect, useRef } from 'react';

import './style.scss';

const Welcome: React.FC = () => {
    const welcomeRef = useRef(null);

    useEffect(() => {
        const welcomeDiv = welcomeRef.current as HTMLDivElement | null;
        if (welcomeDiv) {
            welcomeDiv.style.height=`${window.innerHeight + 50}px`;
        }
    }, [])

    return (
        <div id="welcome-section" ref={welcomeRef}>
            <h1>Leamsi Escribano</h1>
            <p className="title">Web Developer | Software Engineer</p>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/leamsi-escribano-b1b642197/" target="_blank" rel="noreferrer" className="linkedin"></a>
                <a href="https://github.com/liamortiz" target="_blank" rel="noreferrer"  className="github"></a>
            </div>

            <div className="cactus">
            </div>
        </div>
    )
}
export default Welcome;