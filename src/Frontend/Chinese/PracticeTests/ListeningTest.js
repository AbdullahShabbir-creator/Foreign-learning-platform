import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";
import "../../styles/main.css";
import "../../styles/animations.css";

const ChineseListeningTest = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start timer when user begins the test
  useEffect(() => {
    let timer;
    if (hasStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert("时间到了！您的答案已提交。");
    }

    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
  };

  // Navigate to next section
  const nextSection = () => {
    if (currentSection < listeningSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Navigate to previous section
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Submit test
  const handleSubmit = () => {
    if (!Object.keys(answers).length) {
      alert("请至少回答一个问题。");
      return;
    }
    
    alert("您的答案已提交。您将在24-48小时内收到反馈。");
  };

  // Listening test sections
  const listeningSections = [
    {
      id: 1,
      title: "对话理解",
      difficulty: "简单",
      audio: "https://example.com/audio/chinese_dialogue_1.mp3", // Replace with actual audio
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "男士为什么迟到了？",
          options: [
            { text: "交通堵塞", correct: false },
            { text: "起床晚了", correct: true },
            { text: "找不到路", correct: false },
            { text: "地铁故障", correct: false }
          ]
        },
        {
          id: 2,
          type: "fill-in",
          question: "女士建议男士下次提前____分钟出门。",
          correctAnswer: "十分钟"
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "对话中提到的约会时间是？",
          options: [
            { text: "下午五点", correct: false },
            { text: "下午六点", correct: true },
            { text: "下午七点", correct: false },
            { text: "下午八点", correct: false }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "短文理解",
      difficulty: "中等",
      audio: "https://example.com/audio/chinese_passage_1.mp3", // Replace with actual audio
      questions: [
        {
          id: 4,
          type: "multiple-choice",
          question: "短文主要讨论了什么话题？",
          options: [
            { text: "环境保护", correct: false },
            { text: "城市交通", correct: true },
            { text: "饮食文化", correct: false },
            { text: "旅游景点", correct: false }
          ]
        },
        {
          id: 5,
          type: "fill-in",
          question: "短文中提到的公共交通工具有____和____。",
          correctAnswer: "地铁, 公共汽车"
        },
        {
          id: 6,
          type: "multiple-choice",
          question: "作者建议如何解决交通问题？",
          options: [
            { text: "增加私家车", correct: false },
            { text: "发展公共交通", correct: true },
            { text: "限制自行车", correct: false },
            { text: "建设更多桥梁", correct: false }
          ]
        }
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">汉语听力练习</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>测试信息</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>时长:</strong> 45分钟
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-file-text me-3 text-primary"></i>
                    <div>
                      <strong>题量:</strong> 40题
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-question-circle me-3 text-primary"></i>
                    <div>
                      <strong>题型:</strong> 对话理解, 短文理解, 细节识别
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>重要提示:</strong> 听清关键词, 注意语速变化
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleStart}
                style={{
                  borderRadius: "var(--border-radius-full)",
                  padding: "12px 40px",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-play-circle me-2"></i>
                开始练习
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{listeningSections[currentSection].title}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="text-info mb-4">
              <p className="mb-1">难度: {listeningSections[currentSection].difficulty}</p>
              <div className="progress" style={{ height: "6px" }}>
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{ width: `${(currentSection + 1) / listeningSections.length * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="audio-controls mb-4">
              <audio controls style={{ width: "100%" }}>
                <source src={listeningSections[currentSection].audio} type="audio/mpeg" />
                您的浏览器不支持 audio 标签。
              </audio>
            </div>
            
            <div className="questions-container">
              {listeningSections[currentSection].questions.map((question) => (
                <div key={question.id} className="question-card mb-4">
                  <div className="question-header">
                    <h4 className="mb-0">问题 {question.id}</h4>
                  </div>
                  <div className="question-content">
                    <p className="mb-3">{question.question}</p>
                    
                    {question.type === "multiple-choice" && (
                      <div className="options">
                        {question.options.map((option, index) => (
                          <div key={index} className="form-check mb-2">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name={`q${question.id}`} 
                              id={`q${question.id}_${index}`}
                              value={index}
                              checked={answers[question.id] === index}
                              onChange={() => handleAnswer(question.id, index)}
                            />
                            <label className="form-check-label" htmlFor={`q${question.id}_${index}`}>
                              {option.text}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {question.type === "fill-in" && (
                      <div className="input-group">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="请输入您的答案"
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={prevSection}
              disabled={currentSection === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              上一节
            </button>
            
            {currentSection < listeningSections.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextSection}
              >
                下一节
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                提交测试
                <i className="bi bi-check-circle ms-2"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChineseListeningTest;
