import React, { useState, useEffect, useRef } from "react";
import "../styles/main.css";
import "../styles/animations.css";

const SpeakingTest = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [prepTime, setPrepTime] = useState(0);
  const [speakTime, setSpeakTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const timerRef = useRef(null);

  // Recording simulation (real implementation would use MediaRecorder API)
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

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
    alert("Your speaking recordings have been submitted for evaluation. In a real IELTS test, you would receive feedback from a certified examiner.");
  };

  // Speaking test parts
  const speakingParts = [
    {
      id: 1,
      title: "Part 1: Introduction and Interview",
      description: "In this part, the examiner introduces themselves and asks you to introduce yourself and confirm your identity. The examiner then asks general questions on familiar topics such as home, family, work, studies, and interests.",
      duration: "4-5 minutes",
      prepTime: 0,
      questions: [
        "Can you tell me your full name?",
        "Where are you from?",
        "Do you work or are you a student?",
        "What do you do in your free time?",
        "Do you prefer living in a house or an apartment? Why?",
        "What kind of music do you enjoy listening to?",
        "Have you traveled to many different countries?",
        "Do you enjoy cooking? Why/why not?",
        "What types of transportation do you use most often?",
        "Do you think public transportation in your city is good?"
      ]
    },
    {
      id: 2,
      title: "Part 2: Individual Long Turn",
      description: "In this part, the examiner gives you a task card with a topic and some points to include in your talk. You'll have 1 minute to prepare, and then you should talk for 1-2 minutes on the topic. The examiner may ask one or two questions when you finish.",
      duration: "3-4 minutes (including 1 minute preparation)",
      prepTime: 60,
      taskCard: {
        topic: "Describe a book you have recently read.",
        points: [
          "What the book was about",
          "When you read it",
          "Why you decided to read it",
          "How you felt about it"
        ]
      },
      followUpQuestions: [
        "Would you recommend this book to others?",
        "Do you prefer reading physical books or e-books?"
      ]
    },
    {
      id: 3,
      title: "Part 3: Two-Way Discussion",
      description: "In this part, the examiner will ask you further questions connected to the topic in Part 2. This will give you an opportunity to discuss more abstract issues and ideas.",
      duration: "4-5 minutes",
      prepTime: 0,
      questions: [
        "Do you think reading is becoming less popular nowadays? Why?",
        "How have digital technologies affected the way people read?",
        "What are the advantages and disadvantages of e-books compared to printed books?",
        "How important is it for children to develop good reading habits?",
        "What kinds of books are most popular in your country?",
        "Do you think schools should encourage students to read more fiction or non-fiction?",
        "How might reading habits change in the future?",
        "What is the value of studying literature at university?"
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">IELTS Speaking Practice Test</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Test Information</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Duration:</strong> 11-14 minutes
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-mic me-3 text-primary"></i>
                    <div>
                      <strong>Format:</strong> Face-to-face interview with an examiner in three parts
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-person-lines-fill me-3 text-primary"></i>
                    <div>
                      <strong>Assessment:</strong> The test assesses your fluency, vocabulary, grammar, and pronunciation
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Important:</strong> This is a simulation - you'll record your answers, but in a real test you would speak directly with an examiner
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips for Success</h5>
                <ul>
                  <li>Speak clearly and at a natural pace - not too fast or too slow</li>
                  <li>Use a variety of vocabulary and sentence structures</li>
                  <li>In Part 2, use your preparation time to make brief notes</li>
                  <li>Support your opinions with examples from your experience</li>
                  <li>Don't memorize prepared answers - examiners can tell</li>
                  <li>If you don't understand a question, ask the examiner to repeat it</li>
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
                Start Practice Test
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
                <i className="bi bi-hourglass-split me-2"></i> Prep Time: {formatTime(prepTime)}
              </div>
            )}
            {isRecording && (
              <div className="timer bg-danger text-white px-4 py-2 rounded-pill d-flex align-items-center">
                <span className="recording-indicator me-2"></span>
                Recording: {formatTime(speakTime)}
              </div>
            )}
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="mb-4">
              <p className="lead">{speakingParts[currentPart].description}</p>
              <div className="d-flex align-items-center text-muted mb-3">
                <i className="bi bi-clock me-2"></i>
                <span>Duration: {speakingParts[currentPart].duration}</span>
              </div>
            </div>
            
            {/* Part 1: Introduction and Interview */}
            {currentPart === 0 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">Interview Questions</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">The examiner will ask you several questions about yourself and familiar topics. Please record your answers to practice.</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">Question {index + 1}: {question}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Part 2: Individual Long Turn */}
            {currentPart === 1 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4 border-primary">
                  <div className="card-header bg-primary text-white">
                    <h5 className="card-title m-0">Task Card</h5>
                  </div>
                  <div className="card-body">
                    <p className="fw-bold mb-3">{speakingParts[currentPart].taskCard.topic}</p>
                    <p>You should say:</p>
                    <ul>
                      {speakingParts[currentPart].taskCard.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {prepTime === 0 && (
                      <div className="mt-3">
                        <p>Follow-up questions:</p>
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
                    Take a minute to prepare your answer. You can make notes if you wish.
                  </div>
                )}
                {prepTime === 0 && (
                  <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    You should now speak for 1-2 minutes on the topic. Click the "Start Recording" button when you're ready.
                  </div>
                )}
              </div>
            )}
            
            {/* Part 3: Two-Way Discussion */}
            {currentPart === 2 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">Discussion Questions</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">The examiner will ask you deeper questions related to the topic from Part 2. Try to give extended answers with explanations and examples.</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">Question {index + 1}: {question}</p>
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
                {!isRecording ? "Click to start recording your answer" : "Click to stop recording"}
              </p>
            </div>
            
            {/* Recordings list */}
            {recordings.length > 0 && (
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="card-title m-0">Your Recordings</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Part</th>
                          <th>Duration</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recordings.map((recording, index) => (
                          <tr key={recording.id}>
                            <td>{index + 1}</td>
                            <td>Part {recording.part}</td>
                            <td>{recording.duration}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <i className="bi bi-play-fill"></i> Play
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i> Delete
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
              Previous Part
            </button>
            
            {currentPart < speakingParts.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextPart}
              >
                Next Part
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

export default SpeakingTest;
