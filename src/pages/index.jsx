import React from 'react'
import Footer from '../layout/Footer'


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
              {/* <div className="col-sm-6 col-lg-4 my-4">
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
              </div> */}
            </div>
          </div>
        </section>
        {/* section */}
       
        {/* section */}
      </main>
      <Footer/>

    </>
  )
}
