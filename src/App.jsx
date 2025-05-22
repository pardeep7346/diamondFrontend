import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CourseMarquee from './components/CourseMarquee'
import WhyUs from './components/WhyUs'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import Footer from './components/Footer'
import UserDashboard from './components/UserDashboard'
import ProtectedRoute from './hooks/ProtectedRoute'
import Certifications from './components/Certifications'
import AllCourses from './components/AllCourses'
const App = () => {
  return (
    <Router>
      <div className='bg-zinc-950 min-h-screen text-white m-0 p-0 '>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CourseMarquee />
              <WhyUs />
              <Certifications/>
              <ContactUs />
            </>
          } />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/user" element={<ProtectedRoute element={UserDashboard} />} />
        <Route path="/admin" element={<ProtectedRoute element={AdminDashboard} />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App