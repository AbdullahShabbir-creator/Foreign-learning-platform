import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const ChineseTestsIndex = () => {
  const testTypes = [
    {
      id: 1,
      title: "阅读理解 (Reading Test)",
      description: "通过阅读不同类型的中文文本并回答理解问题来提升你的阅读能力。",
      image: "https://img.freepik.com/free-vector/reading-books-concept_1284-18081.jpg",
      icon: "bi-book",
      color: "#4361ee",
      link: "/practice-tests/chinese/reading"
    },
    {
      id: 2,
      title: "听力理解 (Listening Test)",
      description: "通过听中文音频并完成相关任务来提升你的听力理解能力。",
      image: "https://img.freepik.com/free-vector/listening-concept-illustration_114360-1126.jpg",
      icon: "bi-headphones",
      color: "#3a0ca3",
      link: "/practice-tests/chinese/listening"
    },
    {
      id: 3,
      title: "写作 (Writing Test)",
      description: "通过有针对性的写作任务来提升你的中文写作能力。",
      image: "https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary_74855-10743.jpg",
      icon: "bi-pencil",
      color: "#7209b7",
      link: "/practice-tests/chinese/writing"
    },
    {
      id: 4,
      title: "口语 (Speaking Test)",
      description: "通过模拟对话和表达任务来提升你的中文口语能力。",
      image: "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration_88138-430.jpg",
      icon: "bi-mic",
      color: "#f72585",
      link: "/practice-tests/chinese/speaking"
    }
  ];

  return (
     <div className="out">
    <div className="practice-tests-container animate-fade-in" style={{ marginTop: "80px" }}>
      {/* Header section with wave background */}
      <div className="position-relative overflow-hidden bg-gradient-primary text-white py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-slide-up">
              <h1 className="display-4 fw-bold" style={{ fontFamily: "Poppins" }}>中文练习测试</h1>
              <div style={{ height: "5px", width: "100px", background: "#f72585", marginTop: "1.5rem", marginBottom: "1.5rem", borderRadius: "9999px" }}></div>
              <p className="lead">通过全面的练习测试为你的中文考试做好准备。</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#test-modules" className="btn btn-light text-primary">
                  <i className="bi bi-chevron-down me-2"></i>
                  浏览测试
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="glass-card p-3 mt-4 animate-slide-right">
                <img 
                  src="https://img.freepik.com/free-vector/chinese-new-year-concept-illustration_114360-7306.jpg"
                  alt="Chinese Practice" 
                  className="img-fluid rounded"
                  style={{ transform: "scale(1.05)" }}
                />
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
      </div>

      {/* Test modules section */}
      <div className="container mb-5" id="test-modules">
        <div className="text-center mb-5">
          <h2 className="fw-bold">测试模块</h2>
          <p className="text-muted">选择一个测试模块开始练习</p>
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
                        开始测试 <i className="bi bi-arrow-right ms-2"></i>
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
            <p className="text-muted">通过我们的特色功能提升你的中文考试体验</p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col stagger-item stagger-item-visible">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h5>真实测试体验</h5>
                <p className="text-muted">我们的练习测试模拟真实考试的格式、时间和题型。</p>
              </div>
            </div>
            <div className="col stagger-item stagger-item-visible stagger-delay-1">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h5>进度跟踪</h5>
                <p className="text-muted">通过详细的分析监控你的进步，发现提升空间。</p>
              </div>
            </div>
            <div className="col stagger-item stagger-item-visible stagger-delay-2">
              <div className="text-center mb-4">
                <div className="feature-icon mb-3 mx-auto">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5>专家建议与策略</h5>
                <p className="text-muted">获得中文专家的宝贵见解和技巧，助你取得高分。</p>
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
                <p className="mb-4">立即开始我们的全面测试模块并跟踪你的进步。</p>
                <Link to="/signup" className="btn btn-lg btn-primary px-5 py-3">
                  创建免费账户
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChineseTestsIndex;
