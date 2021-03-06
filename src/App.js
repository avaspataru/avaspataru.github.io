import React, {useRef, useState} from 'react';
import Typewriter from 'typewriter-effect';
import { ScrollTo } from 'react-scroll-to';
import './App.css';

import github from './github-icon.png';
import linkedin from './linkedin-icon.png';
import facebook from './facebook-icon.png';
import email from './email-icon.png';
import down from './dropdown-icon.png';
import profile from './profile-glasses.jpeg';
import beans from './coffe_beans_png.png';

import glance from './glance.jpg';
import battleships from './battleships.jpg';
import crispr from './crispr-analyzer-cover.jpg';
import cluster from './cluster.jpg';
import onerail from './onerail.jpg';

function App() {

  const scrollToRef = (myRef) => { myRef.current.scrollIntoView({behavior: "smooth"}); }
  const myRefS2 = useRef(null)
  const executeScroll = () => {  scrollToRef(myRefS2) }

  const [selectedWork, setSelectedWork]  = useState("fb")
  const [selectedProj, setSelectedProj] = useState("crispr")

  return (
    <div className="container">
      <div className="section">

          <div className="social">
              <a href="https://www.linkedin.com/in/avaspataru/" ><img src={linkedin} className="social-icon" /></a>
              <a href="https://github.com/avaspataru"><img src={github} className="social-icon" /></a>
              <a href="https://www.facebook.com/ava.spataru/"><img src={facebook} className="social-icon" /></a>
              <a href="mailto:spataruava@gmail.com"><img src={email} className="social-icon" /></a>
          </div>
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


      </div>

      <div className="section-2" ref={myRefS2}>
        <div className="about-me-text-container">
        <div className="about-me-text">

          <h2> <a className="colourful-strong"> <a className="size2"> A little bit about me.</a> </a></h2>


          <p><b className="ava-bold"> <a className="colourful-strong"> Computer science graduate </a>- </b>I've always been intrigued by computers and their power to solve so many of our world's problems. And so I've studied computer science as an undergraduate degree at <b><a className='colourful-2'>Warwick University</a></b> and pursued it even further in my masters at <b><a className='colourful-2'>Oxford University</a></b>.
          I have successfully graduated from both with a first class, distinction and a lot of useful knowledge!
          </p>

          <p><b className="ava-bold"><a className="colourful-strong"> Software engineering enthuziast </a> - </b> During my studies I've participated in various hackathons and competitions. I can therefore proudly say that I can build a website on nothing more than 3 cups of coffee!
          I've also taken part in some really cool internships, where I met great people and learnt A LOT. All in all, my university experience taught me how to code very well and how to solve seemingly unsolvable problems.
          And so naturally I came to wonder how I could use all these skills to help people. </p>

          <p><b className="ava-bold"><a className="colourful-strong"> Computational biology researcher </a> - </b>In my 3rd year of studies I had to conduct a year-long research project and I saw this as a great opportunity to <b><a className='colourful-2'>do some good</a></b>. Therefore I chose to look into the world of computational biology. (Despite knowing nothing about biology. Afterall, we can learn anything we put our mind to, so why not?)
          The project involved analysing the impact of chemotherapy on ovarian cancer data  and it proved to be a great success! After this I wanted to try out research in the field once more and pursued my masters dissertation in analysing important factors for CRISPR experiment design. I've also taken a course in
          Computational Biology from the department of Statistics in Oxford and a Bioinformatics introduction course from UCSD. I've been doing as much as I can in my spare time and I hope that the impact I have will help bring forward great solutions. </p>

        </div>
        </div>
        <div className="about-me-pic-container">
          <img src={profile} className="profile-pic"/>
        </div>
      </div>

      <div className="section-3">
        <div className="content-column">
          <div className="content-container">
          <div className="full-width-container">
            <div className="where-been-text">
              <h2> <a className="colourful-strong"> <a className="size2"> About where I've been...</a> </a></h2>

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
                      <p className="job-header">Graduate Software Engineer <b className="company-highlight">@Facebook</b></p>
                      <p className="job-timeline">Dec 2020 - Present</p>
                      <ul className="job-points">
                      <p className="job-description"><li> I haven't actually started the job just yet, but I am very very excited! </li></p>
                      <p className="job-description"><li> I will update this as soon as I have what to write. </li></p>
                      </ul>
                    </div>

                    : <div></div>}

                    {(selectedWork == "tw") ?
                        <div>
                        <p className="job-header">Full-Stack Bootcamp Engineer <b className="company-highlight">@TransferWise</b></p>
                        <p className="job-timeline">Jun 2019 - Sept 2019</p>
                        <ul className="job-points">
                        <p className="job-description"><li>My work was in the Education team to develop a web applicatication as a solution for international tuition fee payments. </li> </p>
                        <p className="job-description"><li>The solution was a payment platform and a payment managing system for students, parents, sponsor companies and universities with one or multiple international campuses.</li></p>
                        </ul>
                        <a href="https://www.youtube.com/watch?v=cEvPTOgJx70&t=1s">See a video of my bootcamp experience!</a>
                        </div>
                        : <div></div>}

                    {(selectedWork == "ms") ?
                          <div>
                          <p className="job-header">Summer Analyst in Technology <b className="company-highlight">@Morgan Stanley</b></p>
                          <p className="job-timeline">Jun 2018 - Aug 2018</p>
                          <ul className="job-points">
                          <p className="job-description"><li>I worked in the Listed Sales and Trading team to solve the issue of legacy code debugging, by building a helper tool.</li></p>
                          <p className="job-description"><li>The tool was using reflection techniques to look into the codebase and assist the debugging, while also providing insightful analytics.</li></p>
                          </ul>
                          </div>
                          : <div></div>}

                    {(selectedWork == "gs") ?
                          <div>
                          <p className="job-header">Programmer Help <b className="company-highlight">@Gemini Solutions</b></p>
                          <p className="job-timeline">Aug 2017 - Sept 2017</p>
                          <ul className="job-points">
                          <p className="job-description"><li>I worked on an internal monitoring application for keeping track of employee responsibility and project statuses across the company.</li></p>
                          <p className="job-description"><li>The project involved rewriting an reshaping an existing tool into a React-based website.</li></p>
                          </ul>
                          </div>
                          : <div></div>}

                </div>
            </div>

          </div>

          <div className="full-width-container">
            <div className="what-learnt-text">
            <h2> <a className="colourful-strong"> <a className="size2"> ... and what I learnt</a> </a></h2>

            <img src={beans} className="language-beans"/>

            </div>

          </div>
          </div>
        </div>
      </div>

      <div className="section-4">
      <div className="about-projects-text">
        <h2> <a className="colourful-strong"> <a className="size2"> Some of the stuff I've done.</a> </a></h2>
        <div className="project-details">
        {(selectedProj == "battleships") ?
        <div className="inside-project-details">
          <div className="project-details-header">
            <h4><b>Probabilistic Battleships</b> </h4>
            <h5>Hack Cambridge January 2019 </h5>
          </div>

          <div className="project-details-text">
            <ul className="job-points">
            <p className="job-description"><li>As part of Improbable's challenge at the Hackathon, we had to build an AI that would play a hidden-state game in just one night. We actually won the challenge and qualified in the overall final! </li> </p>
            <p className="job-description"><li>Our solution consisted of two AIs. One using Keanu (Improbable's own probabilistic programming language) and one using a rule-based heuristic. Both algorithms performed very well and we showed that the scores from our heuristic actually resembeled the true probabilities. </li></p>
            <p className="job-description"><li>My contribution was especially in building the front-end and overseeing the full pipeline of work. Our interface allowed for the user to place the battleships wherever they wished and then run the two algorithms (either in parallel or one-by-one) observing the probabilities.</li></p>
            </ul>
          </div>


          <div className="project-details-links">
            <h5><b> Read more </b></h5>
            <p>Article about the challenge<a href="https://improbable.io/blog/improbable-at-hack-cambridge-4d-2019">[Link]</a></p>
            <p>Description of our solution<a href="https://devpost.com/software/battlereeves">[Devpost]</a></p>
            <p>Source code<a href="https://github.com/alexmotoc/hack-cambridge">[GitHub]</a></p>
          </div>

          <div className="technology-badges">
            <h5 className="tech-badge-h5"><b> Technologies</b></h5>
            <div className="techy-badge">Angular.js</div>
            <div className="techy-badge">HTML</div>
            <div className="techy-badge">CSS</div>
            <div className="techy-badge">Java</div>
            <div className="techy-badge">Keanu</div>
            <div className="techy-badge">Node js</div>
            <div className="techy-badge">Typescript</div>
            <div className="techy-badge">Spring boot</div>
          </div>
        </div>
        : (selectedProj == "glance") ?
        <div className="inside-project-details">
          <div className="project-details-header">
            <h4><b>Glance - a search engine for code</b> </h4>
            <h5>Hack Cambridge January 2020 </h5>
          </div>

          <div className="project-details-text">
            <ul className="job-points">
            <p className="job-description"><li>Glance behaves like Google, but for code. It's biggest advantage is that it is optimized for code search, ensuring that if someone had ever published code similar to what you want, you can find it!</li> </p>
            <p className="job-description"><li>There are two ways of using this, you either enter a regular expression and your language of choice, to get any code snippets that match, or you enter a function name and you get all the functions with similar namings. This is especially useful for implementations of common util functions. The search engine also had other nice functionalities embedded such as spelling corrections.</li></p>
            <p className="job-description"><li>My main contribution was applying the word2vec model to find the function definitions which match the intention behind your function name. </li></p>
            </ul>
          </div>


          <div className="project-details-links">
            <h5><b> Read more </b></h5>
            <p>Description of our solution<a href="https://devpost.com/software/glance-5u2arx">[Devpost]</a></p>
            <p>Source code for the interface<a href="https://github.com/avaspataru/hackcambridge101">[GitHub]</a></p>
          </div>

          <div className="technology-badges">
            <h5 className="tech-badge-h5"><b> Technologies</b></h5>
            <div className="techy-badge">Python</div>
            <div className="techy-badge">word2vec</div>
            <div className="techy-badge">Elastic Search</div>
            <div className="techy-badge">React</div>
            <div className="techy-badge">HTML</div>
            <div className="techy-badge">CSS</div>
            <div className="techy-badge">Bing Spell Check</div>
            <div className="techy-badge">Azure Cognitive Services</div>
            <div className="techy-badge">Azure Cloud</div>
          </div>
        </div>
        : (selectedProj == "crispr") ?
        <div className="inside-project-details">
          <div className="project-details-header">
            <h4><b>CRISPR Analyzer</b> </h4>
            <h5>MSc Thesis Summer 2020</h5>
          </div>

          <div className="project-details-text">
            <ul className="job-points">
            <p className="job-description"><li>A web application which helps us investigate the importance of features in ML-based tools for CRISPR/Cas9 gRNA efficiency prediction. This was developed as part of an MSc project in 2020.</li> </p>
            <p className="job-description"><li>The application has a number of models and datasets previously loaded. For each model and dataset pair (upon user selection), it can calculate the SHAP values of each feature. The SHAP values are a great way of measuring feature importance across models.</li></p>
            <p className="job-description"><li>The SHAP values are then used to generate various plots or to compare two or more models on either or both datasets. This is done by generating a positional plot which has information from all the selected models.</li></p>
            </ul>
          </div>


          <div className="project-details-links">
            <h5><b> Read more </b></h5>
            <p>Backend extra functionality <a href="https://github.com/avaspataru/SHAP-Value-Plotting-for-CRISPR-tools">[GitHub]</a></p>
            <p>Source code<a href="https://github.com/avaspataru/CRISPR-Analyzer">[GitHub]</a></p>
          </div>

          <div className="technology-badges">
            <h5 className="tech-badge-h5"><b> Technologies</b></h5>
            <div className="techy-badge">Python</div>
            <div className="techy-badge">React</div>
            <div className="techy-badge">SHAP</div>
            <div className="techy-badge">scikit-learn</div>
            <div className="techy-badge">numpy</div>
            <div className="techy-badge">pandas</div>
            <div className="techy-badge">matplotlib</div>
            <div className="techy-badge">Flask API</div>
            <div className="techy-badge">Bootstrap</div>
          </div>

        </div>
        : (selectedProj == "cluster") ?
        <div className="inside-project-details">
          <div className="project-details-header">
            <h4><b>Cluster Insight</b> </h4>
            <h5>Undergraduate Dissertation 2019</h5>
          </div>

          <div className="project-details-text">
            <ul className="job-points">
            <p className="job-description"><li>Application which automatically generates a report for explaining the classification of cells from a DGE matrix, made via Seurat. It also automatically compares two classifications, cluster by cluster, based on their gene expressions and generates similarity numbers (based on a developed formula).</li> </p>
            <p className="job-description"><li>Based on user uploaded files (containing the cell-type classification), and some user preferences, it generates a report containing much-needed information for understanding the classification. The tool has sucessfully been used to make sense of various groupings by looking at the genes these express and their roles.The application can also be used on two datasets, case in which it will contrast them and output similarity measures along the two individual reports.</li></p>
              </ul>
          </div>


          <div className="project-details-links">
            <h5><b> Read more </b></h5>
            <p>Source code<a href="https://github.com/avaspataru/ClusterInsight">[GitHub]</a></p>
            <p>Project report<a href="https://github.com/avaspataru/Dissertation/blob/master/Final%20Report.pdf">[PDF]</a></p>
          </div>

          <div className="technology-badges">
            <h5 className="tech-badge-h5"><b> Technologies</b></h5>
            <div className="techy-badge">Python</div>
            <div className="techy-badge">Flask API</div>
            <div className="techy-badge">Typescript</div>
            <div className="techy-badge">Angular js</div>
            <div className="techy-badge">Web Scraper</div>
          </div>
        </div>
        : (selectedProj == "onerail") ?
        <div className="inside-project-details">
          <div className="project-details-header">
            <h4><b>One Rail - chatbot for travelers</b> </h4>
            <h5>Hack Train VI November 2019</h5>
          </div>

          <div className="project-details-text">
            <ul className="job-points">
            <p className="job-description"><li>A smart chatbot, which makes life easier for those people constantly on the move! Refunds, exchanges and advice!</li> </p>
            <p className="job-description"><li>OneRail understands what you mean, even when you can't type properly because you are running to not miss your train. It is on your side and will help you exchange/cancel your tickets without any of the worries and none of the fuss! It is a web-based ChatBot, which acts as a friendly network operator, helping you exchange, cancel tickets and get refunds when you need them.</li></p>
            <p className="job-description"><li>My contribution was in the backend, making and parsing all the SOAP API calls to the Silver Rail application.</li></p>

            </ul>
          </div>


          <div className="project-details-links">
            <h5><b> Read more </b></h5>
            <p>Post about implementation<a href="https://devpost.com/software/onerail">[Devpost]</a></p>
            <p>The hackathon story<a href="https://nathaniel.work/events/2019/11/24/hacktrain.html">[Blog]</a></p>
          </div>

          <div className="technology-badges">
            <h5 className="tech-badge-h5"><b> Technologies</b></h5>
            <div className="techy-badge">C#</div>
            <div className="techy-badge">SOAP API</div>
            <div className="techy-badge">Azure-iot-suite</div>
          </div>
        </div>
        : <div></div>
      }

        </div>
        <div className="carousel">
          <div className="thumb"><img src={crispr} onClick={() => setSelectedProj("crispr")} className={(selectedProj == "crispr") ? "selected-img" : "just-proj-img"}/></div>
          <div className="thumb"><img src={glance} onClick={() => setSelectedProj("glance")} className={(selectedProj == "glance") ? "selected-img" : "just-proj-img"}/></div>
          <div className="thumb"><img src={onerail} onClick={() => setSelectedProj("onerail")} className={(selectedProj == "onerail") ? "selected-img" : "just-proj-img"}/></div>
          <div className="thumb"><img src={battleships} onClick={() => setSelectedProj("battleships")} className={(selectedProj == "battleships") ? "selected-img" : "just-proj-img"}/></div>
          <div className="thumb"><img src={cluster} onClick={() => setSelectedProj("cluster")} className={(selectedProj == "cluster") ? "selected-img" : "just-proj-img"} /></div>
        </div>
      </div>
      </div>

      <div className="section-5">
        <div className="connect-container">
          <h2 className="connect"> Connect<a className="connect-dot">.</a> </h2>
          <div className="connect-links">
            <a href="mailto:spataruava@gmail.com" className="connect-email">spataruava@gmail.com </a>
            <a className="connect-or">or</a>
            <a href="https://www.linkedin.com/in/avaspataru/" className="connect-email"> /in/avaspataru/</a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
