import React from 'react'
import Footer from '../src/layout/Footer'


export default function Index() {
  return (
    <>
      <main className="wrapper">
        {/* Home */}
        <section id="home" data-scroll-index={0} className="home-section gray-bg-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center d-flex align-items-center justify-content-center" style={{ minHeight: 300 }}>
                <h1 className="display-5 fw-bold">Tapsi - Bootstrap 5 Portfolio Template</h1>
              </div>
            </div>
          </div>
        </section>
        {/* End Home */}
        {/* section */}
        <section data-scroll-index={0} className="section pt-0">
          <div className="container">
            <div className="section-heading text-center mb-4" style={{ marginTop: '-30px' }}>
              <span className="px-btn pe-none">AWESOME HOME DEMOS</span>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-01">
                    <img className="rounded-3" src="demo/index-01-dark-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark / Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-01-light">
                    <img className="rounded-3" src="demo/index-01-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-01-dark">
                    <img className="rounded-3" src="demo/index-01-dark.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-02">
                    <img className="rounded-3" src="demo/index-02-dark-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark / Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-02-light">
                    <img className="rounded-3" src="demo/index-02-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-02-dark">
                    <img className="rounded-3" src="demo/index-02-dark.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-03">
                    <img className="rounded-3" src="demo/index-03-dark-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark / Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-03-light">
                    <img className="rounded-3" src="demo/index-03-light.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Light Theme</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 my-4">
                <div className="feature-box-01 p-2">
                  <a target="_blank" href="/index-03-dark">
                    <img className="rounded-3" src="demo/index-03-dark.jpg" alt="title" />
                  </a>
                  <div className="text-center pt-3">
                    <h5>Dark Theme</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section */}
        {/* section */}
        <section className="section gray-bg-1 pt-0">
          <div className="container">
            <div className="section-heading text-center mb-4 position-relative" style={{ top: '-30px' }}>
              <span className="px-btn pe-none">Salient Features</span>
            </div>
            <div className="row">
              <div className="col-lg-4 about-content">
                <ul>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Dark/Light Theme Switch
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Bootstrap 5
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      12 Color Options
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Modern Design
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      3 Hero Banner Option
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 about-content">
                <ul>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Font Awesome Icon
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Bootstrap Icon
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Perfect Responsive
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Best Support
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Dark Light Theme Options
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 about-content">
                <ul>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      HTML 5
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Well Documented Codes
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      Sass Available
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      2 Header Option
                    </div>
                  </li>
                  <li>
                    <div className="a-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="a-text">
                      And Many More...
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* section */}
      </main>
      <Footer/>

    </>
  )
}
