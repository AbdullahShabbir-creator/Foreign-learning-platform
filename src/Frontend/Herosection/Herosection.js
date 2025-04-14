import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add animation classes after component mount for staggered effect
    const animatedElements = document.querySelectorAll('.hero-animated');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
        element.style.opacity = 1;
      }, 300 * index);
    });

    // Animate background gradient
    const heroBg = document.querySelector('.hero-bg-gradient');
    if (heroBg) {
      heroBg.style.opacity = 1;
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="hero-section position-relative overflow-hidden" style={{ minHeight: "100vh", paddingTop: "80px" }}>
      {/* Background gradient animation */}
      <div 
        className="hero-bg-gradient position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: "linear-gradient(135deg, #4361ee 0%, #3a0ca3 50%, #7209b7 100%)",
          opacity: 0,
          transition: "opacity 1.5s ease-in-out",
          zIndex: -1
        }}
      ></div>

      {/* Animated shapes */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ overflow: "hidden", zIndex: -1 }}>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1, paddingTop: "8px", paddingBottom: "80px" }}>
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            <h1 
              className="display-3 fw-bold hero-animated" 
              style={{ opacity: 0, fontFamily: "Poppins" }}
            >
              Master Languages With Interactive Learning
            </h1>
            
            <div 
              className="hero-animated" 
              style={{ opacity: 0, height: "5px", width: "100px", background: "#f72585", marginTop: "1.5rem", marginBottom: "1.5rem", borderRadius: "9999px" }}
            ></div>
            
            <p 
              className="lead hero-animated" 
              style={{ opacity: 0, fontSize: "1.2rem", marginBottom: "2rem" }}
            >
              Learn IELTS, German & Chinese through our immersive courses, featuring interactive lessons, practice exams, and personalized learning pathways.
            </p>
            
            <div className="d-flex flex-wrap gap-3 hero-animated" style={{ opacity: 0 }}>
              <button 
                className="btn btn-lg btn-light text-primary shadow-lg" 
                onClick={() => navigate("/")}
                style={{ 
                  borderRadius: "var(--border-radius-full)",
                  fontWeight: "600",
                  padding: "0.8rem 2rem",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0px)"}
              >
                <i className="bi bi-rocket me-2"></i>
                Get Started Free
              </button>
              
              <button 
                className="btn btn-lg btn-outline" 
                onClick={() => navigate("/")}
                style={{ 
                  borderRadius: "var(--border-radius-full)",
                  fontWeight: "600",
                  padding: "0.8rem 2rem",
                  color: "white",
                  borderColor: "white",
                  transition: "all 0.3s ease",
                  display:"none"
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0px)"}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </button>
            </div>
            
            <div className="mt-5 d-flex align-items-center gap-4 hero-animated" style={{ opacity: 0 }}>
              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", boxShadow: "var(--shadow-md)" }}>
                    <i className="bi bi-translate fs-5"></i>
                  </div>
                </div>
                <div className="ms-2">
                  <span className="d-block fw-bold">10+ Languages</span>
                  <span className="d-block small">Coming Soon</span>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", boxShadow: "var(--shadow-md)" }}>
                    <i className="bi bi-mortarboard fs-5"></i>
                  </div>
                </div>
                <div className="ms-2">
                  <span className="d-block fw-bold">100+ Lessons</span>
                  <span className="d-block small">Expertly Crafted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with glass effect */}
          <div className="col-lg-6 hero-animated" style={{ opacity: 0 }}>
            <div className="position-relative">
              {/* Decorative elements */}
              <div 
                className="position-absolute" 
                style={{
                  top: "-20px",
                  right: "20px",
                  width: "160px",
                  height: "160px",
                  background: "linear-gradient(45deg, #4cc9f0, transparent)",
                  borderRadius: "20px",
                  transform: "rotate(30deg)",
                  zIndex: -1,
                  animation: "float 6s ease-in-out infinite",
                }}
              ></div>
              
              <div 
                className="position-absolute" 
                style={{
                  bottom: "30px",
                  left: "-30px",
                  width: "120px",
                  height: "120px",
                  background: "linear-gradient(45deg, #f72585, transparent)",
                  borderRadius: "50%",
                  zIndex: -1,
                  animation: "float 5s ease-in-out infinite 1s",
                }}
              ></div>
              
              {/* Main image */}
              <div className="glass-card p-3" style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img
                  src="https://img.freepik.com/free-vector/language-learning-concept-illustration_114360-6609.jpg?w=900&t=st=1681684396~exp=1681684996~hmac=bca6d19e38441c0f2ed35caf203ee90ee38c8325d542a5b7cd582752ef5c45fb"
                  alt="Language Learning"
                  className="img-fluid rounded"
                  style={{
                    transform: "scale(1.05)",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1.05)"}
                />
              </div>
              
              {/* Floating badges */}
              <div 
                className="position-absolute bg-white text-dark py-2 px-3 rounded-pill shadow-lg d-flex align-items-center"
                style={{ 
                  top: "10%", 
                  right: "-10px",
                  animation: "float 4s ease-in-out infinite 0.5s",
                  zIndex: 2
                }}
              >
                <i className="bi bi-trophy-fill text-warning me-2"></i>
                <span className="fw-bold">IELTS Certified</span>
              </div>
              
              <div 
                className="position-absolute bg-white text-dark py-2 px-3 rounded-pill shadow-lg d-flex align-items-center"
                style={{ 
                  bottom: "15%", 
                  left: "-10px",
                  animation: "float 4s ease-in-out infinite 1.5s",
                  zIndex: 2
                }}
              >
                <i className="bi bi-headset text-success me-2"></i>
                <span className="fw-bold">Live Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="position-absolute bottom-0 start-0 w-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
