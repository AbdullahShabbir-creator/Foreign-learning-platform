import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if the path is active - using window.location instead of useLocation
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-dark bg-gradient-primary shadow-lg' : 'navbar-light bg-transparent'} fixed-top transition-all`} 
         style={{ 
           transition: "all 0.3s ease",
           padding: scrolled ? "0.5rem 0" : "1rem 0",
           zIndex: 1030
         }}>
      <div className="container">
        {/* Left Side - Logo */}
        <Link className={`navbar-brand fw-bold ${scrolled ? 'text-white' : 'text-gradient text-gradient-primary'}`} to="/" style={{ fontSize: "1.5rem" }}>
          <i className="bi bi-globe2 me-2"></i>
          <span style={{ fontFamily: "Poppins" }}>LinguaLeap</span>
        </Link>

        {/* Navbar Toggle (For Mobile View) */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Modules */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Home */}
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 py-2 ${isActive('/') ? 'active fw-semibold' : ''}`} 
                to="/"
                style={{ borderRadius: "var(--border-radius-md)" }}
              >
                <i className="bi bi-house me-1"></i> Home
              </Link>
            </li>

            {/* Course Content Dropdown */}
            <li className="nav-item dropdown mx-1">
              <a
                className="nav-link dropdown-toggle px-3 py-2"
                href="#"
                id="courseDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "var(--border-radius-md)" }}
              >
                <i className="bi bi-book me-1"></i> Courses
              </a>
              <ul className="dropdown-menu shadow border-0" style={{ borderRadius: "var(--border-radius-md)", overflow: "hidden" }}>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/ielts') ? 'active bg-light' : ''}`} 
                    to="/ielts"
                  >
                    <i className="bi bi-trophy me-2"></i> IELTS
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/german') ? 'active bg-light' : ''}`} 
                    to="/german"
                  >
                    <i className="bi bi-geo me-2"></i> German
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/chinese') ? 'active bg-light' : ''}`} 
                    to="/chinese"
                  >
                    <i className="bi bi-translate me-2"></i> Chinese
                  </Link>
                </li>
              </ul>
            </li>

            {/* Exam Test Practice Dropdown */}
            <li className="nav-item dropdown mx-1">
              <a
                className={`nav-link dropdown-toggle px-3 py-2 ${window.location.pathname.includes('/practice-tests') ? 'active fw-semibold' : ''}`}
                href="#"
                id="examDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "var(--border-radius-md)" }}
              >
                <i className="bi bi-journal-check me-1"></i> Practice Tests
              </a>
              <ul className="dropdown-menu shadow border-0" style={{ borderRadius: "var(--border-radius-md)", overflow: "hidden" }}>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/practice-tests') ? 'active bg-light' : ''}`} 
                    to="/practice-tests"
                  >
                    <i className="bi bi-grid-3x3-gap me-2"></i> All Tests
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/listening') ? 'active bg-light' : ''}`} 
                    to="/practice-tests/listening"
                  >
                    <i className="bi bi-headphones me-2"></i> Listening Test
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/reading') ? 'active bg-light' : ''}`} 
                    to="/practice-tests/reading"
                  >
                    <i className="bi bi-book me-2"></i> Reading Test
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/writing') ? 'active bg-light' : ''}`} 
                    to="/practice-tests/writing"
                  >
                    <i className="bi bi-pencil me-2"></i> Writing Test
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/speaking') ? 'active bg-light' : ''}`} 
                    to="/practice-tests/speaking"
                  >
                    <i className="bi bi-mic me-2"></i> Speaking Test
                  </Link>
                </li>
              </ul>
            </li>

            {/* Recommendations */}
            <li className="nav-item mx-1">
              <Link className="nav-link px-3 py-2" to="/recommendations" style={{ borderRadius: "var(--border-radius-md)" }}>
                <i className="bi bi-lightbulb me-1"></i> Recommendations
              </Link>
            </li>
          </ul>

          {/* Right Side - Account Controls */}
          <div className="d-flex mt-3 mt-lg-0">
            <Link to="/login" className={`btn ${scrolled ? 'btn-light text-primary' : 'btn-outline-primary'} me-2`} style={{ whiteSpace: "nowrap" }}>
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </Link>
            <Link to="/signup" className={`btn ${scrolled ? 'btn-light text-primary' : 'btn-primary'}`} style={{ whiteSpace: "nowrap" }}>
              <i className="bi bi-person-plus me-1"></i> Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
