


import React from "react";
import "./contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <main className="contact-main"> 

        <div className="contact-content">
          <form className="contact-form">
            <h2>Contact Form</h2>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
            <label>Email</label>
            <input type="email" placeholder="Your email" />
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <div className="info-block">
              <img src="./placeholder.png" alt="Location" className="icon-img" />
              <div>
                <h3>Address</h3>
                <p>1234 Elm St, Suite 567<br />Anytown, USA</p>
              </div>
            </div>

            <div className="info-block">
              <img src="./phone.png" alt="Phone" className="icon-img" />
              <div>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>

            <div className="info-block">
              <h3>Social Media</h3>
              <div className="social-icons">
                <img src="./facebook.png" alt="Facebook" className="social-icon" />
                <img src="./twitter.png" alt="Twitter" className="social-icon" />
                <img src="./linkedin.png" alt="LinkedIn" className="social-icon" />
                <img src="./instagram.png" alt="Instagram" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
