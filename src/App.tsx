import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';

import React, { useRef, useEffect } from 'react';

import { render } from './wave';

let previousScrollTop = 0;
let scrollingDown = false;
let currentColors = 0;

const WAVE_COLORS = [
  {c1: '#c23c3c', c2: '#E24A4A'},
  {c1: 'white', c2: 'gray'}
];

window.onscroll = () => {
    const nextScrollTop = window.pageYOffset;
    scrollingDown = previousScrollTop < nextScrollTop;
    previousScrollTop = nextScrollTop;

    if (previousScrollTop < 200) {
      currentColors = 0;
      changeActiveNav(0);
    }
    if (previousScrollTop > 200) {
      currentColors = 1;
      changeActiveNav(1);
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
      <Projects/>
      <canvas ref={canvasRef} className="wave-xp" id="wave-canvas"></canvas>
    </div>
  );
}

export default App;
