import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const PracticeTestsIndex = () => {
  // Test types with descriptions and images
  const testTypes = [
    {
      id: 1,
      title: "Listening Test",
      description: "Practice your ability to understand spoken English in a variety of contexts. The test includes four sections with increasing difficulty.",
      image: "https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg",
      icon: "bi-headphones",
      color: "#4361ee",
      link: "/practice-tests/listening"
    },
    {
      id: 2,
      title: "Reading Test",
      description: "Improve your ability to read and understand academic texts. The test includes three passages with a total of 40 questions.",
      image: "https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg",
      icon: "bi-book",
      color: "#3a0ca3",
      link: "/practice-tests/reading"
    },
    {
      id: 3,
      title: "Writing Test",
      description: "Develop your written English skills by practicing Task 1 (report writing) and Task 2 (essay writing) with detailed guidance.",
      image: "https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary_74855-10743.jpg",
      icon: "bi-pencil",
      color: "#7209b7",
      link: "/practice-tests/writing"
    },
    {
      id: 4,
      title: "Speaking Test",
      description: "Enhance your spoken English through simulated interviews covering personal topics, presentations, and discussions.",
      image: "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration_88138-430.jpg",
      icon: "bi-mic",
      color: "#f72585",
      link: "/practice-tests/speaking"
    }
  ];

  return (
    <div className="practice-tests-container animate-fade-in" style={{ marginTop: "80px" }}>
      {/* Header section with wave background */}
      <div className="position-relative overflow-hidden bg-gradient-primary text-white py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-slide-up">
              <h1 className="display-4 fw-bold" style={{ fontFamily: "Poppins" }}>IELTS Practice Tests</h1>
              <div style={{ height: "5px", width: "100px", background: "#f72585", marginTop: "1.5rem", marginBottom: "1.5rem", borderRadius: "9999px" }}></div>
              <p className="lead">Prepare for success with our comprehensive practice tests designed to simulate the real IELTS exam experience.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#test-modules" className="btn btn-light text-primary">
                  <i className="bi bi-chevron-down me-2"></i>
                  Explore Tests
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="glass-card p-3 mt-4 animate-slide-right">
                <img 
                  src="https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg"
                  alt="IELTS Practice" 
                  className="img-fluid rounded"
                  style={{ transform: "scale(1.05)" }}
                />
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
      </div>

      {/* Test modules section */}
      <div className="container mb-5" id="test-modules">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Practice Test Modules</h2>
          <p className="text-muted">Choose a test module to begin your practice session</p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {testTypes.map((test, index) => (
            <div key={test.id} className="col stagger-item stagger-item-visible" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="card h-100 card-hover border-0 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={test.image} 
                      className="img-fluid rounded-start h-100" 
                      alt={test.title}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="feature-icon me-3" 
                          style={{ 
                            background: test.color,
                            width: "50px",
                            height: "50px"
                          }}
                        >
                          <i className={`bi ${test.icon}`}></i>
                        </div>
                        <h5 className="card-title m-0">{test.title}</h5>
                      </div>
                      <p className="card-text mb-4">{test.description}</p>
                      <Link 
                        to={test.link} 
                        className="btn btn-primary mt-auto"
                        style={{ 
                          background: test.color,
                          borderColor: test.color,
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        Start Test <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Practice with Us?</h2>
            <p className="text-muted">Enhance your IELTS preparation experience with our specialized features</p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col stagger-item stagger-item-visible">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h5>Realistic Test Experience</h5>
                <p className="text-muted">Our practice tests simulate the real IELTS exam format, timing, and question types.</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-1">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h5>Performance Tracking</h5>
                <p className="text-muted">Monitor your progress with detailed analytics and identify areas for improvement.</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-2">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5>Expert Tips & Strategies</h5>
                <p className="text-muted">Get valuable insights and techniques from IELTS experts to maximize your score.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 glass-card">
              <div className="card-body p-5 text-center">
                <h3 className="fw-bold mb-3">Ready to boost your IELTS score?</h3>
                <p className="mb-4">Start practicing with our comprehensive test modules and track your improvement over time.</p>
                <Link to="/signup" className="btn btn-lg btn-primary px-5 py-3">
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTestsIndex;
