import React from 'react';

import './style.scss';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul id="nav-ul-container">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;