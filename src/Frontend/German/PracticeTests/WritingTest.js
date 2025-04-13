import React, { useState, useEffect } from "react";
import "../../../../App.css";
import "../../../../index.css";

const GermanWritingTest = () => {
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
      alert("Die Zeit ist abgelaufen! Ihre Antworten wurden abgesendet.");
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
      alert("Achtung: Ein oder beide Aufsätze sind möglicherweise zu kurz. Aufgabe 1 sollte mindestens 100 Wörter haben und Aufgabe 2 mindestens 150 Wörter.");
      return;
    }
    
    alert("Ihr Schreibtest wurde abgegeben. Sie erhalten Feedback innerhalb von 24-48 Stunden.");
  };

  // Writing tasks
  const writingTasks = [
    {
      id: 1,
      title: "Aufgabe 1 - Beschreibung",
      instruction: "Sie sollten etwa 20 Minuten für diese Aufgabe verwenden.",
      description: "Beschreiben Sie das gegebene Diagramm oder die Tabelle und berücksichtigen Sie die wichtigsten Trends und Zusammenhänge.",
      imageUrl: "https://example.com/images/german_chart.png", // Replace with actual image
      wordCount: 100,
      timeRecommended: 20
    },
    {
      id: 2,
      title: "Aufgabe 2 - Argumentation",
      instruction: "Sie sollten etwa 40 Minuten für diese Aufgabe verwenden.",
      description: "Schreiben Sie einen Aufsatz über das Thema: 'Die Vorteile und Nachteile des Fernstudiums'. Stellen Sie Ihre Argumente klar und strukturiert dar und geben Sie Beispiele.",
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
            <h1 className="heading-underline text-center mb-4">Deutsche Schreib-Übung</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Testinformationen</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Dauer:</strong> 60 Minuten
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>Aufgaben:</strong> 2 Schreibaufgaben
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-hash me-3 text-primary"></i>
                    <div>
                      <strong>Wortanzahl:</strong> Mindestens 100 Wörter pro Aufgabe
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Wichtig:</strong> Aufgabe 2 trägt mehr zur Bewertung bei als Aufgabe 1
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips für Erfolg</h5>
                <ul>
                  <li>Planen Sie Ihre Antwort vor dem Schreiben</li>
                  <li>Verwenden Sie eine klare Struktur (Einleitung, Hauptteil, Schluss)</li>
                  <li>Verwenden Sie verschiedene Vokabeln und Ausdrücke</li>
                  <li>Überprüfen Sie Ihre Rechtschreibung und Grammatik</li>
                  <li>Verwenden Sie Übergangswörter und -phrasen</li>
                  <li>Lassen Sie sich Zeit zum Überprüfen am Ende</li>
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
                Übung starten
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
                    alt="Aufgabenvisual" 
                    className="img-fluid border rounded shadow-sm"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}
              
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted mb-0">
                  <i className="bi bi-hash me-2"></i>
                  Mindestens {writingTasks[currentTask].wordCount} Wörter
                </p>
                <p className="text-muted mb-0">
                  <i className="bi bi-clock me-2"></i>
                  Empfohlene Zeit: {writingTasks[currentTask].timeRecommended} Minuten
                </p>
              </div>
            </div>
            
            <div className="form-group mb-3">
              <label htmlFor="essayText" className="form-label fw-bold">Ihre Antwort:</label>
              <textarea
                id="essayText"
                className="form-control"
                rows="12"
                placeholder="Beginnen Sie mit Ihrer Antwort hier..."
                value={essays[currentTask]}
                onChange={handleEssayChange}
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              ></textarea>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className={`word-count ${getWordCountColor(currentTask)}`}>
                <i className="bi bi-hash me-1"></i>
                Wortanzahl: <strong>{wordCounts[currentTask]}</strong> / {writingTasks[currentTask].wordCount} minimum
              </div>
              
              <div className="writing-controls">
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="Fett"
                  onClick={() => document.execCommand('bold')}
                >
                  <i className="bi bi-type-bold"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="Kursiv"
                  onClick={() => document.execCommand('italic')}
                >
                  <i className="bi bi-type-italic"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  title="Unterstrichen"
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
              Vorherige Aufgabe
            </button>
            
            {currentTask < writingTasks.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextTask}
              >
                Nächste Aufgabe
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

export default GermanWritingTest;
