import React from "react";
import "./styles.css";
import img from "../src/Assets/img.jpeg";
import frontend from "../src/Assets/poerfolio1.jpg";

function App() {
  return (
    <div>
      <div id="page-1">
        <div id="div-tint">
          <div id="nav-bar">
            <ul>
              <li class="name">V.K Yamini </li>
              <li id="home-link">
                <a href="#Home">Home</a>
              </li>
              <li id="work-link">
                <a href="#About-me">About</a>
              </li>
              <li id="about-link">
                <a href="#Projects">Portfolio</a>
              </li>
              <li id="getintouch-link">
                <a href="#Contacts">Conatct</a>
              </li>
              <li><a href="https://docs.google.com/document/d/1hmyOoFpUE1eImqPQlCMjHKOzieg9crPmLzdbro6frWM/edit?usp=sharing"  target={"_blank"}
              rel="noreferrer"  id="res-non">Resume</a></li>
            </ul>
          </div>
          <div id="Home">
            <div id="frontpage-img-div">
              {" "}
              <center>
                {" "}
                <img id="frontpage-image" src={frontend} alt="mypic"></img>
              </center>
           <center><a href="https://docs.google.com/document/d/1hmyOoFpUE1eImqPQlCMjHKOzieg9crPmLzdbro6frWM/edit?usp=sharing"  target={"_blank"}
              rel="noreferrer"> <span id="resume">Resume</span></a></center>  
            </div>
            <p id="front-page">Hi! I'm Yamini, and I build web apps</p>
            <center>
              <a href="#Contacts">
                <button id="hire-me">Get In Touch</button>
              </a>
            </center>
          </div>
        </div>
      </div>

      {/* About me section */}
      <div id="About-me">
        <div id="about-me-div">
          <div id="aboutme-descriptive">
            <div id="aboutme-info">
              <p id="aboutme-heading">A little bit about me</p>
              <p class="p-1">Hai! Welcome i am V.K yamini</p>
              <p class="p-1">
                I am Full satck web developer i love creating websites
              </p>
              <p class="p-1">I am Full satck web developer i enjoy</p>
              <p class="p-1">
                I am Full satck web developer i am looking forward to it
              </p>
              <p class="p-1">
                I am Full satck web developer i am gonna be good at it
              </p>
              <p class="p-1">
                I am Full satck web developer how are you guys doing?
              </p>
            </div>
            <div id="aboutme-img">
              {" "}
              <img id="my-image" src={img} alt="mypic"></img>
            </div>
          </div>
        </div>
      </div>

      {/* this is projet section */}
      <div id="Projects">
        <div id="project-container">
          <div id="projects-scroll-container">
            <h3 id="projects-heading">Portfolio</h3>

            <a
              href="https://guru-ui.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div class="project-box1">
                <div class="project-info">
                  <div>
                    <p>The Guruu</p>
                    <a
                      href="https://github.com/vkyamini/guru-ui"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://guru-ui.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://graphql-yamini-books.herokuapp.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box2">
                <div class="project-info">
                  <div>
                    <p>Books App</p>
                    <a
                      href="https://github.com/vkyamini/books-app"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://graphql-yamini-books.herokuapp.com/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://addnotes.herokuapp.com/notes"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box3">
                <div class="project-info">
                  <div>
                    <p>Notes Taker</p>
                    <a
                      href="https://github.com/vkyamini/notes_taker"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://addnotes.herokuapp.com/notes"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://vkyamini.github.io/daily-Calendar/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box4">
                <div class="project-info">
                  <div>
                    <p>Daily Calendar</p>
                    <a
                      href="https://github.com/vkyamini/daily-Calendar"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/daily-Calendar/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://vkyamini.github.io/dailt-weather/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box5">
                <div class="project-info">
                  <div>
                    <p>Weather App</p>
                    <a
                      href="https://github.com/vkyamini/dailt-weather"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/dailt-weather/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://vkyamini.github.io/Quiz/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box6">
                <div class="project-info">
                  <div>
                    <p>Quiz</p>
                    <a
                      href="https://github.com/vkyamini/Quiz"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a>
                  </div>
                  <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/Quiz/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* this is contact information section */}
      <div id="Contacts">
        <div id="form-div">
          <p id="contact-heading">Get in Touch</p>
         <form>
            <input id="form-name" type="text" placeholder="name"></input>
            <input id="form-Email" type="text" placeholder="Email"></input>
            <br></br>
            <input
              id="form-number"
              type="number"
              placeholder="Phone number"
            ></input>
            <input id="form-subject" type="text" placeholder="subject"></input>
            <br></br>
            <input
              id="form-comment"
              type="textarea"
              placeholder="please leave your comment"
            ></input>
            <br></br>
            <button id="form-submit">Submit</button>
          </form>
        </div>
      </div>

      <div>
        <ul id="footer">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About-me">About</a>
          </li>
          <li>
            <a href="#Projects">Portfolio</a>
          </li>
          <li>
            <a href="#Contacts">Conatct</a>
            </li>
            <li><a href="https://docs.google.com/document/d/1hmyOoFpUE1eImqPQlCMjHKOzieg9crPmLzdbro6frWM/edit?usp=sharing" target={"_blank"}  rel="noreferrer"><span id="resume-footer">Resume</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
