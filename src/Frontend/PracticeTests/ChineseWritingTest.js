import React, { useEffect, useState } from "react";
import { runPrompt } from "../../AI/Model";
import { CHINESE_WRITING_PROMPT } from "../../AI/Prompt";
import { CHINESE_WRITING_EVAL_PROMPT } from "../../AI/ResultPrompt";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const ChineseWritingTest = () => {
  const [prompts, setPrompts] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Fetch prompts on load
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await runPrompt(CHINESE_WRITING_PROMPT);
        console.log("📄 Writing prompts loaded:", data);
        setPrompts(data.prompts);
        setAnswers(new Array(data.prompts.length).fill(""));
      } catch (err) {
        console.error("❌ Failed to fetch prompts:", err);
        alert("加载写作任务失败，请稍后重试。");
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  const handleAnswerChange = (idx, value) => {
    const updated = [...answers];
    updated[idx] = value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);

    const submission = prompts.map((prompt, idx) => ({
      title: prompt.title,
      description: prompt.description,
      userAnswer: answers[idx] || "",
    }));

    try {
      const promptText = CHINESE_WRITING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(promptText);

      const totalScore = evalResponse.results.reduce((sum, r) => sum + r.score, 0);

      // Save result to backend
      const payload = {
        userId: user?.id,
        test: "chinese",
        type: "writing",
        total_score: totalScore,
        results: evalResponse.results,
      };

      await axios.post("http://localhost:5000/api/results", payload);

      // Navigate to results page
      navigate("/results/chinese", {
        state: {
          aiResults: evalResponse.results,
          userScore: totalScore,
        },
      });
    } catch (err) {
      console.error("❌ Evaluation error:", err);
      alert("评估过程中出现错误，请稍后再试。");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">写作任务正在加载中...</p>
      </div>
    );
  }

  return (
    <div className="out">
      <div className="container animate-fade-in" style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "40px" }}>
        {/* Header */}
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: 56, height: 56 }}
          >
            <i className="bi bi-pencil fs-3" />
          </div>
          <div>
            <h1 className="fw-bold mb-1" style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}>
              写作 <span className="text-muted" style={{ fontSize: "1.2rem" }}>(Writing Test)</span>
            </h1>
            <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
          </div>
        </div>

        <p className="lead mb-4" style={{ color: "#333" }}>请根据每个主题写一篇短文。</p>

        {prompts.map((prompt, idx) => (
          <div className="card shadow mb-5 animate-slide-up" style={{ borderRadius: 18 }} key={idx}>
            <div className="card-body">
              <h5 className="card-title mb-3">写作任务 {idx + 1}：{prompt.title}</h5>
              <p className="card-text mb-2">{prompt.description}</p>
              <textarea
                className="form-control mb-3"
                rows={7}
                placeholder={prompt.placeholder}
                value={answers[idx]}
                onChange={(e) => handleAnswerChange(idx, e.target.value)}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            className="btn btn-success px-4"
            onClick={handleSubmit}
            disabled={submitting}
            type="button"
          >
            {submitting ? "提交中..." : "提交所有作文"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChineseWritingTest;
