import React, { useState, useEffect, useRef } from "react";
import "../../../../App.css";
import "../../../../index.css";

const GermanSpeakingTest = () => {
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
    alert("Ihre Aufnahmen wurden abgegeben. Sie erhalten Feedback innerhalb von 24-48 Stunden.");
  };

  // Speaking test parts
  const speakingParts = [
    {
      id: 1,
      title: "Teil 1: Einführung und Interview",
      description: "In diesem Teil stellt sich der Prüfer vor und bittet Sie, sich selbst vorzustellen und Ihre Identität zu bestätigen. Der Prüfer stellt dann allgemeine Fragen zu vertrauten Themen wie Familie, Arbeit, Studium und Hobbys.",
      duration: "4-5 Minuten",
      prepTime: 0,
      questions: [
        "Können Sie mir Ihren vollen Namen sagen?",
        "Woher kommen Sie?",
        "Arbeiten Sie oder studieren Sie?",
        "Was machen Sie in Ihrer Freizeit?",
        "Mögen Sie lieber in einem Haus oder in einer Wohnung wohnen? Warum?",
        "Welche Art von Musik hören Sie am liebsten?",
        "Reisen Sie oft?",
        "Mögen Sie kochen? Warum?",
        "Welche Art von Verkehrsmitteln nutzen Sie am häufigsten?",
        "Finden Sie, dass der öffentliche Nahverkehr in Ihrer Stadt gut ist?"
      ]
    },
    {
      id: 2,
      title: "Teil 2: Einzelpräsentation",
      description: "In diesem Teil gibt Ihnen der Prüfer eine Aufgabenkarte mit einem Thema und Punkten, die Sie in Ihrer Präsentation berücksichtigen sollten. Sie haben 1 Minute Zeit, sich vorzubereiten, und dann sollten Sie für 1-2 Minuten über das Thema sprechen. Der Prüfer kann eventuell 1-2 Nachfragefragen stellen.",
      duration: "3-4 Minuten (einschließlich 1 Minute Vorbereitung)",
      prepTime: 60,
      taskCard: {
        topic: "Beschreiben Sie ein Buch, das Sie kürzlich gelesen haben.",
        points: [
          "Über was handelt das Buch?",
          "Wann haben Sie es gelesen?",
          "Warum haben Sie sich für dieses Buch entschieden?",
          "Wie haben Sie es gefunden?"
        ]
      },
      followUpQuestions: [
        "Würden Sie dieses Buch weiterempfehlen? Warum?",
        "Mögen Sie lieber physische Bücher oder E-Books? Warum?"
      ]
    },
    {
      id: 3,
      title: "Teil 3: Diskussion",
      description: "In diesem Teil stellt Ihnen der Prüfer weitere Fragen zum Thema aus Teil 2. Dies gibt Ihnen die Möglichkeit, über abstraktere Themen und Ideen zu diskutieren.",
      duration: "4-5 Minuten",
      prepTime: 0,
      questions: [
        "Finden Sie, dass das Lesen heutzutage weniger beliebt wird? Warum?",
        "Wie haben digitale Technologien das Leseverhalten beeinflusst?",
        "Was sind die Vorteile und Nachteile von E-Books im Vergleich zu gedruckten Büchern?",
        "Wie wichtig ist es, dass Kinder gute Lesegewohnheiten entwickeln?",
        "Welche Arten von Büchern sind in Ihrem Land am beliebtesten?",
        "Sollten Schulen Studenten dazu ermutigen, mehr Fiktion oder Non-Fiktion zu lesen?",
        "Wie könnte sich das Leseverhalten in Zukunft ändern?",
        "Was ist der Wert des Literaturstudiums an der Universität?"
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">Deutsche Sprech-Übung</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Testinformationen</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Dauer:</strong> 11-14 Minuten
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-mic me-3 text-primary"></i>
                    <div>
                      <strong>Format:</strong> Persönliches Interview mit einem Prüfer in drei Teilen
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-person-lines-fill me-3 text-primary"></i>
                    <div>
                      <strong>Bewertung:</strong> Der Test prüft Ihre Flüssigkeit, Vokabular, Grammatik und Aussprache
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Wichtig:</strong> Dies ist eine Simulation - Sie würden in einem echten Test direkt mit einem Prüfer sprechen
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips für Erfolg</h5>
                <ul>
                  <li>Sprechen Sie klar und in einem natürlichen Tempo - nicht zu schnell oder zu langsam</li>
                  <li>Verwenden Sie ein vielfältiges Vokabular und Satzstrukturen</li>
                  <li>In Teil 2 nutzen Sie Ihre Vorbereitungszeit, um sich Notizen zu machen</li>
                  <li>Unterstützen Sie Ihre Meinungen mit Beispielen aus Ihrer Erfahrung</li>
                  <li>Memorisieren Sie keine vorgefertigten Antworten - Prüfer erkennen das</li>
                  <li>Falls Sie eine Frage nicht verstehen, bitten Sie den Prüfer, sie zu wiederholen</li>
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
            <h2 className="heading-underline m-0">{speakingParts[currentPart].title}</h2>
            {prepTime > 0 && (
              <div className="timer bg-warning text-dark px-4 py-2 rounded-pill">
                <i className="bi bi-hourglass-split me-2"></i> Vorbereitungszeit: {formatTime(prepTime)}
              </div>
            )}
            {isRecording && (
              <div className="timer bg-danger text-white px-4 py-2 rounded-pill d-flex align-items-center">
                <span className="recording-indicator me-2"></span>
                Aufnahme: {formatTime(speakTime)}
              </div>
            )}
          </div>
          
          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="mb-4">
              <p className="lead">{speakingParts[currentPart].description}</p>
              <div className="d-flex align-items-center text-muted mb-3">
                <i className="bi bi-clock me-2"></i>
                <span>Dauer: {speakingParts[currentPart].duration}</span>
              </div>
            </div>
            
            {/* Part 1: Introduction and Interview */}
            {currentPart === 0 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">Interviewfragen</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Der Prüfer stellt Ihnen mehrere Fragen zu sich selbst und vertrauten Themen. Bitte machen Sie eine Aufnahme Ihrer Antworten zur Übung.</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">Frage {index + 1}: {question}</p>
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
                    <h5 className="card-title m-0">Aufgabenkarte</h5>
                  </div>
                  <div className="card-body">
                    <p className="fw-bold mb-3">{speakingParts[currentPart].taskCard.topic}</p>
                    <p>Sie sollten folgende Punkte berücksichtigen:</p>
                    <ul>
                      {speakingParts[currentPart].taskCard.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {prepTime === 0 && (
                      <div className="mt-3">
                        <p>Nachfragefragen:</p>
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
                    Nutzen Sie die Minute, um sich vorzubereiten. Sie können Notizen machen.
                  </div>
                )}
                {prepTime === 0 && (
                  <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    Sie sollten jetzt für 1-2 Minuten über das Thema sprechen. Klicken Sie auf den "Aufnahme starten"-Button, wenn Sie bereit sind.
                  </div>
                )}
              </div>
            )}
            
            {/* Part 3: Discussion */}
            {currentPart === 2 && (
              <div className="part-content animate-fade-in">
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h5 className="card-title m-0">Diskussionsfragen</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Der Prüfer stellt Ihnen tiefere Fragen zum Thema aus Teil 2. Versuchen Sie, ausführliche Antworten mit Erklärungen und Beispielen zu geben.</p>
                    <ul className="list-group list-group-flush">
                      {speakingParts[currentPart].questions.map((question, index) => (
                        <li key={index} className="list-group-item">
                          <p className="fw-bold mb-0">Frage {index + 1}: {question}</p>
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
                {!isRecording ? "Klicken Sie, um eine Aufnahme zu starten" : "Klicken Sie, um die Aufnahme zu stoppen"}
              </p>
            </div>
            
            {/* Recordings list */}
            {recordings.length > 0 && (
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="card-title m-0">Ihre Aufnahmen</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Teil</th>
                          <th>Dauer</th>
                          <th>Aktionen</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recordings.map((recording, index) => (
                          <tr key={recording.id}>
                            <td>{index + 1}</td>
                            <td>Teil {recording.part}</td>
                            <td>{recording.duration}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-2">
                                <i className="bi bi-play-fill"></i> Abspielen
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i> Löschen
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
              Vorheriger Teil
            </button>
            
            {currentPart < speakingParts.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextPart}
              >
                Nächster Teil
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

export default GermanSpeakingTest;
