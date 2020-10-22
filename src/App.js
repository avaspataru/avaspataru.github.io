import React, {useRef} from 'react';
import { ScrollTo } from 'react-scroll-to';
import logo from './logo.svg';
import './App.css';

import github from './github-icon.png';
import linkedin from './linkedin-icon.png';
import facebook from './facebook-icon.png';
import email from './email-icon.png';
import down from './dropdown-icon.png';



function App() {

  const scrollToRef = (myRef) => { myRef.current.scrollIntoView({behavior: "smooth"}); }
  const myRefS2 = useRef(null)
  const executeScroll = () => {  scrollToRef(myRefS2) }

  return (
    <div className="container">
      <div className="section">
          <div className="welcome-text">
            <h1> Hi. I'm Ava! </h1>
            <h3 class="line-1 anim-typewriter">Software Engineer & Computational Biologist.</h3>
            <img src={down} className="down-icon anim-fadein" onClick={executeScroll} />
          </div>

          <div className="social">
              <a href="https://www.linkedin.com/in/avaspataru/" ><img src={linkedin} className="social-icon" /></a>
              <a href="https://github.com/avaspataru"><img src={github} className="social-icon" /></a>
              <a href="https://www.facebook.com/ava.spataru/"><img src={facebook} className="social-icon" /></a>
              <a href="mailto:spataruava@gmail.com"><img src={email} className="social-icon" /></a>
          </div>
      </div>

      <div className="section-2" ref={myRefS2}>
      <p className="welcome-text"> This is a work in progress. </p>
      </div>



    </div>
  );
}

export default App;
