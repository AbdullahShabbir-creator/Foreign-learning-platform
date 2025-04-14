import React from "react";
import { Link } from "react-router-dom";
import "../../../../App.css";
import "../../../../index.css";

const GermanPracticeTest = () => {
  // German language practice test sections
  const testSections = [
    {
      id: 1,
      title: "Leseverständnis (Reading Comprehension)",
      description: "Lese Texte in verschiedenen Stilen und beantworte Fragen zum Verständnis.",
      image: "https://img.freepik.com/free-vector/reading-books-concept_1284-18081.jpg",
      icon: "bi-book",
      color: "#4361ee",
      link: "/german/practice-tests/reading"
    },
    {
      id: 2,
      title: "Hörverständnis (Listening Comprehension)",
      description: "Höre verschiedene Texttypen und beantworte Fragen zum Gehörten.",
      image: "https://img.freepik.com/free-vector/online-education-concept_1284-18082.jpg",
      icon: "bi-headphones",
      color: "#3a0ca3",
      link: "/german/practice-tests/listening"
    },
    {
      id: 3,
      title: "Schreiben (Writing)",
      description: "Übe verschiedene Textsorten zu schreiben und erhalte Feedback.",
      image: "https://img.freepik.com/free-vector/businessman-working-laptop_74855-10743.jpg",
      icon: "bi-pencil",
      color: "#7209b7",
      link: "/german/practice-tests/writing"
    },
    {
      id: 4,
      title: "Sprechen (Speaking)",
      description: "Übe gesprochene Deutsch durch Simulationen von Gesprächen.",
      image: "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration_88138-430.jpg",
      icon: "bi-mic",
      color: "#f72585",
      link: "/german/practice-tests/speaking"
    },
    {
      id: 5,
      title: "Vokabeln (Vocabulary)",
      description: "Übe wichtige Vokabeln und ihre Anwendungen.",
      image: "https://img.freepik.com/free-vector/word-cloud-concept_1284-18083.jpg",
      icon: "bi-tags",
      color: "#b5179e",
      link: "/german/practice-tests/vocabulary"
    },
    {
      id: 6,
      title: "Grammatik (Grammar)",
      description: "Übe wichtige grammatische Konzepte und Strukturen.",
      image: "https://img.freepik.com/free-vector/education-concept_1284-18084.jpg",
      icon: "bi-diagram-3",
      color: "#6c5ce7",
      link: "/german/practice-tests/grammar"
    }
  ];

  return (
    <div className="practice-tests-container animate-fade-in" style={{ marginTop: "80px" }}>
      {/* Header section with wave background */}
      <div className="position-relative overflow-hidden bg-gradient-primary text-white py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-slide-up">
              <h1 className="display-4 fw-bold" style={{ fontFamily: "Poppins" }}>Deutsch Übungen</h1>
              <div style={{ height: "5px", width: "100px", background: "#f72585", marginTop: "1.5rem", marginBottom: "1.5rem", borderRadius: "9999px" }}></div>
              <p className="lead">Verbessere deine Deutschkenntnisse mit unseren interaktiven Übungen.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#test-modules" className="btn btn-light text-primary">
                  <i className="bi bi-chevron-down me-2"></i>
                  Übungen ansehen
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="glass-card p-3 mt-4 animate-slide-right">
                <img 
                  src="https://img.freepik.com/free-vector/german-language-concept_1284-18085.jpg"
                  alt="German Practice" 
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
          <h2 className="fw-bold">Übungsmodule</h2>
          <p className="text-muted">Wähle ein Übungsmodule aus, um zu beginnen</p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testSections.map((section) => (
            <div key={section.id} className="col stagger-item stagger-item-visible" style={{ transitionDelay: `${section.id * 0.1}s` }}>
              <div className="card h-100 card-hover border-0 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={section.image} 
                      className="img-fluid rounded-start h-100" 
                      alt={section.title}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="feature-icon me-3" 
                          style={{ 
                            background: section.color,
                            width: "50px",
                            height: "50px"
                          }}
                        >
                          <i className={`bi ${section.icon}`}></i>
                        </div>
                        <h5 className="card-title m-0">{section.title}</h5>
                      </div>
                      <p className="card-text mb-4">{section.description}</p>
                      <Link 
                        to={section.link} 
                        className="btn btn-primary mt-auto"
                        style={{ 
                          background: section.color,
                          borderColor: section.color,
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
                        Übung starten <i className="bi bi-arrow-right ms-2"></i>
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
            <h2 className="fw-bold">Warum mit uns üben?</h2>
            <p className="text-muted">Verbessere deine Deutschkenntnisse mit unseren spezialisierten Funktionen</p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col stagger-item stagger-item-visible">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h5>Interaktive Übungen</h5>
                <p className="text-muted">Engagierende Übungen für alle Sprachkompetenzen.</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-1">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h5>Fortschrittsverfolgung</h5>
                <p className="text-muted">Verfolge deinen Lernfortschritt und identifiziere Verbesserungsmöglichkeiten.</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-2">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5>Tipps & Strategien</h5>
                <p className="text-muted">Erhalte wertvolle Tipps und Techniken von Deutschlehrern.</p>
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
                <h3 className="fw-bold mb-3">Bereit, dein Deutsch zu verbessern?</h3>
                <p className="mb-4">Starte mit unseren Übungen und verfolge deinen Fortschritt.</p>
                <Link to="/signup" className="btn btn-lg btn-primary px-5 py-3">
                  Kostenlos starten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanPracticeTest;
