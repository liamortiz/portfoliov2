import React, { useEffect, useRef } from 'react';
import { render } from './wave';
import './style.scss';

const Welcome: React.FC = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const waveAnimaiton = setInterval(() => {
            render(canvasRef.current);
        }, 20)

        return () => clearInterval(waveAnimaiton);
    }, [])

    return (
        <>
        <div id="welcome-section">
            <h1>Leamsi Escribano</h1>
            <p className="title">Web Developer | Software Engineer</p>

            <div className="social-media">
                <a href="/" className="linkedin"></a>
                <a href="/" className="github"></a>
            </div>

            <div className="cactus"></div>

            



        </div>
        <canvas ref={canvasRef} className="wave-xp" id="wave-canvas"></canvas>
        </>
    )
}
export default Welcome;