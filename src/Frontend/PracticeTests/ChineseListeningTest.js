import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { runPrompt } from "../../AI/Model";
import { CHINESE_LISTENING_EVAL_PROMPT } from "../../AI/ResultPrompt";

const ChineseListeningTest = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let timer;
    if (hasStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert("时间到！正在提交测试。");
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  useEffect(() => {
    const loadData = async () => {
      if (!user || !user.id) return;

      try {
        const res = await axios.get(`http://localhost:5000/api/listening-progress/${user.id}?language=chinese`);
        const index = res.data.testIndex;
        setCurrentIndex(index);

        const jsonRes = await axios.get('/data/listening/chinese.json');
        setAudioData(jsonRes.data[index]);
      } catch (err) {
        console.error("加载测试数据时出错:", err);
        alert("加载测试失败。");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  const handleAnswer = (idx, value) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSubmit = async () => {
    if (!Object.keys(answers).length) {
      alert("请至少回答一个问题。");
      return;
    }

    const submission = [{
      title: audioData.text,
      questions: audioData.questions.map((q, idx) => ({
        question: q.question,
        userAnswer: answers[idx] || ""
      }))
    }];

    try {
      const evalPrompt = CHINESE_LISTENING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(evalPrompt);
      const aiResults = evalResponse.results;
      const details = evalResponse.results?.[0]?.details || [];

      await axios.post("http://localhost:5000/api/results", {
        test: "chinese",
        type: "listening",
        userId: user.id,
        total_score: aiResults.reduce((sum, r) => sum + r.score, 0),
        results: aiResults,
        details: audioData.text
      });

      navigate('/results/chinese-listening', {
        state: {
          aiResults,
          userScore: aiResults.reduce((sum, r) => sum + r.score, 0),
          details:details
        }
      });
    } catch (err) {
      console.error("AI 评估失败:", err);
      alert("评估过程中发生错误，请稍后再试。");
    }
  };

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">加载中...</span>
        </div>
        <p className="mt-3">正在加载听力测试...</p>
      </div>
    );
  }

  if (!audioData) return <p className="text-danger text-center mt-5">未找到测试数据。</p>;

  return (
    <div className="out">
      <div className="practice-test-container">
        {!hasStarted ? (
          <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
            <div className="content-wrapper p-4">
              <h1 className="heading-underline text-center mb-4">听力理解练习</h1>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <i className="bi bi-info-circle me-2 text-primary"></i>测试信息
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>时长：</strong>60分钟</li>
                    <li className="list-group-item"><strong>音频：</strong>仅播放一次</li>
                    <li className="list-group-item"><strong>问题：</strong>{audioData.questions.length} 个</li>
                  </ul>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                <button className="btn btn-primary btn-lg" onClick={handleStart}>
                  <i className="bi bi-play-circle me-2"></i>开始测试
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="heading-underline m-0">音频 {currentIndex + 1}</h2>
              <div className="timer bg-danger text-white px-4 py-2 rounded-pill">
                <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
              </div>
            </div>

            <div className="mb-4">
              <audio controls>
                <source src={`http://localhost:3000${audioData.audio}`} type="audio/mp3" />
                您的浏览器不支持音频播放。
              </audio>
            </div>

         

            {audioData.questions.map((q, idx) => (
              <div key={idx} className="mb-4">
                <h5>问题 {idx + 1}</h5>
                <p>{q.question}</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="请输入你的答案"
                  value={answers[idx] || ""}
                  onChange={(e) => handleAnswer(idx, e.target.value)}
                />
              </div>
            ))}

            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-success" onClick={handleSubmit}>
                提交测试 <i className="bi bi-check-circle ms-2"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChineseListeningTest;
