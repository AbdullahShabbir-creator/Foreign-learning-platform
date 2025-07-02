import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { runPrompt } from "../../AI/Model";
import { CHINESE_READING_PROMPT } from "../../AI/Prompt";
import { CHINESE_READING_EVAL_PROMPT } from "../../AI/ResultPrompt";

const ChineseReadingTest = () => {
  const [passages, setPassages] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !user.id) {
      alert("请先登录再开始测试。");
      return;
    }

    const fetchPassages = async () => {
      try {
        const data = await runPrompt(CHINESE_READING_PROMPT);
        setPassages(data.passages);
      } catch (err) {
        console.error("Error fetching Chinese reading test:", err);
        alert("加载任务失败，请稍后重试。");
      } finally {
        setLoading(false);
      }
    };

    fetchPassages();
  }, [user]);

  const handleAnswerChange = (passageIdx, qIdx, value) => {
    const key = `${passageIdx}-${qIdx}`;
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const submission = passages.map((passage, passageIdx) => ({
      title: `阅读任务 ${passageIdx + 1}`,
      questions: passage.questions.map((q, qIdx) => ({
        question: q.q,
        userAnswer: answers[`${passageIdx}-${qIdx}`] || "",
      })),
    }));

    try {
      const evalPrompt = CHINESE_READING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(evalPrompt);
      const aiResults = evalResponse.results;

      await axios.post("http://localhost:5000/api/results", {
        test: "chinese",
        type: "reading",
        userId: user.id,
        results: aiResults,
        total_score: aiResults.reduce((sum, r) => sum + r.score, 0),
      });

      navigate("/results/chinese-reading", {
        state: {
          aiResults,
          userScore: aiResults.reduce((sum, r) => sum + r.score, 0),
        },
      });
    } catch (err) {
      console.error("Evaluation error:", err);
      alert("评估出错，请重试。");
    }
  };

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">阅读任务正在加载中...</p>
      </div>
    );
  }

  return (
    <div className="out">
      <div
        className="container animate-fade-in"
        style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "40px" }}
      >
        {/* Header */}
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: 56, height: 56 }}
          >
            <i className="bi bi-book fs-3" />
          </div>
          <div>
            <h1 className="fw-bold mb-1" style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}>
              阅读理解{" "}
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
          阅读以下短文并回答问题。
        </p>

        {passages.map((passage, idx) => (
          <div className="card shadow mb-5 animate-slide-up" style={{ borderRadius: 18 }} key={idx}>
            <div className="card-body">
              <h5 className="card-title mb-3">阅读任务 {idx + 1}</h5>
              <p className="card-text mb-2">短文：</p>
              <blockquote
                className="blockquote px-3 py-2 mb-3"
                style={{
                  background: "#f8f9fa",
                  borderLeft: "4px solid #4361ee",
                  borderRadius: 8,
                }}
              >
                <p className="mb-0" style={{ fontSize: "1.1rem" }}>{passage.text}</p>
              </blockquote>
              {passage.questions.map((q, qidx) => (
                <div className="mb-3" key={qidx}>
                  <strong>问题 {qidx + 1}：</strong> {q.q}
                  <input
                    type="text"
                    className="form-control mt-2 mb-3"
                    placeholder={q.placeholder}
                    style={{ maxWidth: 400 }}
                    value={answers[`${idx}-${qidx}`] || ""}
                    onChange={(e) => handleAnswerChange(idx, qidx, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button className="btn btn-success btn-lg" onClick={handleSubmit}>
            提交测试
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChineseReadingTest;
