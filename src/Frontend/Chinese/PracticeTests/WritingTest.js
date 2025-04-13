import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

const ChineseWritingTest = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [essays, setEssays] = useState({ 0: "", 1: "" });
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);
  const [wordCounts, setWordCounts] = useState({ 0: 0, 1: 0 });

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

  // Calculate word count
  const calculateWordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  // Handle essay input
  const handleEssayChange = (e) => {
    const newEssay = e.target.value;
    setEssays({ ...essays, [currentTask]: newEssay });
    setWordCounts({ 
      ...wordCounts, 
      [currentTask]: calculateWordCount(newEssay) 
    });
  };

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
  };

  // Navigate to next task
  const nextTask = () => {
    if (currentTask < writingTasks.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  // Navigate to previous task
  const prevTask = () => {
    if (currentTask > 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  // Submit test
  const handleSubmit = () => {
    if (wordCounts[0] < 100 || wordCounts[1] < 150) {
      alert("注意: 一篇作文可能太短。第一题应至少有100字, 第二题应至少有150字。");
      return;
    }
    
    alert("您的写作测试已提交。您将在24-48小时内收到反馈。");
  };

  // Writing tasks
  const writingTasks = [
    {
      id: 1,
      title: "任务一 - 描述",
      instruction: "您应该用约20分钟完成此任务。",
      description: "描述给定的图表或表格, 并考虑主要趋势和关系。",
      imageUrl: "https://example.com/images/chinese_chart.png", // Replace with actual image
      wordCount: 100,
      timeRecommended: 20
    },
    {
      id: 2,
      title: "任务二 - 论述",
      instruction: "您应该用约40分钟完成此任务。",
      description: "写一篇关于'远程学习的利弊'的文章。清晰、有条理地表达您的观点, 并提供例子。",
      wordCount: 150,
      timeRecommended: 40
    }
  ];

  // Word count color based on whether it meets the minimum requirement
  const getWordCountColor = (taskIndex) => {
    const minCount = writingTasks[taskIndex].wordCount;
    return wordCounts[taskIndex] >= minCount ? "text-success" : "text-danger";
  };

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">汉语写作练习</h1>
            
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
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>任务:</strong> 2个写作任务
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-hash me-3 text-primary"></i>
                    <div>
                      <strong>字数要求:</strong> 每个任务至少100字
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>重要提示:</strong> 第二题在评分中占更大比重
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>成功技巧</h5>
                <ul>
                  <li>在写作前先计划您的答案</li>
                  <li>使用清晰的结构(引言, 主体, 结论)</li>
                  <li>使用多种词汇和表达</li>
                  <li>检查您的拼写和语法</li>
                  <li>使用过渡词和短语</li>
                  <li>在结束前留出时间检查</li>
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
                <i className="bi bi-pencil me-2"></i>
                开始练习
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{writingTasks[currentTask].title}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="alert alert-info">
              <p className="mb-0"><strong>{writingTasks[currentTask].instruction}</strong></p>
            </div>
            
            <div className="task-description mb-4">
              <p style={{ whiteSpace: "pre-line" }}>{writingTasks[currentTask].description}</p>
              
              {writingTasks[currentTask].imageUrl && (
                <div className="text-center my-4">
                  <img 
                    src={writingTasks[currentTask].imageUrl} 
                    alt="任务视觉" 
                    className="img-fluid border rounded shadow-sm"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}
              
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted mb-0">
                  <i className="bi bi-hash me-2"></i>
                  最少 {writingTasks[currentTask].wordCount} 字
                </p>
                <p className="text-muted mb-0">
                  <i className="bi bi-clock me-2"></i>
                  建议时间: {writingTasks[currentTask].timeRecommended} 分钟
                </p>
              </div>
            </div>
            
            <div className="form-group mb-3">
              <label htmlFor="essayText" className="form-label fw-bold">您的答案:</label>
              <textarea
                id="essayText"
                className="form-control"
                rows="12"
                placeholder="在这里开始您的答案..."
                value={essays[currentTask]}
                onChange={handleEssayChange}
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              ></textarea>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className={`word-count ${getWordCountColor(currentTask)}`}>
                <i className="bi bi-hash me-1"></i>
                字数: <strong>{wordCounts[currentTask]}</strong> / {writingTasks[currentTask].wordCount} minimum
              </div>
              
              <div className="writing-controls">
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="粗体"
                  onClick={() => document.execCommand('bold')}
                >
                  <i className="bi bi-type-bold"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="斜体"
                  onClick={() => document.execCommand('italic')}
                >
                  <i className="bi bi-type-italic"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  title="下划线"
                  onClick={() => document.execCommand('underline')}
                >
                  <i className="bi bi-type-underline"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={prevTask}
              disabled={currentTask === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              上一个任务
            </button>
            
            {currentTask < writingTasks.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextTask}
              >
                下一个任务
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

export default ChineseWritingTest;
