import React, { useState, useEffect, useRef } from "react";
import "../../../App.css";
import "../../../index.css";

const ChineseSpeakingTest = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [prepTime, setPrepTime] = useState(0);
  const [speakTime, setSpeakTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const timerRef = useRef(null);

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

  // Start recording
  const startRecording = () => {
    setIsRecording(true);
    // Simulate starting a new recording
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setSpeakTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Simulate saving a recording
    const newRecording = {
      id: Date.now(),
      part: currentPart + 1,
      duration: formatTime(speakTime),
      url: "#" // In a real app, this would be the URL to the audio file
    };
    
    setRecordings([...recordings, newRecording]);
    setSpeakTime(0);
  };

  // Start prep timer when user begins a new part
  useEffect(() => {
    let timer;
    if (hasStarted && currentPart < speakingParts.length && prepTime > 0) {
      timer = setInterval(() => {
        setPrepTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [hasStarted, currentPart, prepTime]);

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
    resetPart();
  };

  // Start a new speaking part
  const startPart = (partIndex) => {
    setCurrentPart(partIndex);
    resetPart();
  };

  // Reset timers when starting a new part
  const resetPart = () => {
    // Clear any existing timers
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Set preparation time if the current part has prep time
    if (currentPart < speakingParts.length && speakingParts[currentPart].prepTime > 0) {
      setPrepTime(speakingParts[currentPart].prepTime);
    } else {
      setPrepTime(0);
    }
    
    setSpeakTime(0);
    setIsRecording(false);
  };

  // Navigate to next speaking part
  const nextPart = () => {
    if (currentPart < speakingParts.length - 1) {
      const nextPartIndex = currentPart + 1;
      setCurrentPart(nextPartIndex);
      resetPart();
    }
  };

  // Navigate to previous speaking part
  const prevPart = () => {
    if (currentPart > 0) {
      const prevPartIndex = currentPart - 1;
      setCurrentPart(prevPartIndex);
      resetPart();
    }
  };

  // Submit test
  const handleSubmit = () => {
    alert("您的录音已提交。您将在24-48小时内收到反馈。");
  };

  // Speaking test parts
  const speakingParts = [
    {
      id: 1,
      title: "部分一: 介绍和面试",
      description: "在这个部分,考官会自我介绍并要求您自我介绍和确认身份。考官会就您自己和熟悉的话题提出一些一般性问题。",
      duration: "4-5分钟",
      prepTime: 0,
      questions: [
        "您能告诉我您的全名吗？",
        "您来自哪里？",
        "您工作还是学习？",
        "您在空闲时间做什么？",
        "您更喜欢住在房子里还是公寓里？为什么？",
        "您最喜欢听什么类型的音乐？",
        "您经常旅行吗？",
        "您喜欢做饭吗？为什么？",
        "您最常用的交通工具是什么？",
        "您觉得您所在城市的公共交通好吗？"
      ]
    },
    {
      id: 2,
      title: "部分二: 个人展示",
      description: "在这个部分,考官会给您一张任务卡,上面有一个主题和需要考虑的要点。您有一分钟的时间准备,然后应该用1-2分钟的时间谈论这个主题。考官可能会问1-2个跟进问题。",
      duration: "3-4分钟(包括1分钟准备时间)",
      prepTime: 60,
      taskCard: {
        topic: "描述您最近读过的一本书。",
        points: [
          "这本书是关于什么的？",
          "您什么时候读的？",
          "您为什么选择这本书？",
          "您觉得怎么样？"
        ]
      },
      followUpQuestions: [
        "您会推荐这本书吗？为什么？",
        "您更喜欢纸质书还是电子书？为什么？"
      ]
    },
    {
      id: 3,
      title: "部分三: 讨论",
      description: "在这个部分,考官会就第二部分的主题提出更多问题。这给了您讨论更抽象的话题和想法的机会。",
      duration: "4-5分钟",
      prepTime: 0,
      questions: [
        "您觉得现在阅读的人少了？为什么？",
        "数字技术如何影响阅读习惯？",
        "电子书和纸质书相比有哪些优缺点？",
        "您认为孩子培养良好的阅读习惯重要吗？",
        "在您的国家最受欢迎的是什么类型的书？",
        "学校应该鼓励学生多读小说还是非小说？",
        "未来阅读习惯会如何改变？",
        "学习文学在大学有什么价值？"
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">汉语口语练习</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>测试信息</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>时长:</strong> 11-14分钟
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-mic me-3 text-primary"></i>
                    <div>
                      <strong>格式:</strong> 与考官进行个人面试的三个部分
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-person-lines-fill me-3 text-primary"></i>
                    <div>
                      <strong>评估:</strong> 测试您的流利度、词汇、语法和发音
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>重要提示:</strong> 这是一个模拟测试 - 在真正的测试中,您会直接与考官交谈
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>成功技巧</h5>
                <ul>
                  <li>以自然的速度清晰地说话 - 不要太快也不要太慢</li>
                  <li>使用多样化的词汇和句子结构</li>
                  <li>在第二部分利用准备时间做笔记</li>
                  <li>用您的经验支持您的观点</li>
                  <li>不要背诵预先准备的答案 - 考官能识别出来</li>
                  <li>如果您不理解问题,请考官重复</li>
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
                <i className="bi bi-play-fill me-2"></i>
                开始练习
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{speakingParts[currentPart].title}</h2>
            {prepTime > 0 && (
              <div className="timer bg-warning text-dark px-4 py-2 rounded-pill">
                <i className="bi bi-hourglass-split me-2"></i> 准备时间: {formatTime(prepTime)}
              </div>
            )}
            {isRecording && (
              <div className="timer bg-danger text-white px-4 py-2 rounded-pill d-flex align-items-center">
                <span className="recording-indicator me-2"></span>
                录音: {formatTime(speakTime)}
              </div>
            )}
            <div className="timer bg-info text-dark px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> 剩余时间: {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="mb-4">
              <p className="lead">{speakingParts[currentPart].description}</p>
              <div className="d-flex align-items-center text-muted mb-3">
                <i className="bi bi-clock me-2"></i>
                <span>时长: {speakingParts[currentPart].duration}</span>
              </div>
            </div>
            
            {/* Part 1: Introduction and Interview */}
            {currentPart === 0 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">面试问题</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">考官会就您自己和熟悉的话题提出多个问题。请录制您的答案以练习。</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">问题 {index + 1}: {question}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Part 2: Individual Presentation */}
            {currentPart === 1 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4 border-primary">
                  <div className="card-header bg-primary text-white">
                    <h5 className="card-title m-0">任务卡</h5>
                  </div>
                  <div className="card-body">
                    <p className="fw-bold mb-3">{speakingParts[currentPart].taskCard.topic}</p>
                    <p>您应该考虑以下要点:</p>
                    <ul>
                      {speakingParts[currentPart].taskCard.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {prepTime === 0 && (
                      <div className="mt-3">
                        <p>跟进问题:</p>
                        <ul>
                          {speakingParts[currentPart].followUpQuestions.map((question, index) => (
                            <li key={index}>{question}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {prepTime > 0 && (
                  <div className="alert alert-warning">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    利用这一分钟准备。您可以做笔记。
                  </div>
                )}
                {prepTime === 0 && (
                  <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    现在您应该用1-2分钟的时间谈论这个主题。点击"开始录音"按钮,当您准备好时。
                  </div>
                )}
              </div>
            )}
            
            {/* Part 3: Discussion */}
            {currentPart === 2 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">讨论问题</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">考官会就第二部分的主题提出更深入的问题。尽量给出详细的回答,并提供解释和例子。</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">问题 {index + 1}: {question}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Controls for all parts */}
            <div className="recording-controls text-center my-4">
              {!isRecording ? (
                <button 
                  className="btn btn-danger btn-lg rounded-circle"
                  onClick={startRecording}
                  disabled={prepTime > 0}
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-mic-fill fs-3"></i>
                </button>
              ) : (
                <button 
                  className="btn btn-outline-danger btn-lg rounded-circle"
                  onClick={stopRecording}
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="bi bi-stop-fill fs-3"></i>
                </button>
              )}
              <p className="text-muted mt-2">
                {!isRecording ? "点击开始录音" : "点击停止录音"}
              </p>
            </div>
            
            {/* Recordings list */}
            {recordings.length > 0 && (
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="card-title m-0">您的录音</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>部分</th>
                          <th>时长</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recordings.map((recording, index) => (
                          <tr key={recording.id}>
                            <td>{index + 1}</td>
                            <td>部分 {recording.part}</td>
                            <td>{recording.duration}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <i className="bi bi-play-fill"></i> 播放
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i> 删除
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={prevPart}
              disabled={currentPart === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              上一个部分
            </button>
            
            {currentPart < speakingParts.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextPart}
              >
                下一个部分
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
      
      <style jsx>{`
        .recording-indicator {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-color: #fff;
          border-radius: 50%;
          animation: pulse 1s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ChineseSpeakingTest;
