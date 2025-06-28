import React, { useState, useEffect } from "react";
import { runPrompt } from "../../AI/Model"; // Assuming you have this to call AI
import { IELTS_READING_PROMPT_GERMAN } from "../../AI/Prompt"; // Your new prompt

const GermanReadingTest = () => {
  const [passages, setPassages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPassages = async () => {
      try {
        const data = await runPrompt(IELTS_READING_PROMPT_GERMAN);
        console.log("Fetched German passages:", data);
        setPassages(data.passages);
      } catch (err) {
        console.error("Error fetching passages:", err);
        alert("Fehler beim Laden der Aufgaben. Bitte versuchen Sie es erneut.");
      } finally {
        setLoading(false);
      }
    };

    fetchPassages();
  }, []);

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Die Leseaufgaben werden geladen...</p>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "40px" }}>
      {/* Header with icon and modern style */}
      <div className="d-flex align-items-center mb-4">
        <div
          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: 56, height: 56 }}
        >
          <i className="bi bi-book fs-3" />
        </div>
        <div>
          <h1 className="fw-bold mb-1" style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}>
            Leseverständnis <span className="text-muted" style={{ fontSize: "1.2rem" }}>(Reading Test)</span>
          </h1>
          <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
        </div>
      </div>
      <p className="lead mb-4" style={{ color: "#333" }}>
        Lesen Sie die folgenden Texte und beantworten Sie die Fragen.
      </p>
      {passages.map((passage, idx) => (
        <div className="card shadow mb-5 animate-slide-up" style={{ borderRadius: 18 }} key={idx}>
          <div className="card-body">
            <h5 className="card-title mb-3">Leseaufgabe {idx + 1}</h5>
            <p className="card-text mb-2">Text:</p>
            <blockquote
              className="blockquote px-3 py-2 mb-3"
              style={{ background: "#f8f9fa", borderLeft: "4px solid #4361ee", borderRadius: 8 }}
            >
              <p className="mb-0" style={{ fontSize: "1.1rem" }}>{passage.text}</p>
            </blockquote>
            {passage.questions.map((q, qidx) => (
              <div className="mb-3" key={qidx}>
                <strong>Frage {qidx + 1}:</strong> {q.q}
                <input
                  type="text"
                  className="form-control mt-2 mb-3"
                  placeholder={q.placeholder}
                  style={{ maxWidth: 400 }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GermanReadingTest;
