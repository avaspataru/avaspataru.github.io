import React from 'react';
import logo from './logo.svg';
import './App.css';

import github from './github-icon.png';
import linkedin from './linkedin-icon.png';
import facebook from './facebook-icon.png';
import email from './email-icon.png';
import down from './dropdown-icon.png';


function App() {
  return (
    <div className="section">


        <div className="welcome-text">
          <h1> Hi. I'm Ava! </h1>
          <h3 class="line-1 anim-typewriter">Software Engineer & Computational Biologist.</h3>

          <img src={down} className="down-icon anim-fadein" />


        </div>

        <div className="social">
            <a href="https://www.linkedin.com/in/avaspataru/" ><img src={linkedin} className="social-icon" /></a>
            <a href="https://github.com/avaspataru"><img src={github} className="social-icon" /></a>
            <a href="https://www.facebook.com/ava.spataru/"><img src={facebook} className="social-icon" /></a>
            <a href="mailto:spataruava@gmail.com"><img src={email} className="social-icon" /></a>
        </div>
    </div>

  );
}

export default App;
