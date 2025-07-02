import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { runPrompt } from "../../AI/Model";
import { IELTS_READING_PROMPT_GERMAN } from "../../AI/Prompt";
import { GERMAN_READING_EVAL_PROMPT } from "../../AI/ResultPrompt";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const GermanReadingTest = () => {
  const [passages, setPassages] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [userReady, setUserReady] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  // Check for valid user
  useEffect(() => {
    if (!user) return; // Wait for user to load
    if (!user.id) {
      alert("Bitte melden Sie sich an, um den Test zu machen.");
      navigate("/login");
    } else {
      setUserReady(true);
    }
  }, [user, navigate]);

  // Fetch German reading passages once user is validated
  useEffect(() => {
    if (!userReady) return;

    const fetchPassages = async () => {
      try {
        const data = await runPrompt(IELTS_READING_PROMPT_GERMAN);
        setPassages(data.passages);
      } catch (err) {
        console.error("Error fetching passages:", err);
        alert("Fehler beim Laden der Aufgaben. Bitte versuchen Sie es erneut.");
      } finally {
        setLoading(false);
      }
    };

    fetchPassages();
  }, [userReady]);

  const handleAnswerChange = (passageIdx, qIdx, value) => {
    const key = `${passageIdx}-${qIdx}`;
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = async () => {
    const submission = passages.map((passage, passageIdx) => ({
      title: `Leseaufgabe ${passageIdx + 1}`,
      questions: passage.questions.map((q, qIdx) => ({
        question: q.q,
        userAnswer: answers[`${passageIdx}-${qIdx}`] || "",
      })),
    }));

    try {
      const evalPrompt = GERMAN_READING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(evalPrompt);
      const aiResults = evalResponse.results;
      const totalScore = aiResults.reduce((sum, r) => sum + r.score, 0);

      await axios.post("http://localhost:5000/api/results", {
        userId: user.id,
        test: "german",
        type: "reading",
        total_score: totalScore,
        results: aiResults,
      });

      navigate("/results/german-reading", {
        state: {
          aiResults,
          userScore: totalScore,
        },
      });
    } catch (err) {
      console.error("Evaluation error:", err);
      alert("Fehler bei der Bewertung. Bitte versuchen Sie es erneut.");
    }
  };

  if (!userReady || loading) {
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
    <div className="out">
      <div
        className="container animate-fade-in"
        style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "40px" }}
      >
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: 56, height: 56 }}
          >
            <i className="bi bi-book fs-3" />
          </div>
          <div>
            <h1
              className="fw-bold mb-1"
              style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}
            >
              Leseverständnis{" "}
              <span className="text-muted" style={{ fontSize: "1.2rem" }}>
                (Reading Test)
              </span>
            </h1>
            <div
              style={{
                height: "4px",
                width: "70px",
                background: "#f72585",
                borderRadius: "9999px",
              }}
            ></div>
          </div>
        </div>
        <p className="lead mb-4" style={{ color: "#333" }}>
          Lesen Sie die folgenden Texte und beantworten Sie die Fragen.
        </p>

        {passages.map((passage, idx) => (
          <div
            className="card shadow mb-5 animate-slide-up"
            style={{ borderRadius: 18 }}
            key={idx}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">Leseaufgabe {idx + 1}</h5>
              <p className="card-text mb-2">Text:</p>
              <blockquote
                className="blockquote px-3 py-2 mb-3"
                style={{
                  background: "#f8f9fa",
                  borderLeft: "4px solid #4361ee",
                  borderRadius: 8,
                }}
              >
                <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                  {passage.text}
                </p>
              </blockquote>
              {passage.questions.map((q, qidx) => (
                <div className="mb-3" key={qidx}>
                  <strong>Frage {qidx + 1}:</strong> {q.q}
                  <input
                    type="text"
                    className="form-control mt-2 mb-3"
                    placeholder={q.placeholder}
                    style={{ maxWidth: 400 }}
                    value={answers[`${idx}-${qidx}`] || ""}
                    onChange={(e) =>
                      handleAnswerChange(idx, qidx, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button className="btn btn-success btn-lg" onClick={handleSubmit}>
            Test einreichen
          </button>
        </div>
      </div>
    </div>
  );
};

export default GermanReadingTest;
