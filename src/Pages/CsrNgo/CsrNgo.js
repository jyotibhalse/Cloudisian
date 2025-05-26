import React from "react";
import { FaBook, FaLeaf, FaHandsHelping, FaPhone, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CsrNgo.css";

const CSRAndNGO = () => {
  return (
    <div className="csr-container">
      <h1>CSR & NGO</h1>

      {/* Introduction */}
      <section>
        <h2><FaBook /> What is CSR & NGO?</h2>
        <div className="row align-items-center">
          <div className="col-md-7">
            <p><strong>Corporate Social Responsibility (CSR)</strong> means companies taking action to give back to society—like supporting education, environment, or health.</p>
            <p><strong>Non-Governmental Organizations (NGOs)</strong> are independent, nonprofit groups that work on social and humanitarian issues.</p>
            <p>CSR and NGOs both help create opportunities for learning, internships, and career growth while building a better society.</p>
          </div>
          <div className="col-md-5">
            <img src="https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/11/05041058/Blog-csr-eng.jpg" className="img-fluid rounded shadow-sm" alt="CSR Introduction" />
          </div>
        </div>
      </section>

      {/* CSR Activities */}
      <section>
        <h2><FaLeaf /> CSR Activities & Impact</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <ul>
              <li>Educational programs and scholarships for underprivileged students.</li>
              <li>Skill development workshops and vocational training.</li>
              <li>Environmental conservation and awareness campaigns.</li>
              <li>Health and wellness camps for communities.</li>
              <li>Support for research & innovation initiatives.</li>
            </ul>
            <p>These efforts create real career-building opportunities through internships and training programs.</p>
          </div>
          <div className="col-md-6">
            <img src="https://media.licdn.com/dms/image/v2/D5612AQGWnp8Iip85dg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677824256967?e=2147483647&v=beta&t=HMNqcWwAx4QyzKXQ5svDebJOgf3alHzsVe3RkqjHJ1k" className="img-fluid rounded shadow-sm" alt="CSR Activities" />
          </div>
        </div>
      </section>

      {/* NGO Collaborations */}
      <section>
        <h2><FaHandsHelping /> NGO Collaborations & Opportunities</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://www.weficgroup.com/wp-content/uploads/2017/09/CSR-Tour-4-1024x768.jpg" className="img-fluid rounded shadow-sm" alt="NGO Partnership" />
          </div>
          <div className="col-md-6">
            <p>We partner with NGOs working in education, women empowerment, training, and welfare. Many offer volunteer and internship roles.</p>
            <p>Join to gain experience, grow your network, and contribute to social change.</p>
          </div>
        </div>
      </section>

      {/* Website Support */}
      <section>
        <h2><FaLeaf /> How We Support CSR & NGOs</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>We help promote CSR initiatives and NGO activities on our platform. You'll find updates on training, internships, and events that align with social goals.</p>
            <p>Stay tuned for upcoming drives and volunteer programs you can join.</p>
          </div>
          <div className="col-md-6">
            <img src="https://catchfoundation.in/_next/image?url=https%3A%2F%2Fcatch-foundation-s3-bucket-prod.s3.ap-south-1.amazonaws.com%2FThings_to_make_our_CSR_project_Successful_ed55a9c150.webp&w=3840&q=75" className="img-fluid rounded shadow-sm" alt="CSR Support" />
          </div>
        </div>
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
