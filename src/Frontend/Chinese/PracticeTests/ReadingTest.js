import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

const ChineseReadingTest = () => {
  const [currentText, setCurrentText] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
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

  // Navigate to next text
  const nextText = () => {
    if (currentText < readingTexts.length - 1) {
      setCurrentText(currentText + 1);
    }
  };

  // Navigate to previous text
  const prevText = () => {
    if (currentText > 0) {
      setCurrentText(currentText - 1);
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

  // Reading test texts and questions
  const readingTexts = [
    {
      id: 1,
      title: "公司报告",
      difficulty: "中等",
      text: "XYZ公司上个季度的收入增长了15%。这主要归功于新的产品在亚洲市场的成功推出。生产能力提高了20%，以应对不断增长的需求。\n\n同时，公司进一步扩展了其数字存在。在线销售额比去年同期增长了25%。特别是社交媒体活动取得了12%的参与率。\n\n对于即将到来的季度，公司计划进行更多的产品开发。特别关注产品的可持续性，公司希望将二氧化碳排放量减少10%。",
      questions: [
        {
          id: 1,
          text: "哪个市场区域对收入增长贡献最大？",
          options: [
            "欧洲",
            "亚洲",
            "美洲",
            "非洲"
          ],
          correct: 1
        },
        {
          id: 2,
          text: "生产能力提高了多少百分比？",
          options: [
            "10%",
            "15%",
            "20%",
            "25%"
          ],
          correct: 2
        },
        {
          id: 3,
          text: "未来特别强调什么主题？",
          options: [
            "数字化",
            "全球化",
            "可持续性",
            "创新"
          ],
          correct: 2
        }
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">汉语阅读理解练习</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>测试信息</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>时长:</strong> 60分钟
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-file-text me-3 text-primary"></i>
                    <div>
                      <strong>题量:</strong> 25题
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-question-circle me-3 text-primary"></i>
                    <div>
                      <strong>题型:</strong> 阅读理解, 细节识别, 主旨大意
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>重要提示:</strong> 仔细阅读文章, 注意细节
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
                <i className="bi bi-book me-2"></i>
                开始练习
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{readingTexts[currentText].title}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="text-info mb-4">
              <p className="mb-1">难度: {readingTexts[currentText].difficulty}</p>
              <div className="progress" style={{ height: "6px" }}>
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{ width: `${(currentText + 1) / readingTexts.length * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="text-container mb-4">
              <div className="card bg-light p-4">
                <div dangerouslySetInnerHTML={{ __html: readingTexts[currentText].text }}></div>
              </div>
            </div>
            
            <div className="questions-container">
              {readingTexts[currentText].questions.map((question, index) => (
                <div key={question.id} className="question-card mb-4">
                  <div className="question-header">
                    <h4 className="mb-0">问题 {index + 1}</h4>
                  </div>
                  <div className="question-content">
                    <p className="mb-3">{question.text}</p>
                    <div className="options">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="form-check mb-2">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name={`q${question.id}`} 
                            id={`q${question.id}_${optIndex}`}
                            value={optIndex}
                            checked={answers[question.id] === optIndex}
                            onChange={() => handleAnswer(question.id, optIndex)}
                          />
                          <label className="form-check-label" htmlFor={`q${question.id}_${optIndex}`}>
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={prevText}
              disabled={currentText === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              上一篇
            </button>
            
            {currentText < readingTexts.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextText}
              >
                下一篇
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

export default ChineseReadingTest;
