import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Layout2 from "../layout/Layout2";
import HomeTwo from "../components/homeTwo";
import AboutOne from "../components/aboutOne";
import ServiceOne from "../components/serviceOne";
import PortfolioOne from "../components/portfolioOne";
import TestimonialOne from "../components/testimonialOne";
import ContactOne from "../components/contactOne";

export default function Home() {

  return (
    <Layout2 switcherBtn>
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
