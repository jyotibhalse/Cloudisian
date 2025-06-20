// import React, { useState } from "react";
// import "./contact.css";
// import Facebook from "../../Images/facebook.png";
// import Linkedin from "../../Images/linkedin.png";
// import Instagram from "../../Images/instagram.png";
// import Twitter from "../../Images/twitter.png";
// import USA from "../../Images/flag.png";
// import India from "../../Images/world.png";
// import axios from "axios";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://cloudisian.net/contact", formData);
//       alert("Message sent!");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to send message.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <main className="contact-main">
//         <div className="contact-content">
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <h2>Contact Form</h2>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               onChange={handleChange}
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               onChange={handleChange}
//               required
//             />
//             <label>Message</label>
//             <textarea
//               name="message"
//               placeholder="Your message"
//               onChange={handleChange}
//               required
//             ></textarea>
//             <button type="submit">Send</button>
//           </form>

//           <div className="contact-info">
//             <div className="info-block">
//               <img src={USA} alt="Location" className="icon-img" />
//               <div>
//                 <h3>Head Office (USA)</h3>
//                 <p>
//                   4640 Melody Dr Unit C<br />
//                   Concord, California 94521
//                   <br />
//                   United States
//                 </p>
//                 <p>📞 +1 (415) 619 4657</p>
//               </div>
//             </div>

//             <div className="info-block">
//               <img src={India} alt="Location" className="icon-img" />
//               <div>
//                 <h3>Branch Office (India)</h3>
//                 <p>
//                   #299, 3rd floor, Amber,
//                   <br />
//                   HBCS Layout, Vayalikaval, Nagawara,
//                   <br />
//                   Bangalore - 560045
//                 </p>
//                 <p>📞 +91 7022280365</p>
//               </div>
//             </div>
//             <div className="info-block">
//               <img src={India} alt="Location" className="icon-img" />
//               <div>
//                 <h3>Mumbai Office (india)</h3>
//                 <p>
//                   Shop No. 7, Guxu Arjun Apartments,
//                   <br />
//                   Gujjar Lane, S. Road, Opp RAAS,
//                   <br />
//                   Santacruz (W), Mumbai - 400054
//                 </p>
//                 <p>📞 +91 9820252529</p>
//               </div>
//             </div>

//             <div className="info-block">
//               <img src={India} alt="Location" className="icon-img" />
//               <div>
//                 <h3>Chennai Office (India)</h3>
//                 <p>
//                   CHN Technologies Private Limited
//                   <br />
//                   New No. 70 / Old No.2 Main Road,
//                   <br />
//                   CIT Nagar, Nandhanam Extension,
//                   <br />
//                   Chennai - 600035, India
//                 </p>
//                 <p>📞 +91 9789841336</p>
//               </div>
//             </div>

//             <div className="info-block">
//               <h4>Email</h4>
//               <p>info@cloudisian.net</p>
//             </div>

//             <div className="info-block">
//               <h4>Website</h4>
//               <p>
//                 <a
//                   href="http://www.cloudisian.net"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   www.cloudisian.net
//                 </a>
//               </p>
//             </div>

//             <div className="info-block">
//               <h4>Social Media</h4>
//               <div className="social-icons">
//                 <img src={Facebook} alt="Facebook" className="social-icon" />
//                 <img src={Twitter} alt="Twitter" className="social-icon" />
//                 <a href="https://www.linkedin.com/company/cloudisian/posts/?feedView=all">
//                   <img src={Linkedin} alt="LinkedIn" className="social-icon" />
//                 </a>
//                 <img src={Instagram} alt="Instagram" className="social-icon" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContactPage;


import React from "react";
import "./contact.css";
import Facebook from "../../Images/facebook.png";
import Linkedin from "../../Images/linkedin.png";
import Instagram from "../../Images/instagram.png";
import Twitter from "../../Images/twitter.png";
import USA from "../../Images/flag.png";
import India from "../../Images/world.png";


const ContactPage = () => {
  

  return (
    <div className="contact-container">
      <main className="contact-main">
        <div className="contact-content">
          <form className="contact-form" 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK000004ayct"
      method="POST" >
        <input type="hidden" name="oid" value="00DgK000004ayct" />
      <input type="hidden" name="retURL" value="http://" />
            <h2>Contact Form</h2>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              maxLength="40"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              maxLength="80"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <div className="info-block">
              <img src={USA} alt="Location" className="icon-img" />
              <div>
                <h3>Head Office (USA)</h3>
                <p>
                  4640 Melody Dr Unit C<br />
                  Concord, California 94521
                  <br />
                  United States
                </p>
                <p>📞 +1 (415) 619 4657</p>
              </div>
            </div>

            <div className="info-block">
              <img src={India} alt="Location" className="icon-img" />
              <div>
                <h3>Branch Office (India)</h3>
                <p>
                  #299, 3rd floor, Amber,
                  <br />
                  HBCS Layout, Vayalikaval, Nagawara,
                  <br />
                  Bangalore - 560045
                </p>
                <p>📞 +91 7022280365</p>
              </div>
            </div>
            <div className="info-block">
              <img src={India} alt="Location" className="icon-img" />
              <div>
                <h3>Mumbai Office (india)</h3>
                <p>
                  Shop No. 7, Guxu Arjun Apartments,
                  <br />
                  Gujjar Lane, S. Road, Opp RAAS,
                  <br />
                  Santacruz (W), Mumbai - 400054
                </p>
                <p>📞 +91 9820252529</p>
              </div>
            </div>

            <div className="info-block">
              <img src={India} alt="Location" className="icon-img" />
              <div>
                <h3>Chennai Office (India)</h3>
                <p>
                  CHN Technologies Private Limited
                  <br />
                  New No. 70 / Old No.2 Main Road,
                  <br />
                  CIT Nagar, Nandhanam Extension,
                  <br />
                  Chennai - 600035, India
                </p>
                <p>📞 +91 9789841336</p>
              </div>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p>info@cloudisian.net</p>
            </div>

            <div className="info-block">
              <h4>Website</h4>
              <p>
                <a
                  href="http://www.cloudisian.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cloudisian.net
                </a>
              </p>
            </div>

            <div className="info-block">
              <h4>Social Media</h4>
              <div className="social-icons">
                <img src={Facebook} alt="Facebook" className="social-icon" />
                <img src={Twitter} alt="Twitter" className="social-icon" />
                <a href="https://www.linkedin.com/company/cloudisian/posts/?feedView=all">
                  <img src={Linkedin} alt="LinkedIn" className="social-icon" />
                </a>
                <img src={Instagram} alt="Instagram" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
