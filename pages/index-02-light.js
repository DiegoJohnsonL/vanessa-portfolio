import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Layout2 from '../src/layout/Layout2'
import HomeTwo from '../src/components/elements/homeTwo';
import AboutOne from '../src/components/elements/aboutOne';
import ServiceOne from '../src/components/elements/serviceOne';
import PortfolioOne from '../src/components/elements/portfolioOne';
import TestimonialOne from '../src/components/elements/testimonialOne';
import ContactOne from "../src/components/elements/contactOne";

export default function Home() {
  // useEffect(() => {
  //   document.querySelector("html").setAttribute("data-bs-theme", "light");
  // }, []);
  return (
    <Layout2  style={"light"}>
      {/* Home */}
      <section id="home" data-scroll-index={0} className="section home-section-02">
        <HomeTwo />
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
    </Layout2>
  )
}
