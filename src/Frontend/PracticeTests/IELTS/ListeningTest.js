import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

const IELTSListeningTest = () => {
  const [currentSection, setCurrentSection] = useState(0);
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
      alert("Time's up! Your answers have been submitted.");
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
      alert("Please answer at least one question.");
      return;
    }
    
    alert("Your answers have been submitted. You will receive feedback within 24-48 hours.");
  };

  // IELTS Listening test sections
  const listeningSections = [
    {
      id: 1,
      title: "Section 1: Conversation",
      description: "A conversation between two people set in an everyday social context.",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What is the main purpose of the conversation?",
          options: [
            { text: "Making a reservation", correct: true },
            { text: "Discussing a project", correct: false },
            { text: "Planning a trip", correct: false },
            { text: "Complaining about service", correct: false }
          ]
        },
        {
          id: 2,
          type: "fill-in",
          question: "The meeting will take place at ________.",
          correctAnswer: "3 PM"
        }
      ]
    },
    {
      id: 2,
      title: "Section 2: Monologue",
      description: "A monologue set in an everyday social context, e.g., a speech about local facilities.",
      questions: [
        {
          id: 3,
          type: "multiple-choice",
          question: "What is the speaker's main point?",
          options: [
            { text: "Promoting a new service", correct: false },
            { text: "Informing about changes", correct: true },
            { text: "Complaining about something", correct: false },
            { text: "Asking for help", correct: false }
          ]
        },
        {
          id: 4,
          type: "fill-in",
          question: "The new opening hours will be from ________ to ________.",
          correctAnswer: "9 AM, 5 PM"
        }
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">IELTS Listening Practice Test</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Test Information</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Duration:</strong> 60 minutes
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-file-text me-3 text-primary"></i>
                    <div>
                      <strong>Sections:</strong> 4 sections
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-question-circle me-3 text-primary"></i>
                    <div>
                      <strong>Question Types:</strong> Multiple choice, matching, fill in the blanks
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Important Note:</strong> You will hear each section only once
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
                Start Test
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
            <div className="mb-4">
              <p className="lead">{listeningSections[currentSection].description}</p>
              <div className="d-flex align-items-center text-muted mb-3">
                <i className="bi bi-clock me-2"></i>
                <span>Section {currentSection + 1} of 4</span>
              </div>
            </div>
            
            <div className="questions-container">
              {listeningSections[currentSection].questions.map((question) => (
                <div key={question.id} className="question-card mb-4">
                  <div className="question-header">
                    <h4 className="mb-0">Question {question.id}</h4>
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
                          placeholder="Enter your answer"
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
              Previous Section
            </button>
            
            {currentSection < listeningSections.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextSection}
              >
                Next Section
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit Test
                <i className="bi bi-check-circle ms-2"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IELTSListeningTest;
