import React, { useState } from 'react';
import './ItConsulting.css';

import Cloud from '../../Images/Cloud.jpg';
import Cyber from '../../Images/backend.jpg';
import Strategy from '../../Images/frontend.jpg';
import Infrastructure from '../../Images/AIWebinar.jpg';
import AI from '../../Images/Hackathon.jpg';
import DevOps from '../../Images/cd1.jpg';
import DataAnalytics from '../../Images/img2.jpg';
import MobileApps from '../../Images/img3.jpg';
import AIConsulting from '../../Images/img4.jpg';
import Team from '../../Images/cd2.jpg';
import Client from '../../Images/cd5.jpg';
import Pricing from '../../Images/cd3.jpg';

const HeroSection = () => (
  <div className="hero-section">
    <div className="background-image"></div>
    <div className="hero-content">
      <h1>Empowering Businesses with Expert IT Consulting Services</h1>
      <p>Smart, scalable, and secure IT solutions—from cloud to cybersecurity—Cloudisian fuels your digital transformation journey..</p>
      <button className="cta-button">Explore now</button>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    { title: "Cloud Consulting", desc: "Migrate, scale, and optimize your cloud infrastructure.", image: Cloud },
    { title: "Cybersecurity", desc: "Protect your systems from threats and data breaches.", image: Cyber },
    { title: "Software Strategy", desc: "Build and improve your tech products effectively.", image: Strategy },
    { title: "IT Infrastructure", desc: "Design and implement scalable tech systems.", image: Infrastructure },
    { title: "AI & Automation", desc: "Integrate AI tools and automate repetitive business processes.", image: AI },
    { title: "DevOps Consulting", desc: "Streamline development and operations for faster delivery.", image: DevOps },
    { title: "Data Analytics", desc: "Unlock insights and make data-driven decisions.", image: DataAnalytics },
  { title: "Mobile App Consulting", desc: "Build high-performance mobile apps across platforms.", image: MobileApps },

  ];

  return (
    <div>
      <h2 className="section-title">Our IT Consulting Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            {service.image && <img src={service.image} alt={service.title} className="service-image" />}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Experienced Team", desc: "Our consultants have years of hands-on industry experience.", image: Team },
    { title: "Client-Centered Approach", desc: "We prioritize your goals and customize every solution.", image: Client },
    { title: "Affordable Pricing", desc: "Get expert advice without breaking your budget.", image: Pricing },
    { title: "24/7 Support", desc: "We’re available when you need us the most.", image:AIConsulting },
  ];

  return (
    <div>
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="card">
            {item.image && <img src={item.image} alt={item.title} className="feature-image" />}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    "Schedule a Free Consultation",
    "Understand Your Needs & Challenges",
    "Design Customized IT Solutions",
    "Implement and Monitor Progress",
    "Provide Ongoing Support",
  ];

  return (
    <div>
      <h2 className="section-title">How It Works</h2>
      <ol className="how-list">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What industries do you work with?",
      answer: "We serve startups, educational institutions, e-commerce businesses, and more.",
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing depends on the scope and duration of the project. We offer free consultations to estimate costs.",
    },
    {
      question: "Do you offer remote consulting?",
      answer: "Yes, we offer 100% remote IT consulting to clients globally.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div>
      <h2 className="section-title">FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button onClick={() => toggle(index)}>{faq.question}</button>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="cta-section">
    <h2>Ready to Transform Your IT Strategy?</h2>
    <p>Let our experts guide your business to success.</p>
    <a href="/contact">
      <button className="cta-button1">Contact Us Today</button>
    </a>
  </div>
);

const ITConsultingPage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default ITConsultingPage;
