import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Course from './Pages/Courses/course';
import  Login  from './Pages/Login/login';
import Contact from './Pages/contact/contact';
import './App.css';

function App() {
  return (
    <Router>
      {/* ------------Header-------------- */}
      <Header />

      {/* --------------Routes------------ */}

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>


    {/* -----------footer------------- */}
      <Footer />
    </Router>
  );
}

export default App;

