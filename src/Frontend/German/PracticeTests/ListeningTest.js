import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";

const GermanListeningTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

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
      alert("Die Zeit ist abgelaufen! Ihre Antworten wurden abgesendet.");
    }

    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  // Handle audio playback
  const handlePlayPause = () => {
    if (!currentAudio) return;
    
    if (isPlaying) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle answer selection
  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
    // Initialize audio player for the first question
    const audio = new Audio(listeningQuestions[currentQuestion].audio);
    setCurrentAudio(audio);
  };

  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestion < listeningQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Initialize audio for next question
      const audio = new Audio(listeningQuestions[currentQuestion + 1].audio);
      setCurrentAudio(audio);
    }
  };

  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Initialize audio for previous question
      const audio = new Audio(listeningQuestions[currentQuestion - 1].audio);
      setCurrentAudio(audio);
    }
  };

  // Submit test
  const handleSubmit = () => {
    if (!Object.keys(answers).length) {
      alert("Bitte beantworten Sie mindestens eine Frage.");
      return;
    }
    
    alert("Ihre Antworten wurden abgesendet. Sie erhalten Feedback innerhalb von 24-48 Stunden.");
  };

  // Listening test questions
  const listeningQuestions = [
    {
      id: 1,
      title: "Telefonat im Geschäft",
      description: "Hören Sie sich ein Telefonat zwischen zwei Geschäftsleuten an und beantworten Sie die Fragen.",
      audio: "https://example.com/audio/german_business_call.mp3", // Replace with actual audio file
      questions: [
        {
          id: 1,
          text: "Was ist der Hauptzweck des Telefonats?",
          options: [
            "Ein Meeting zu vereinbaren",
            "Über ein Projekt zu sprechen",
            "Ein Angebot zu besprechen",
            "Über Lieferzeiten zu reden"
          ],
          correct: 1
        },
        {
          id: 2,
          text: "Wann soll das nächste Meeting stattfinden?",
          options: [
            "Morgen",
            "In einer Woche",
            "In zwei Wochen",
            "In drei Wochen"
          ],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title: "Kundenbesprechung",
      description: "Hören Sie sich eine Kundenbesprechung an und beantworten Sie die Fragen.",
      audio: "https://example.com/audio/german_customer_meeting.mp3", // Replace with actual audio file
      questions: [
        {
          id: 1,
          text: "Was ist das Hauptanliegen des Kunden?",
          options: [
            "Produktqualität",
            "Preis",
            "Lieferzeit",
            "Nachverkaufsservice"
          ],
          correct: 3
        },
        {
          id: 2,
          text: "Welche Lösung schlägt der Verkäufer vor?",
          options: [
            "Rabatt",
            "Schnellere Lieferung",
            "Zusätzliche Garantie",
            "Produktanpassung"
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
            <h1 className="heading-underline text-center mb-4">Deutsche Hörverständnis-Übung</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Testinformationen</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Dauer:</strong> 45 Minuten
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>Frageanzahl:</strong> 20 Fragen
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-headphones me-3 text-primary"></i>
                    <div>
                      <strong>Audio:</strong> 8 Audio-Dateien
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Wichtig:</strong> Sie können die Audio-Dateien mehrmals anhören
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
                <i className="bi bi-play-fill me-2"></i>
                Übung starten
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{listeningQuestions[currentQuestion].title}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="alert alert-info mb-4">
              <p className="mb-0">{listeningQuestions[currentQuestion].description}</p>
            </div>
            
            <div className="audio-controls mb-4">
              <div className="d-flex align-items-center gap-3">
                <button 
                  className={`btn btn-primary ${isPlaying ? 'btn-danger' : ''}`}
                  onClick={handlePlayPause}
                  style={{
                    borderRadius: "var(--border-radius-full)",
                    padding: "10px 20px"
                  }}
                >
                  {isPlaying ? (
                    <i className="bi bi-pause-fill"></i>
                  ) : (
                    <i className="bi bi-play-fill"></i>
                  )}
                </button>
                <div className="audio-progress">
                  <div className="progress" style={{ height: "6px" }}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="questions-container">
              {listeningQuestions[currentQuestion].questions.map((question, index) => (
                <div key={question.id} className="question-card mb-4">
                  <div className="question-header">
                    <h4 className="mb-0">Frage {index + 1}</h4>
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
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Vorherige Frage
            </button>
            
            {currentQuestion < listeningQuestions.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextQuestion}
              >
                Nächste Frage
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Test abgeben
                <i className="bi bi-check-circle ms-2"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GermanListeningTest;
