import React, { useState, useEffect } from "react";
import "../../../../App.css";
import "../../../../index.css";

const GermanReadingTest = () => {
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
      alert("Die Zeit ist abgelaufen! Ihre Antworten wurden abgesendet.");
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
      alert("Bitte beantworten Sie mindestens eine Frage.");
      return;
    }
    
    alert("Ihre Antworten wurden abgesendet. Sie erhalten Feedback innerhalb von 24-48 Stunden.");
  };

  // Reading test texts and questions
  const readingTexts = [
    {
      id: 1,
      title: "Geschäftsbericht",
      difficulty: "Mittel",
      text: "Die Firma XYZ hat im letzten Quartal einen signifikanten Umsatzzuwachs von 15% verzeichnet. Dies ist vor allem auf die erfolgreiche Einführung eines neuen Produkts im asiatischen Markt zurückzuführen. Die Produktionskapazitäten wurden um 20% erhöht, um mit der steigenden Nachfrage Schritt halten zu können.\n\nZugleich hat die Firma ihre digitale Präsenz weiter ausgebaut. Die Online-Umsätze wuchsen um 25% im Vergleich zum Vorjahr. Besonders erfolgreich waren die Social-Media-Kampagnen, die einen Engagement-Rate von 12% erzielten.\n\nFür das kommende Quartal sind weitere Investitionen in die Produktentwicklung geplant. Ein besonderer Fokus liegt auf der Nachhaltigkeit der Produkte, wobei die Firma ihre CO2-Emissionen um 10% reduzieren möchte.",
      questions: [
        {
          id: 1,
          text: "Welche Marktregion trug am meisten zum Umsatzzuwachs bei?",
          options: [
            "Europa",
            "Asien",
            "Amerika",
            "Afrika"
          ],
          correct: 1
        },
        {
          id: 2,
          text: "Um wie viel Prozent wurden die Produktionskapazitäten erhöht?",
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
          text: "Welches Thema wird in der Zukunft besonders betont?",
          options: [
            "Digitalisierung",
            "Globalisierung",
            "Nachhaltigkeit",
            "Innovation"
          ],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title: "Wirtschaftsbericht",
      difficulty: "Schwer",
      text: "Die deutsche Wirtschaft hat sich im ersten Quartal 2023 positiv entwickelt. Die Exporte wuchsen um 8,2% im Vergleich zum Vorjahr, während die Importe um 6,5% stiegen. Dies führte zu einem leicht verbesserten Handelsbilanzüberschuss.\n\nDie Arbeitslosenquote sank im Vergleich zum Vorjahr um 0,4 Prozentpunkte auf 4,9%. Die Konsumausgaben der privaten Haushalte stiegen um 3,1%, was vor allem auf eine Erhöhung des Mindestlohns zurückzuführen ist.\n\nDie Investitionen in Maschinen und Ausrüstung wuchsen um 5,8%, während die Bauinvestitionen um 4,2% zurückgingen. Die Bundesbank hat die Inflationsrate für das aktuelle Quartal auf 7,1% prognostiziert.",
      questions: [
        {
          id: 1,
          text: "Um wie viel Prozent wuchsen die Exporte?",
          options: [
            "6,5%",
            "7,1%",
            "8,2%",
            "9,0%"
          ],
          correct: 2
        },
        {
          id: 2,
          text: "Welche Investitionen gingen zurück?",
          options: [
            "Maschinen und Ausrüstung",
            "Bauinvestitionen",
            "Forschung und Entwicklung",
            "Digitalisierung"
          ],
          correct: 1
        },
        {
          id: 3,
          text: "Welche Prognose wurde für die Inflationsrate gemacht?",
          options: [
            "6,5%",
            "7,1%",
            "8,2%",
            "9,0%"
          ],
          correct: 1
        }
      ]
    }
  ];

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">Deutsche Leseverständnis-Übung</h1>
            
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
                    <i className="bi bi-file-text me-3 text-primary"></i>
                    <div>
                      <strong>Textanzahl:</strong> 5 Texte
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-question-circle me-3 text-primary"></i>
                    <div>
                      <strong>Frageanzahl:</strong> 25 Fragen
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Wichtig:</strong> Lesen Sie die Texte sorgfältig und beachten Sie Details
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
                Übung starten
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
              <p className="mb-1">Schwierigkeitsgrad: {readingTexts[currentText].difficulty}</p>
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
              onClick={prevText}
              disabled={currentText === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Vorheriger Text
            </button>
            
            {currentText < readingTexts.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextText}
              >
                Nächster Text
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

export default GermanReadingTest;
