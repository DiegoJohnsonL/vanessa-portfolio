import React from 'react'
import { TypeWriter } from '../plugin/type-writer';

export default function HomeTwo() {
  return (
    <>
      <div>
        <div className="ef-1" />
        <div className="ef-2" />
        <div className="container position-relative">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 ps-xl-5 mb-5 mb-lg-0">
              <div className="home-intro">
                <h6>👋 Hi, I’ m</h6>
                <h1>Tapsi d{"'"}Souza</h1>
                <h2>I{"'"}m a <TypeWriter/></h2>
                <p className="pe-lg-5">We work with professionals and leaders who want to build careers that fulfil them intellectually, financially</p>
                <ul className="nav social-link">
                  <li>
                    <a href="#"><i className="fab fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-facebook" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div className="home-image">
                    <img src="assets/img/home-banner.jpg"  alt="title" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="home-image home-image-02">
                    <img src="assets/img/about-banner.jpg"  alt="title" />
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
