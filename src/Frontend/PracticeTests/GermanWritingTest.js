import React, { useEffect, useState } from "react";
import { runPrompt } from "../../AI/Model";
import { GERMAN_WRITING_PROMPT } from "../../AI/Prompt";

const GermanWritingTest = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await runPrompt(GERMAN_WRITING_PROMPT);
        console.log("Fetched German writing prompts:", data);
        setPrompts(data.prompts);
      } catch (err) {
        console.error("Error fetching prompts:", err);
        alert("Fehler beim Laden der Schreibaufgaben. Bitte versuchen Sie es erneut.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Die Schreibaufgaben werden geladen...</p>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "40px" }}>
      <div className="d-flex align-items-center mb-4">
        <div
          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{ width: 56, height: 56 }}
        >
          <i className="bi bi-pencil fs-3" />
        </div>
        <div>
          <h1 className="fw-bold mb-1" style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}>
            Schreiben <span className="text-muted" style={{ fontSize: "1.2rem" }}>(Writing Test)</span>
          </h1>
          <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
        </div>
      </div>
      <p className="lead mb-4" style={{ color: "#333" }}>Schreiben Sie zu jedem Thema einen kurzen Aufsatz.</p>
      {prompts.map((prompt, idx) => (
        <div className="card shadow mb-5 animate-slide-up" style={{ borderRadius: 18 }} key={idx}>
          <div className="card-body">
            <h5 className="card-title mb-3">Schreibaufgabe {idx + 1}: {prompt.title}</h5>
            <p className="card-text mb-2">{prompt.description}</p>
            <textarea className="form-control mb-3" rows={7} placeholder={prompt.placeholder} style={{ maxWidth: '100%' }} />
            <button className="btn btn-primary" disabled>Aufsatz einreichen (Demo)</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GermanWritingTest;
