import React from 'react';

import project1Image from '../../assets/images/algo-imager.gif';
import project2Image from '../../assets/images/greenpaws.png';
import project3Image from '../../assets/images/dogsguardian.png';


import './style.scss';

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <div className="projects-container">
                <div className="project-preview scrollable">
                    <div className="preview-image">
                        <h2>Algorithm Imager</h2>
                        <img src={project1Image}/>
                    </div>
                    
                    <div className="description">
                    <p>
                    <span>Description:</span>
                    Using common algorithms like Depth-first search, Breadth-first search, Merge Sort and Quicksort I created unique visualizations 
                    combined with JPEG Images. 
                    </p>
                    <ul className="stack">
                            <li>React</li>
                            <li>S(CSS)</li>
                            <li>HTML</li>
                    </ul>
                    <a href="/">View Demo</a>
                    <a href="/">View Code</a>
                    </div>
                    
                </div>
                <div className="project-preview scrollable">
                    <div className="preview-image">
                        <h2>Green Paws eCommerce</h2>
                        <img src={project2Image}/>
                    </div>

                    <div className="description">
                    <p>
                    <span>Description:</span>
                    This is an all dogs eCommerce website. Some features include product filtering and sorting. Users can create an account and browse through the hundreds of products the store has.
                    </p>
                    <ul className="stack">
                            <li>React</li>
                            <li>S(CSS)</li>
                            <li>HTML</li>
                            <li>Redux</li>
                            <li>RoR</li>
                            <li>Postgres</li>
                    </ul>
                    <a href="/">View Demo</a>
                    <a href="/">View Code</a>
                    </div>

                </div>
                <div className="project-preview scrollable">
                    <div className="preview-image">
                        <h2>Dog's Guardian | Pet Adoption</h2>
                        <img src={project3Image}/>
                    </div>

                    <div className="description">
                    <p>
                    <span>Description:</span>
                    Looking to adopt a new pet? Use this website to help you find one! Using Petfinder's API and Google Places API, 
                    this website has all the information you'd need to make a decision. Easy to use and all in one single page.
                    </p>
                         
                    <ul className="stack">
                            <li>React</li>
                            <li>S(CSS)</li>
                            <li>HTML</li>
                            <li>TypeScript</li>
                            <li>Figma</li>
                        </ul>
                    <a href="/">View Demo</a>
                    <a href="/">View Code</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Projects;