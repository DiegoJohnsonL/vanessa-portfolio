import React from 'react'
import { useEffect } from "react";
import { activeSkillProgress } from "../utility";
export default function AboutOne() {
    useEffect(() => {
        window.addEventListener("scroll", activeSkillProgress);
      });
  return (
    <>
        <div className="container">
            <div className="about-me">
              <div className="row align-items-start">
                <div className="col-lg-5 pb-4 pb-lg-0">
                  <div className="title-01">
                    <span>About Me</span>
                  </div>
                  <div className="about-me-text pb-5">
                    <h3>My Name Is Vanessa Nascimento</h3>
                    <h5><span>I Am Available</span> For Pretty Much Anything</h5>
                    <p>Born in 2002, in Brazil. I do anything i want cuz im a baddy 😈.</p>
                    <div className="row pt-2">
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">?</span>
                          <div className="a-count-text">Projects <br />Completed.</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">1</span>
                          <div className="a-count-text">Satisfied <br />Client (diego).</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="title-01 mt-5">
                    <span>Experience</span>
                  </div>
                  <div className="resume-box">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2023 - Present</span>
                        <h5>Bottom fragger - Valorant</h5>
                        <p>I try to get kills sometimes.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2023 - Present</span>
                        <h5>Wanna be support - League of legends</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2023 - Present</span>
                        <h5>Anime enthusiast - My room + netflix + popcorn</h5>
                        <p>I love BL and korean Dramas {">w<"}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 sticky-lg-top ps-xl-5">
                  <div className="row align-items-start">
                    <div className="col-md-7 py-4">
                      <div className="about-me-img">
                        <img src="assets/img/about-banner.png" alt="title" />
                      </div>
                    </div>
                    <div className="col-md-5 py-4">
                      <div className="about-content">
                        <ul>
                        
                          <li>
                            <div className="a-icon">
                              <i className="fa fa-envelope" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="#">Mail Me</a>
                            </div>
                          </li>
                          <li>
                            <div className="a-icon">
                              <i className="fab fa-whatsapp" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="#">WhatsApp Me</a>
                            </div>
                          </li>
                     
                          <li>
                            <div className="a-icon">
                              <i className="fa-solid fa-file-pdf" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="#">Resume</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 py-4">
                      <div className="title-01">
                        <span>Skills</span>
                      </div>
                      <div className="skills">
                        <div className="skill-lt" data-value={92}>
                          <h6 className="dark-color">Valorant top fragger (sometimes)</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={72}>
                          <h6 className="dark-color">Playing support characters and building dmg items</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={86}>
                          <h6 className="dark-color">Singing</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>86%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={88}>
                          <h6 className="dark-color">Drawing</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>88%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
