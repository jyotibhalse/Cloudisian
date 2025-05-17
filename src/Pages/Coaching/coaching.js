import React, { useState, useMemo } from "react";
import './coaching.css';
import CompImage from '../../Images/comp.png';
import DevopsImage from '../../Images/devops.png';
import AwsImage from '../../Images/analysis.png';
import PythonImage from '../../Images/python.png';
import CyberImage from '../../Images/cyber-security.png';
import DataImage from '../../Images/big-data-analytics.png';
import WebImage from '../../Images/web.png';
import AiImage from '../../Images/ai.png';

const courses = [
  {
    title: "Introduction to Cloud Computing",
    description: "Learn the fundamentals of cloud computing and benefits.",
    lessons: 15,
    level: "Beginner",
    image: CompImage
  },
  {
    title: "DevOps Fundamentals",
    description: "Understand the core principles and practices of DevOps.",
    lessons: 20,
    level: "Beginner",
    image: DevopsImage
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Prepare for the AWS Solutions Architect certification exam.",
    lessons: 30,
    level: "Intermediate",
    image: AwsImage
  },
  {
    title: "Machine Learning with Python",
    description: "Explore machine learning concepts and techniques using Python.",
    lessons: 25,
    level: "Advanced",
    image: PythonImage
  },
  {
    title: "Cybersecurity Essentials",
    description: "Understand cybersecurity fundamentals, threats, and protection strategies.",
    lessons: 18,
    level: "Intermediate",
    image: CyberImage
  },
  {
    title: "Data Analysis with Excel",
    description: "Learn how to analyze and visualize data using Excel tools.",
    lessons: 12,
    level: "Beginner",
    image: DataImage
  },
  {
    title: "Full Stack Web Development",
    description: "Build modern web apps using HTML, CSS, JavaScript, and backend frameworks.",
    lessons: 40,
    level: "Advanced",
    image: WebImage
  },
  {
    title: "AI for Everyone",
    description: "An easy introduction to artificial intelligence and its real-world applications.",
    lessons: 10,
    level: "Beginner",
    image: AiImage
  },
  {
    title: "Introduction to Docker & Containers",
    description: "Understand containerization with Docker and its use in DevOps pipelines.",
    lessons: 14,
    level: "Beginner",
    image: DevopsImage
  },
  {
    title: "React.js for Web Development",
    description: "Learn how to build dynamic web apps with React.js.",
    lessons: 22,
    level: "Intermediate",
    image: WebImage
  },
  {
    title: "Kubernetes for Developers",
    description: "Master orchestration using Kubernetes in real-world scenarios.",
    lessons: 24,
    level: "Advanced",
    image: DevopsImage
  },
  {
    title: "Introduction to SQL & Databases",
    description: "Learn database basics and how to write SQL queries.",
    lessons: 16,
    level: "Beginner",
    image: DataImage
  },
  {
    title: "Google Cloud Platform (GCP) Fundamentals",
    description: "Explore core services of GCP and how to deploy apps on the cloud.",
    lessons: 18,
    level: "Intermediate",
    image: CompImage
  },
  {
    title: "Python for Data Science",
    description: "Use Python for data analysis, visualization, and machine learning.",
    lessons: 30,
    level: "Intermediate",
    image: PythonImage
  },
  {
    title: "Blockchain Basics",
    description: "Understand the foundations of blockchain technology and how it powers cryptocurrencies.",
    lessons: 12,
    level: "Beginner",
    image: CyberImage
  },
  {
    title: "Linux Command Line Essentials",
    description: "Master essential Linux commands for development and DevOps.",
    lessons: 14,
    level: "Beginner",
    image: DevopsImage
  },
  {
    title: "Java Programming Fundamentals",
    description: "Start coding in Java with object-oriented programming concepts.",
    lessons: 28,
    level: "Beginner",
    image: PythonImage
  },
  {
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and user experience design.",
    lessons: 15,
    level: "Beginner",
    image: WebImage
  },
  {
    title: "Ethical Hacking Basics",
    description: "Introduction to ethical hacking, penetration testing, and tools.",
    lessons: 20,
    level: "Intermediate",
    image: CyberImage
  },
  {
    title: "Power BI for Business Analytics",
    description: "Learn how to build insightful dashboards and reports using Power BI.",
    lessons: 18,
    level: "Intermediate",
    image: DataImage
  }
];



const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // e.g., 'title', 'lessons', 'level'
  const [filterLevel, setFilterLevel] = useState(""); // e.g., 'Beginner', 'Intermediate', 'Advanced'

  // Filtered, searched, and sorted courses
  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by level
    if (filterLevel) {
      filtered = filtered.filter(course => course.level === filterLevel);
    }

    // Search by title or description
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort logic
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "lessons") {
          return a.lessons - b.lessons;
        } else if (sortBy === "level") {
          // custom order for levels
          const order = { Beginner: 1, Intermediate: 2, Advanced: 3 };
          return order[a.level] - order[b.level];
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, sortBy, filterLevel]);
  return (
    <div className="Coaching">

      <div className="video-banner">
  <video autoPlay muted loop playsInline>
    <source src="./videos/vd4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="video-content">
    <h1>Empowering Careers with Real Training & Internships</h1>
    <button>Explore Courses</button>
  </div>
</div>
      <div className="controls">
  <input
    type="text"
    placeholder="Search courses..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="search-input1"
  />

  <select
    value={filterLevel}
    onChange={e => setFilterLevel(e.target.value)}
    className="filter-select1"
  >
    <option value="">All Levels</option>
    <option value="Beginner">Beginner</option>
    <option value="Intermediate">Intermediate</option>
    <option value="Advanced">Advanced</option>
  </select>

  <select
    value={sortBy}
    onChange={e => setSortBy(e.target.value)}
    className="sort-select1"
  >
    <option value="">Sort By</option>
    <option value="title">Title (A-Z)</option>
    <option value="lessons">Lessons (Few to Many)</option>
    <option value="level">Level (Easy to Hard)</option>
  </select>
</div>


      {/* Courses Grid */}
      <div className="course-grid1">
        {filteredCourses.map((course, id) => (
          <div key={id} className="course-card1">
            <div className="course-icon1">
              <img src={course.image} alt={course.title} className="course-img1" />
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta1">
              {course.lessons} lessons • {course.level}
            </div>
            <a href="/" className="enroll-btn1">Enroll</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage; 