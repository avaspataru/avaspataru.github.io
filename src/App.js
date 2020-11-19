import React, {useRef, useState} from 'react';
import Typewriter from 'typewriter-effect';
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

  const [selectedWork, setSelectedWork]  = useState("fb")

  return (
    <div className="container">
      <div className="section">
          <div className="welcome-text">
            <h1> Hi. I'm Ava! </h1>

            <div class='moving-text-container'>
            <h2>I like to </h2><h2 class='moving-text'><Typewriter
              options={{
                strings: ['build software from scratch.', 'research computational biology.', ' learn new cool algorithms.'],
                delay: 100,
                autoStart: true,
                loop: true,
              }}
            /></h2>
            </div>

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

          <h2> <a className="colourful"> <a className="size2"> A little bit about me.</a> </a></h2>


          <p><b className="ava-bold"> <a className="colourful"> Computer science graduate </a>- </b>I've always been intrigued by computers and their power to solve so many of our world's problems. And so I've studied computer science as an undergraduate degree at <b><a className='colourful-2'>Warwick University</a></b> and pursued it even further in my masters at <b><a className='colourful-2'>Oxford University</a></b>.
          I have successfully graduated from both with a first class, distinction and a lot of useful knowledge!
          </p>

          <p><b className="ava-bold"><a className="colourful"> Software engineering enthuziast </a> - </b> During my studies I've participated in various hackathons and competitions. I can therefore proudly say that I can build a website on nothing more than 3 cups of coffee!
          I've also taken part in some really cool internships, where I met great people and learnt A LOT. All in all, my university experience taught me how to code very well and how to solve seemingly unsolvable problems.
          And so naturally I came to wonder how I could use all these skills to help people. </p>

          <p><b className="ava-bold"><a className="colourful"> Computational biology researcher </a> - </b>In my 3rd year of studies I had to conduct a year-long research project and I saw this as a great opportunity to <b><a className='colourful-2'>do some good</a></b>. Therefore I chose to look into the world of computational biology. (Despite knowing nothing about biology. Afterall, we can learn anything we put our mind to, so why not?)
          The project involved analysing the impact of chemotherapy on ovarian cancer data  and it proved to be a great success! After this I wanted to try out research in the field once more and pursued my masters dissertation in analysing important factors for CRISPR experiment design. I've also taken a course in
          Computational Biology from the department of Statistics in Oxford and a Bioinformatics introduction course from UCSD. I've been doing as much as I can in my spare time and I hope that the impact I have will help bring forward great solutions. </p>

        </div>
        <div className="about-me-pic-container">
          <img src={profile} className="profile-pic"/>
        </div>
      </div>

      <div className="section-3">
        <div className="where-been-text">
          <h2>Some details on where I've been</h2>

            <ul className="where-been-list">
              <li>
               <div className={(selectedWork == "fb") ? "where-been-box-selected" : "where-been-box"} onClick={() => setSelectedWork("fb")}> Facebook </div>
              </li>
              <li>
                <div className={(selectedWork == "tw") ? "where-been-box-selected" : "where-been-box"} onClick={() => setSelectedWork("tw")}> Transferwise </div>
              </li>
              <li>
                <div className={(selectedWork == "ms") ? "where-been-box-selected" : "where-been-box"} onClick={() => setSelectedWork("ms")}> Morgan Stanley</div>
              </li>
              <li>
                <div className={(selectedWork == "gs") ? "where-been-box-selected" : "where-been-box"} onClick={() => setSelectedWork("gs")}> Gemini Solutions </div>
              </li>
            </ul>
            <div className="work-details">
                {(selectedWork == "fb") ?
                <div>
                  <p>Graduate Software Engineer <b>@ Facebook</b></p>
                  <p>Dec 2020 - Present</p>
                </div>

                : <div></div>}

                {(selectedWork == "tw") ?
                    <div>
                    <p>Full-Stack Bootcam Engineer <b>@ TransferWise</b></p>
                    <p>Jun 2019 - Sept 2019</p>
                    <p>My work was in the Education team to develop a web applicatication as a solution for international tuition fee payments. The solution was a payment platform and a payment managing system for students, parents, sponsor companies and universities with one or multiple international campuses.</p>
                    <a href="https://www.youtube.com/watch?v=cEvPTOgJx70&t=1s">See a video of the bootcamp!</a>
                    </div>
                    : <div></div>}

                {(selectedWork == "ms") ?
                      <div>
                      <p>Summer Analyst in Technology <b>@ Morgan Stanley</b></p>
                      <p>Jun 2018 - Aug 2018 </p>
                      <p>I worked in the Listed Sales and Trading team to solve the issue of legacy code debugging, by building a helper tool. The tool was using reflection techniques to look into the codebase and assist the debugging, while also providing insightful analytics.</p>
                      </div>
                      : <div></div>}

                {(selectedWork == "gs") ?
                      <div>
                      <p>Programmer Help <b>@ Gemini Solutions</b></p>
                      <p>Aug 2017 - Sept 2017</p>
                      <p>I worked on an internal monitoring application for keeping track of employee responsibility and project statuses across the company.</p>
                      </div>
                      : <div></div>}

            </div>
        </div>
      </div>



    </div>
  );
}

export default App;
