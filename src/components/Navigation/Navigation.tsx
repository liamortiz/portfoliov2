import React from 'react';

import './style.scss';

const Navigation: React.FC = () => {
    function scrollToElement(event: any) {
        const targetId = event.target.dataset.targetid;
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({behavior : 'smooth', block : 'start'});
        }
    }
    return (
        <nav>
            <ul id="nav-ul-container">
                <li><button data-targetid='welcome-section' onClick={scrollToElement} className="active">Home</button></li>
                <li><button data-targetid='projects' onClick={scrollToElement}>Projects</button></li>
                <li><button data-targetid='skills-hop' onClick={scrollToElement}>Skills</button></li>
                <li><button data-targetid='contact-section' onClick={scrollToElement}>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Navigation;