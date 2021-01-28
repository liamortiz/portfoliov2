import React, { useEffect, useRef } from 'react';

import './style.scss';

const Welcome: React.FC = () => {
    const welcomeRef = useRef(null);

    useEffect(() => {
        const welcomeDiv = welcomeRef.current as HTMLDivElement | null;
        if (welcomeDiv) {
            welcomeDiv.style.height=`${window.innerHeight}px`;
        }
    }, [])

    return (
        <>
        <div id="welcome-section" ref={welcomeRef}>
            <h1>Leamsi Escribano</h1>
            <p className="title">Web Developer | Software Engineer</p>

            <div className="social-media">
                <a href="/" className="linkedin"></a>
                <a href="/" className="github"></a>
            </div>

            <div className="cactus">
            </div>
        </div>
        </>
    )
}
export default Welcome;