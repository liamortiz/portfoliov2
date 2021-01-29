import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import React, { useRef, useEffect } from 'react';

import { render } from './wave';

let previousScrollTop = 0;
let currentColors = 0;

const WAVE_COLORS = [
  {c1: '#c23c3c', c2: '#E24A4A'},
  {c1: 'black', c2: 'gray'}
];

window.onscroll = () => {
    const nextScrollTop = window.pageYOffset;
    previousScrollTop = nextScrollTop;
    
    const projectElm = document.getElementById('projects') as HTMLDivElement;
    const skillsElm = document.getElementById('skills-section') as HTMLDivElement;

    const projectPos = projectElm.getBoundingClientRect().top;
    const skillsPos = skillsElm.getBoundingClientRect().top;

    if (previousScrollTop < 200) {
      currentColors = 0;
      changeActiveNav(0);
    }
    if (projectPos < 500 && skillsPos > 500) {
      currentColors = 1;
      changeActiveNav(1);
    }
    if (skillsPos < 500 && skillsPos > 1) {
      changeActiveNav(2);
    }
    if (skillsPos < 100) {
      changeActiveNav(3);
    }
}

function changeActiveNav(child: number) {

  const activeLink = document.getElementsByClassName('active')[0];
  activeLink.classList.remove('active');

  const navigation = document.getElementById('nav-ul-container') as HTMLUListElement | null;
  if (navigation) {
    const anchorChild = navigation.children[child] as HTMLElement | null;
    if (anchorChild) {
      anchorChild.children[0].classList.add('active');
      
    }
  }
}

function App() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const waveAnimaiton = setInterval(() => {
        render(canvasRef.current, WAVE_COLORS[currentColors].c1, WAVE_COLORS[currentColors].c1);
    }, 20)
    return () => clearInterval(waveAnimaiton);
  }, [])

  return (
    <div className="App">
      <Navigation/>
      <Welcome/>
      <div className="division-container">
      <h3 className="division project-division">.projects</h3>
      </div>
      <Projects/>
      <div className="division-container" id="skills-hop">
      <h3 className="division skill-division">.skills</h3>
      </div>
      <Skills/>
      <Contact/>
      <canvas ref={canvasRef} height="50" className="wave-xp" id="wave-canvas"></canvas>
    </div>
  );
}

export default App;
