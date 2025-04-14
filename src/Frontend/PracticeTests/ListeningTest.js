import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const ListeningTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isPlaying, setIsPlaying] = useState(false);
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
      // Auto-submit when time runs out
      alert("Time's up! Your answers have been submitted.");
    }

    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  // Sample test questions
  const testQuestions = [
    {
      id: 1,
      audio: "https://example.com/listening1.mp3", // Replace with real audio file
      instruction: "Listen to the conversation between two friends discussing their weekend plans and answer the questions.",
      transcript: "John: Hey Sarah, what are your plans for this weekend?\nSarah: I'm thinking of going to that new art exhibition at the city museum. I heard it's really good. What about you?\nJohn: I'm actually planning to go hiking if the weather is nice. Otherwise, I might just stay home and catch up on some reading.\nSarah: That sounds nice. Hey, would you like to join me at the exhibition? We could grab lunch afterwards.\nJohn: That's a great idea! What time were you planning to go?\nSarah: I was thinking around 11am on Saturday. The exhibition opens at 10, but it might be less crowded if we go a bit later.\nJohn: 11am works for me. Should we meet at the museum or somewhere else?\nSarah: Let's meet at the coffee shop across from the museum at 10:45. That way we can grab a quick coffee before going in.\nJohn: Perfect. I'm looking forward to it.",
      questions: [
        {
          question: "What is Sarah planning to do this weekend?",
          options: [
            "Go hiking",
            "Visit a new art exhibition",
            "Stay home and read",
            "Watch a movie"
          ],
          correctAnswer: 1
        },
        {
          question: "What will John do if the weather is bad?",
          options: [
            "Go to the gym",
            "Visit Sarah",
            "Stay home and read",
            "Go to the exhibition anyway"
          ],
          correctAnswer: 2
        },
        {
          question: "What time does the exhibition open?",
          options: [
            "9am",
            "10am",
            "11am",
            "12pm"
          ],
          correctAnswer: 1
        },
        {
          question: "Where will John and Sarah meet?",
          options: [
            "At the museum entrance",
            "At the coffee shop across from the museum",
            "At Sarah's house",
            "At the park"
          ],
          correctAnswer: 1
        },
        {
          question: "What time are they planning to meet?",
          options: [
            "10:00am",
            "10:30am",
            "10:45am",
            "11:00am"
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 2,
      audio: "https://example.com/listening2.mp3", // Replace with real audio file
      instruction: "Listen to the lecture about climate change and answer the questions.",
      transcript: "Today we'll be discussing the effects of climate change on marine ecosystems. As global temperatures rise, the ocean absorbs a significant amount of this heat. In fact, the ocean has absorbed about 90% of the warming that has occurred in recent decades. This warming has several consequences for marine life. First, many species are migrating toward the poles in search of cooler waters. This is disrupting ecosystems as predator and prey relationships change. Second, warming waters hold less oxygen, creating what we call 'dead zones' where marine life cannot survive. Third, coral reefs are particularly sensitive to temperature changes. When water gets too warm, corals expel the algae living in their tissues, causing the coral to turn white – a phenomenon known as coral bleaching. Without the algae, the coral loses its main source of food and becomes more susceptible to disease. Finally, as the ocean absorbs more carbon dioxide from the atmosphere, the water becomes more acidic. This ocean acidification makes it difficult for shellfish, corals, and some plankton to build their shells and skeletons.",
      questions: [
        {
          question: "What percentage of global warming has been absorbed by the oceans?",
          options: [
            "About 50%",
            "About 70%",
            "About 90%",
            "About 30%"
          ],
          correctAnswer: 2
        },
        {
          question: "Why are many marine species migrating toward the poles?",
          options: [
            "To find more food",
            "To find cooler waters",
            "To escape predators",
            "To find mates"
          ],
          correctAnswer: 1
        },
        {
          question: "What causes coral bleaching according to the lecture?",
          options: [
            "Ocean acidification",
            "Pollution",
            "Overfishing",
            "Corals expelling algae due to warm water"
          ],
          correctAnswer: 3
        },
        {
          question: "What effect does ocean acidification have?",
          options: [
            "It kills fish",
            "It makes it difficult for shellfish to build shells",
            "It increases oxygen levels",
            "It reduces water temperature"
          ],
          correctAnswer: 1
        },
        {
          question: "What are 'dead zones' in the ocean?",
          options: [
            "Areas with no marine plants",
            "Areas where fishing is prohibited",
            "Areas with low oxygen where marine life cannot survive",
            "Areas with high acidity"
          ],
          correctAnswer: 2
        }
      ]
    }
  ];

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
  };

  // Handle playing/pausing audio
  const toggleAudio = () => {
    // In a real implementation, this would control the audio playback
    setIsPlaying(!isPlaying);
  };

  // Handle answer selection
  const handleAnswerSelect = (questionIdx, optionIdx) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion * 5 + questionIdx]: optionIdx
    });
  };

  // Navigate to next section
  const nextSection = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Reset audio state when moving to a new section
      setIsPlaying(false);
    }
  };

  // Navigate to previous section
  const prevSection = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Reset audio state when moving to a new section
      setIsPlaying(false);
    }
  };

  // Submit test
  const handleSubmit = () => {
    // Calculate score
    let score = 0;
    let totalQuestions = 0;
    
    testQuestions.forEach((section, sectionIdx) => {
      section.questions.forEach((question, questionIdx) => {
        totalQuestions++;
        const questionKey = sectionIdx * 5 + questionIdx;
        if (selectedAnswers[questionKey] === question.correctAnswer) {
          score++;
        }
      });
    });
    
    const percentage = Math.round((score / totalQuestions) * 100);
    alert(`Your score: ${score}/${totalQuestions} (${percentage}%)`);
  };

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
                      <strong>Duration:</strong> 30 minutes (+ 10 minutes for transferring answers)
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>Questions:</strong> 40 questions in 4 sections
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-ear me-3 text-primary"></i>
                    <div>
                      <strong>Format:</strong> You'll listen to four recordings and answer questions for each
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Important:</strong> You'll hear each recording ONCE only
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips for Success</h5>
                <ul>
                  <li>Read the questions before listening to each section</li>
                  <li>Pay attention to keywords and instructions</li>
                  <li>Write answers as you listen - don't try to memorize</li>
                  <li>Check your spelling and grammar in your answers</li>
                  <li>If you miss an answer, move on to the next question</li>
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
          <div className="content-wrapper p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="heading-underline m-0">Listening Section {currentQuestion + 1}</h2>
              <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
                <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
              </div>
            </div>
            
            <div className="card mb-4 audio-player stagger-item stagger-item-visible">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-headphones me-2 text-primary"></i>
                  Audio Recording
                </h5>
                <p className="card-text">{testQuestions[currentQuestion].instruction}</p>
                
                <div className="d-flex justify-content-center my-4">
                  <button 
                    className={`btn ${isPlaying ? 'btn-danger' : 'btn-primary'} btn-lg rounded-circle`} 
                    style={{ width: "60px", height: "60px" }}
                    onClick={toggleAudio}
                  >
                    <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                  </button>
                </div>
                
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: isPlaying ? "45%" : "0%" }}
                    aria-valuenow={isPlaying ? "45" : "0"}
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="card mb-4 stagger-item stagger-item-visible stagger-delay-1">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-question-circle me-2 text-primary"></i>
                  Answer the following questions
                </h5>
                
                {testQuestions[currentQuestion].questions.map((question, idx) => (
                  <div key={idx} className="question-container mb-4 p-3 border-bottom">
                    <p className="fw-bold mb-2">Question {idx + 1}: {question.question}</p>
                    <div className="ms-3">
                      {question.options.map((option, optIdx) => (
                        <div className="form-check mb-2" key={optIdx}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`question-${currentQuestion}-${idx}`}
                            id={`question-${currentQuestion}-${idx}-option-${optIdx}`}
                            checked={selectedAnswers[currentQuestion * 5 + idx] === optIdx}
                            onChange={() => handleAnswerSelect(idx, optIdx)}
                          />
                          <label 
                            className="form-check-label" 
                            htmlFor={`question-${currentQuestion}-${idx}-option-${optIdx}`}
                          >
                            {String.fromCharCode(65 + optIdx)}. {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="d-flex justify-content-between mt-4">
              <button 
                className="btn btn-outline-primary"
                onClick={prevSection}
                disabled={currentQuestion === 0}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Previous Section
              </button>
              
              {currentQuestion < testQuestions.length - 1 ? (
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
        </div>
      )}
      
      {/* For development purposes, showing transcript */}
      {hasStarted && (
        <div className="container py-3" style={{ maxWidth: "900px" }}>
          <div className="card mb-4 stagger-item stagger-item-visible stagger-delay-2">
            <div className="card-header bg-light">
              <button 
                className="btn btn-sm btn-outline-secondary" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#transcriptCollapse" 
                aria-expanded="false" 
                aria-controls="transcriptCollapse"
              >
                Show Transcript (Development Only)
              </button>
            </div>
            <div className="collapse" id="transcriptCollapse">
              <div className="card-body">
                <pre className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
                  {testQuestions[currentQuestion].transcript}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeningTest;
