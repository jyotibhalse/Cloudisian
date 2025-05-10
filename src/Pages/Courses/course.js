import React from "react";
import './course.css';import CompImage from '../../Images/comp.png';
import DevopsImage from '../../Images/devops.png';
import AwsImage from '../../Images/analysis.png';
import PythonImage from '../../Images/python.png';

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
];


const CoursesPage = () => {
  return (
    <div className="courses-container1">
      {/* Header */}
      <header className="course-header-bar1">
        <h1 className="section-title">Courses</h1>
      </header>

      {/* Search & Filters */}
      <div className="filters-section1">
        <input
          type="text"
          placeholder="Search courses..."
          className="search-input1"
        />
        <div className="filter-options1">
          <select className="filter-select1">
            <option>Category</option>
            <option>Category1</option>
          </select>
          <button className="filter-btn1 active">All</button>
          <select className="filter-select1">
            <option>AI & Machine Learning</option>
            <option>DevOps</option>
          </select>
          <select className="filter-select1 sort-select1">
            <option>Sort by: Popularity</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="course-grid1">
        {courses.map((course, id) => (
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
