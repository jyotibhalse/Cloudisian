import React, { useState } from 'react';
import './Rnd.css';
import FeatureSlider from '../../Components/slider/slider';
const RnDPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const articles = [
    {
      title: 'The Future of Online Education',
      excerpt: 'Explore how AI and virtual classrooms are revolutionizing learning. Discover trends in adaptive learning platforms and immersive technology.',
      link: '#',
    },
    {
      title: 'Real-World Skills from Internships',
      excerpt: 'Bridging the gap between classroom and corporate world. Learn about mentorship programs and hands-on projects that enhance career readiness.',
      link: '#',
    },
    {
      title: 'Recruitment Analytics in HR',
      excerpt: 'How data is used to improve hiring success rates. Dive into predictive analytics, candidate scoring, and bias reduction techniques.',
      link: '#',
    },
    {
      title: 'Research-Based Training Models',
      excerpt: 'Building training plans through solid research. Understand evidence-based approaches and their impact on employee performance.',
      link: '#',
    },
  ];

  return (
    <div className="rnd-container">
      <header className="rnd-header">
        <div className="rnd-header-text">
          <h1>🔬 Research & Development (R&D)</h1>
          <p>
            Innovating in Education, Training, Internships, and Recruitment through Data-Driven Research. Our focus lies in integrating
            the latest technologies and methodologies to continuously improve learning outcomes and workforce preparedness.
          </p>
          <button onClick={() => setOpenModal(true)}>💡 Join Our Journey</button>
        </div>
        <div className="rnd-header-image" />
      </header>

      <section className="rnd-features">
        <Card
          icon="📘"
          title="Educational Research"
          desc="Emerging tech & methods to make learning effective. Our studies include virtual reality in classrooms, AI tutoring systems, and cognitive science breakthroughs to personalize education for diverse learners."
        />
        <Card
          icon="🛠️"
          title="Training Innovation"
          desc="Creating skill-based, job-ready training programs. We design modular, competency-driven curriculums and utilize simulations to ensure practical skill mastery and adaptability in fast-changing industries."
        />
        <Card
          icon="🤝"
          title="Collaborations"
          desc="Work with institutes & industries to solve real problems. By partnering with academic bodies, businesses, and NGOs, we foster environments that encourage innovation and practical problem solving."
        />
        <Card
          icon="📊"
          title="Data Insights"
          desc="Using analytics to improve decision-making in education. Our data scientists analyze trends, learner behaviors, and outcomes to guide strategic planning and improve program effectiveness."
        />
      </section>

      <section className="rnd-articles">
        <h2>📝 Latest Research & Blogs</h2>
        <div className="rnd-article-grid">
          {articles.map((item, index) => (
            <div key={index} className="rnd-article-card">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={item.link}>Read more</a>
            </div>
          ))}
        </div>
      </section>

      {openModal && (
        <div className="rnd-modal-overlay">
          <div className="rnd-modal">
            <h3>🚀 Let's Collaborate</h3>
            <p>Share your ideas and work with us on innovative R&D. Together, we can shape the future of education and workforce development through collaborative projects and shared expertise.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" />
              <button type="submit">Send Message</button>
              <span onClick={() => setOpenModal(false)}>Cancel</span>
            </form>
          </div>
        </div>
      )}
      <section class="rnd-features" aria-label="R&D Features">
  <div class="rnd-card">
    <h2>Advanced AI Algorithms</h2>
    <p>Developing next-gen AI models that improve automation and predictive accuracy across industries.</p>
  </div>
  <div class="rnd-card">
    <h2>Quantum Computing Research</h2>
    <p>Exploring quantum algorithms to solve complex problems faster than traditional computers.</p>
  </div>
  <div class="rnd-card">
    <h2>Sustainable Technologies</h2>
    <p>Innovating green solutions to reduce environmental impact and promote renewable energy.</p>
  </div>
  <div class="rnd-card">
    <h2>Biomedical Engineering</h2>
    <p>Creating cutting-edge medical devices and diagnostics to enhance patient care and outcomes.</p>
  </div>
</section>
<FeatureSlider items={[
  { icon: "🎓", title: "Educational Research", desc: "Emerging tech & methods to make learning effective." },
  { icon: "⚙️", title: "Training Innovation", desc: "Creating skill-based, job-ready training programs." },
  { icon: "🤝🏽", title: "Collaborations", desc: "Work with institutes & industries to solve real problems." },
  { icon: "📈", title: "Data Insights", desc: "Using analytics to improve decision-making in education." },
  { icon: "🌍", title: "Global Outreach", desc: "Expanding research impact through international partnerships." },
  { icon: "✨", title: "Innovative Solutions", desc: "Developing creative approaches to complex educational challenges." },
  { icon: "🔬", title: "Cutting-edge Labs", desc: "Hands-on experimentation with latest technologies." },
  { icon: "📊", title: "Performance Metrics", desc: "Measuring success with detailed analytics and reporting." },
]} />



    </div>
  );
};

const Card = ({ icon, title, desc }) => (
  <div className="rnd-card">
    <h2>{icon} {title}</h2>
    <p>{desc}</p>
  </div>
);

export default RnDPage;
