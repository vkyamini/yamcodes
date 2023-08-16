import React from "react";
import "./styles.css";
import img from "../src/Assets/colored.jpeg";
import frontend from "../src/Assets/coverpic.jpeg";

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
              <li id="resume-li"><a href="https://docs.google.com/document/d/1hmyOoFpUE1eImqPQlCMjHKOzieg9crPmLzdbro6frWM/edit?usp=sharing"  target={"_blank"}
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
           {/* <center><a href="https://docs.google.com/document/d/1hmyOoFpUE1eImqPQlCMjHKOzieg9crPmLzdbro6frWM/edit?usp=sharing"  target={"_blank"}
              rel="noreferrer"> <span id="resume">Resume</span></a></center>   */}
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
              <p class="p-1">I am full stack developer based in Seattle,washington.</p>
              <p class="p-1">
              As software developer i spend my days [often nights] 
              </p>
              <p class="p-1">diving in the universe of JavaScript and exploring the </p>
              <p class="p-1"> world of components in ReactJs.I often try to turn 0's and 1's</p>
              <p class="p-1">
                into a logical experiences.
              </p>
              <p class="p-1">
              When i am not Coding i read articles,do Painting or mostly</p>
              <p class="p-1"> shinrin-yoku [forest bathing].
              </p> 
              <p class="p-1" >
              I meditate and also a  certified <a href="https://heartfulness.org/en/masterclass/?utm_source=google&utm_medium=cpc&utm_campaign=how_to_meditate&utm_term=learning_to_meditate&gclid=Cj0KCQjwuNemBhCBARIsADp74QT8vn6Mth7j-zrdBPPE315fLvYxb4FAZHBZ6eDzAyLhSh0wMvsOLeYaAjeyEALw_wcB" target={"_blank"} rel="noreferrer" id="heartfulness">Heartfullness trainer</a>.
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
              href="https://github.com/vkyamini/guru-ui"
              target={"_blank"}
              rel="noreferrer"
            >
              <div class="project-box1">
               
                <div class="project-info">
                
                  <div>
                  <centre><p class="project-header">The Guruu</p></centre>  
                    {/* <a
                      href="https://github.com/vkyamini/guru-ui"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://guru-ui.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </a>

            <a
              href="https://github.com/vkyamini/books-app"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box2">
                <div class="project-info">
                  <div>
                    <p class="project-header">Books App</p>
                    {/* <a
                      href="https://github.com/vkyamini/books-app"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://graphql-yamini-books.herokuapp.com/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/vkyamini/notes_taker"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box3">
                <div class="project-info">
                  <div>
                    <p class="project-header">Notes Taker</p>
                    {/* <a
                      href="https://github.com/vkyamini/notes_taker"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://addnotes.herokuapp.com/notes"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/vkyamini/daily-Calendar"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box4">
                <div class="project-info">
                  <div>
                    <p  class="project-header">Daily Calendar</p>
                    {/* <a
                      href="https://github.com/vkyamini/daily-Calendar"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/daily-Calendar/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/vkyamini/dailt-weather"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box5">
                <div class="project-info">
                  <div>
                    <p class="project-header">Weather App</p>
                    {/* <a
                      href="https://github.com/vkyamini/dailt-weather"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/dailt-weather/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/vkyamini/Quiz"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <div class="project-box6">
                <div class="project-info">
                  <div>
                    <p class="project-header">Quiz</p>
                    {/* <a
                      href="https://github.com/vkyamini/Quiz"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <p>Github Link</p>
                    </a> */}
                  </div>
                  {/* <div class="weblink-btn">
                    <a
                      href="https://vkyamini.github.io/Quiz/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button class="btn-weblink">see website &#8594;</button>
                    </a>
                  </div> */}
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
         <form name="contact" method="post" netlify netlify-honeypot="bot-field">
            <input id="form-name" type="text" placeholder="name" name="name"></input>
            <input id="form-Email" type="text" placeholder="Email" name="email"></input>
            <br></br>
            <input
              id="form-number"
              type="number"
              name="phone-number"
              placeholder="Phone number"
            ></input>
            <input id="form-subject" type="text" placeholder="subject" name="subject"></input>
            <br></br>
            <input
              id="form-comment"
              type="textarea"
              placeholder="please leave your comment"
              name="message"
            ></input>
            <br></br>
            <button id="form-submit" type="submit">Submit</button>
            <input type="hidden" name="form-name" value="contact" />
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
