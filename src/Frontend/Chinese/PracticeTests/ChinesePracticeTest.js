import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const ChinesePracticeTest = () => {
  // Chinese language practice test sections
  const testSections = [
    {
      id: 1,
      title: "阅读理解 (Reading Comprehension)",
      description: "阅读不同类型的中文文本并回答理解问题。", // Read different types of Chinese texts and answer comprehension questions
      image: "https://img.freepik.com/free-vector/reading-books-concept_1284-18081.jpg",
      icon: "bi-book",
      color: "#4361ee",
      link: "/chinese/practice-tests/reading"
    },
    {
      id: 2,
      title: "听力理解 (Listening Comprehension)",
      description: "听不同类型的对话和短文并回答问题。", // Listen to different types of dialogues and passages and answer questions
      image: "https://img.freepik.com/free-vector/online-education-concept_1284-18082.jpg",
      icon: "bi-headphones",
      color: "#3a0ca3",
      link: "/chinese/practice-tests/listening"
    },
    {
      id: 3,
      title: "写作 (Writing)",
      description: "练习写作不同类型的中文文本。", // Practice writing different types of Chinese texts
      image: "https://img.freepik.com/free-vector/businessman-working-laptop_74855-10743.jpg",
      icon: "bi-pencil",
      color: "#7209b7",
      link: "/chinese/practice-tests/writing"
    },
    {
      id: 4,
      title: "口语 (Speaking)",
      description: "通过模拟对话练习口语表达。", // Practice oral expression through simulated dialogues
      image: "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration_88138-430.jpg",
      icon: "bi-mic",
      color: "#f72585",
      link: "/chinese/practice-tests/speaking"
    },
    {
      id: 5,
      title: "汉字 (Characters)",
      description: "练习汉字书写和认读。", // Practice character writing and recognition
      image: "https://img.freepik.com/free-vector/word-cloud-concept_1284-18083.jpg",
      icon: "bi-brush",
      color: "#b5179e",
      link: "/chinese/practice-tests/characters"
    },
    {
      id: 6,
      title: "语法 (Grammar)",
      description: "练习中文语法和句子结构。", // Practice Chinese grammar and sentence structure
      image: "https://img.freepik.com/free-vector/education-concept_1284-18084.jpg",
      icon: "bi-diagram-3",
      color: "#6c5ce7",
      link: "/chinese/practice-tests/grammar"
    }
  ];

  return (
    <div className="practice-tests-container animate-fade-in" style={{ marginTop: "80px" }}>
      {/* Header section with wave background */}
      <div className="position-relative overflow-hidden bg-gradient-primary text-white py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-slide-up">
              <h1 className="display-4 fw-bold" style={{ fontFamily: "Poppins" }}>中文练习</h1>
              <div style={{ height: "5px", width: "100px", background: "#f72585", marginTop: "1.5rem", marginBottom: "1.5rem", borderRadius: "9999px" }}></div>
              <p className="lead">通过我们的互动练习提高你的中文水平。</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#test-modules" className="btn btn-light text-primary">
                  <i className="bi bi-chevron-down me-2"></i>
                  查看练习
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="glass-card p-3 mt-4 animate-slide-right">
                <img 
                  src="https://img.freepik.com/free-vector/chinese-language-concept_1284-18086.jpg"
                  alt="Chinese Practice" 
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
          <h2 className="fw-bold">练习模块</h2>
          <p className="text-muted">选择一个练习模块开始</p>
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
                        开始练习 <i className="bi bi-arrow-right ms-2"></i>
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
            <h2 className="fw-bold">为什么选择我们？</h2>
            <p className="text-muted">通过我们的专业功能提升你的中文学习体验</p>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col stagger-item stagger-item-visible">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h5>互动练习</h5>
                <p className="text-muted">针对所有语言技能的互动练习。</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-1">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h5>进度追踪</h5>
                <p className="text-muted">追踪学习进度并识别改进空间。</p>
              </div>
            </div>
            
            <div className="col stagger-item stagger-item-visible stagger-delay-2">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5>技巧与策略</h5>
                <p className="text-muted">获得中文教师的宝贵建议和技术。</p>
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
                <h3 className="fw-bold mb-3">准备好提升你的中文水平了吗？</h3>
                <p className="mb-4">通过我们的练习开始学习并追踪你的进步。</p>
                <Link to="/signup" className="btn btn-lg btn-primary px-5 py-3">
                  免费开始
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinesePracticeTest;
