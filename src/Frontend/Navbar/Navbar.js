import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import "../styles/main.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

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

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const handleProtectedRoute = (path) => {
    if (!isAuthenticated) {
      // Store the current path as intended path
      const currentPath = window.location.pathname;
      localStorage.setItem('intendedPath', currentPath);
      navigate('/login');
      return;
    }
    navigate(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-dark bg-gradient-primary shadow-lg' : 'navbar-light bg-transparent'} fixed-top transition-all`} 
         style={{ 
           transition: "all 0.3s ease",
           padding: scrolled ? "0.5rem 0" : "1rem 0",
           zIndex: 1030
         }}>
      <div className="container">
        <Link className={`navbar-brand fw-bold ${scrolled ? 'text-white' : 'text-gradient text-gradient-primary'}`} to="/" style={{ fontSize: "1.5rem" }}>
          <i className="bi bi-globe2 me-2"></i>
          <span style={{ fontFamily: "Poppins" }}>LinguaLeap</span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-1">
              <Link 
                className={`nav-link px-3 py-2 ${isActive('/') ? 'active fw-semibold' : ''}`} 
                to="/"
                style={{ borderRadius: "var(--border-radius-md)" }}
              >
                <i className="bi bi-house me-1"></i> Home
              </Link>
            </li>

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
                  <a 
                    className={`dropdown-item py-2 ${isActive('/ielts') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/ielts')}
                  >
                    <i className="bi bi-trophy me-2"></i> IELTS
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/german') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/german')}
                  >
                    <i className="bi bi-geo me-2"></i> German
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/chinese') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/chinese')}
                  >
                    <i className="bi bi-translate me-2"></i> Chinese
                  </a>
                </li>
              </ul>
            </li>

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
                  <a 
                    className={`dropdown-item py-2 ${isActive('/practice-tests') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/practice-tests')}
                  >
                    <i className="bi bi-grid-3x3-gap me-2"></i> All Tests
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/listening') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/practice-tests/listening')}
                  >
                    <i className="bi bi-headphones me-2"></i> Listening Test
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/reading') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/practice-tests/reading')}
                  >
                    <i className="bi bi-book me-2"></i> Reading Test
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/writing') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/practice-tests/writing')}
                  >
                    <i className="bi bi-pencil me-2"></i> Writing Test
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item py-2 ${isActive('/practice-tests/speaking') ? 'active bg-light' : ''}`} 
                    href="#"
                    onClick={() => handleProtectedRoute('/practice-tests/speaking')}
                  >
                    <i className="bi bi-mic me-2"></i> Speaking Test
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-1">
              <Link 
                className="nav-link px-3 py-2" 
                to="/recommendations"
                style={{ borderRadius: "var(--border-radius-md)" }}
              >
                <i className="bi bi-lightbulb me-1"></i> Recommendations
              </Link>
            </li>
          </ul>

          <div className="d-flex mt-3 mt-lg-0">
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/login" 
                  className={`btn ${scrolled ? 'btn-light text-primary' : 'btn-outline-primary'} me-2`} 
                  style={{ whiteSpace: "nowrap" }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Store the current path as intended path
                    const currentPath = window.location.pathname;
                    localStorage.setItem('intendedPath', currentPath);
                    window.location.href = '/login';
                  }}
                >
                  <i className="bi bi-box-arrow-in-right me-1"></i> Login
                </Link>
                <Link 
                  to="/signup" 
                  className={`btn ${scrolled ? 'btn-light text-primary' : 'btn-primary'}`} 
                  style={{ whiteSpace: "nowrap" }}
                >
                  <i className="bi bi-person-plus me-1"></i> Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="dropdown">
                  <button
                    className={`btn ${scrolled ? 'btn-light text-primary' : 'btn-outline-primary'} dropdown-toggle me-2`}
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-1"></i>
                    {user?.name || 'Profile'}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li>
                      <Link className="dropdown-item" to="/dashboard/profile">
                        <i className="bi bi-person me-2"></i> Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/dashboard/progress">
                        <i className="bi bi-graph-up me-2"></i> Progress
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
