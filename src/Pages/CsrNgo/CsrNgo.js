import React from "react";
import { FaBook, FaLeaf, FaHandsHelping, FaPhone, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CsrNgo.css"; // Importing external CSS

const CSRAndNGO = () => {
  return (
    <div className="csr-container">
      <h1>CSR & NGO</h1>

      {/* Introduction */}
      <section>
        <h2><FaBook /> What is CSR & NGO?</h2>
        <p><strong>Corporate Social Responsibility (CSR)</strong> means companies taking action to give back to society—like supporting education, environment, or health.</p>
        <p><strong>Non-Governmental Organizations (NGOs)</strong> are independent, nonprofit groups that work on social and humanitarian issues.</p>
        <p>CSR and NGOs both help create opportunities for learning, internships, and career growth while building a better society.</p>
      </section>

      {/* CSR Activities */}
      <section>
        <h2><FaLeaf /> CSR Activities & Impact</h2>
        <ul>
          <li>Educational programs and scholarships for underprivileged students.</li>
          <li>Skill development workshops and vocational training.</li>
          <li>Environmental conservation and awareness campaigns.</li>
          <li>Health and wellness camps for communities.</li>
          <li>Support for research & innovation initiatives.</li>
        </ul>
        <p>These efforts create real career-building opportunities through internships and training programs.</p>
      </section>

      {/* NGO Collaborations */}
      <section>
        <h2><FaHandsHelping /> NGO Collaborations & Opportunities</h2>
        <p>We partner with NGOs working in education, women empowerment, training, and welfare. Many offer volunteer and internship roles.</p>
        <p>Join to gain experience, grow your network, and contribute to social change.</p>
      </section>

      {/* Support from Website */}
      <section>
        <h2><FaLeaf /> How We Support CSR & NGOs</h2>
        <p>We help promote CSR initiatives and NGO activities on our platform. You'll find updates on training, internships, and events that align with social goals.</p>
        <p>Stay tuned for upcoming drives and volunteer programs you can join.</p>
      </section>

      {/* Call to Action */}
      <section className="contact-box">
  <h2><FaPhone /> Get Involved</h2>
  <p>If you're interested in joining CSR programs or volunteering, get in touch with us!</p>
  <div className="text-center mt-3">
    <a href="/contact" className="btn btn-primary btn-lg">
      <FaEnvelope className="me-2" />
      Contact Us
    </a>
  </div>
</section>

    </div>
  );
};

export default CSRAndNGO;
