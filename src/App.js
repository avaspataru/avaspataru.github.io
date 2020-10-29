import React, {useRef} from 'react';
import { ScrollTo } from 'react-scroll-to';
import logo from './logo.svg';
import './App.css';

import github from './github-icon.png';
import linkedin from './linkedin-icon.png';
import facebook from './facebook-icon.png';
import email from './email-icon.png';
import down from './dropdown-icon.png';
import profile from './profile-glasses.jpeg';



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
        <div className="about-me-text">

          <h2> About me </h2>
          <p>A short story of a very enthuziastic software engineer who develops a deep passion for computational biology </p>
          <hr />

          <p>I've always been intrigued by computers and their power to solve so many of our world's problems. And so I've studied computer science as an undergraduate degree at <b>Warwick University</b> and pursued it even further in my masters at <b>Oxford University</b>.
          I have successfully graduated from both with a first class, distinction and a lot of useful knowledge!
          </p>

          <p>During my studies I've participated in various hackathons and competitions. I can therefore proudly say that I can build a website on nothing more than 24h and 3 cups of coffee!
          I've also taken part in some really cool internships, where I met great people and learnt A LOT. All in all, my university experience taught me how to code very well and how to solve seemingly unsolvable problems.
          And so naturally I came to wonder how I could use all these skills to help people. </p>

          <p>In my 3rd year of studies I had to conduct a year-long research project and I saw this as a great opportunity to <b>do some good</b>. Therefore I chose to look into the world of computational biology. (Despite knowing nothing about biology. Afterall, we can learn anything we put our mind to, so why not?)
          The project involved analysing the impact chemotherapy on ovarian cancer from single cell RNA-seq data and it proved to be a great success! After this I wanted to try out research in the field once more and pursued my masters dissertation in analysing important factors for CRISPR experiment design. I've also taken a course in
          Computational Biology from the department of Statistics in Oxford and a Bioinformatics introduction course from UCSD. I've been doing as much as I can in my spare time and I hope that the impact I have will help bring forward great solutions. </p>

          <p> This website continues to show some of the stuff I've done and  </p>
        </div>
        <div className="about-me-pic-container">
          <img src={profile} className="profile-pic"/>
        </div>
      </div>



    </div>
  );
}

export default App;
