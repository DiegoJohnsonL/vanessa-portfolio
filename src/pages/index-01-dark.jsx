import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Layout1 from "../layout/Layout1";
import HomeOne from "../components/homeOne";
import AboutOne from "../components/aboutOne";
import ServiceOne from "../components/serviceOne";
import PortfolioOne from "../components/portfolioOne";
import TestimonialOne from "../components/testimonialOne";
import ContactOne from "../components/contactOne";
export default function Home() {
  useEffect(() => {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
  }, []);
  return (
    <Layout1>
      {/* Main */}
      <main className="wrapper">
        {/* Home */}
        <section id="home" data-scroll-index={0} className="home-section">
          <HomeOne />
        </section>
        {/* End Home */}
        {/* About */}
        <section id="about" data-scroll-index={1} className="section about-section gray-bg-1">
          <AboutOne />
        </section>
        {/* End About */}
        {/* Services */}
        <section id="services" data-scroll-index={2} className="section services-section">
          <ServiceOne />
        </section>
        {/* End Services */}
        {/* portfolio */}
        <section id="portfolio" data-scroll-index={3} className="section portfolio-section gray-bg-1">
          <PortfolioOne />
        </section>
        {/* End portfolio */}
        {/* Testimonials */}
        <section className="section testimonials-section">
          <TestimonialOne />
        </section>
        {/* End Testimonials */}
        {/* contactus */}
        <section id="contactus" data-scroll-index={4} className="section contactus-section gray-bg-1">
          <ContactOne />
        </section>
        {/* End contactus */}
      </main>
      {/* Main */}


    </Layout1>
  )
}
