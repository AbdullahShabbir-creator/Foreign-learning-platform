import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/animations.css";

const WritingTest = () => {
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
      // Auto-submit when time runs out
      alert("Time's up! Your answers have been submitted.");
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
    // In a real application, this would send the essays to a server for grading
    // For now, we'll just show a confirmation
    if (wordCounts[0] < 150 || wordCounts[1] < 250) {
      alert("Warning: One or both of your essays may be too short. Task 1 should be at least 150 words and Task 2 should be at least 250 words.");
      return;
    }
    
    alert("Your writing test has been submitted for evaluation. You would typically receive feedback within 24-48 hours.");
  };

  // Writing tasks
  const writingTasks = [
    {
      id: 1,
      title: "Writing Task 1",
      instruction: "You should spend about 20 minutes on this task.",
      description: "The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
      imageUrl: "https://ielts-up.com/images/chart.png", // Replace with your actual chart image
      wordCount: 150,
      timeRecommended: 20
    },
    {
      id: 2,
      title: "Writing Task.2",
      instruction: "You should spend about 40 minutes on this task.",
      description: "Some people think that parents should teach children how to be good members of society. Others, however, believe that school is the place to learn this.\n\nDiscuss both these views and give your own opinion.",
      wordCount: 250,
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
            <h1 className="heading-underline text-center mb-4">IELTS Writing Practice Test</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Test Information</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Duration:</strong> 60 minutes
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>Tasks:</strong> 2 writing tasks
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-journal-text me-3 text-primary"></i>
                    <div>
                      <strong>Task 1:</strong> Write a report based on visual information (chart, graph, table, diagram, or map)
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-journal-text me-3 text-primary"></i>
                    <div>
                      <strong>Task 2:</strong> Write an essay in response to a point of view, argument, or problem
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Important:</strong> Task 2 contributes more to your final score than Task 1
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips for Success</h5>
                <ul>
                  <li>Spend about 20 minutes on Task 1 (minimum 150 words)</li>
                  <li>Spend about 40 minutes on Task 2 (minimum 250 words)</li>
                  <li>Plan your response before you start writing</li>
                  <li>Organize your ideas into clear paragraphs</li>
                  <li>Use a range of vocabulary and grammatical structures</li>
                  <li>Leave a few minutes to review and correct your work</li>
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
                    alt="Task visual" 
                    className="img-fluid border rounded shadow-sm"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}
              
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted mb-0">
                  <i className="bi bi-pencil me-2"></i>
                  Write at least {writingTasks[currentTask].wordCount} words
                </p>
                <p className="text-muted mb-0">
                  <i className="bi bi-clock me-2"></i>
                  Recommended time: {writingTasks[currentTask].timeRecommended} minutes
                </p>
              </div>
            </div>
            
            <div className="form-group mb-3">
              <label htmlFor="essayText" className="form-label fw-bold">Your Answer:</label>
              <textarea
                id="essayText"
                className="form-control"
                rows="12"
                placeholder="Start writing your answer here..."
                value={essays[currentTask]}
                onChange={handleEssayChange}
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              ></textarea>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <div className={`word-count ${getWordCountColor(currentTask)}`}>
                <i className="bi bi-hash me-1"></i>
                Word Count: <strong>{wordCounts[currentTask]}</strong> / {writingTasks[currentTask].wordCount} minimum
              </div>
              
              <div className="writing-controls">
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="Bold"
                  onClick={() => document.execCommand('bold')}
                >
                  <i className="bi bi-type-bold"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary me-2"
                  title="Italic"
                  onClick={() => document.execCommand('italic')}
                >
                  <i className="bi bi-type-italic"></i>
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  title="Underline"
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
              Previous Task
            </button>
            
            {currentTask < writingTasks.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextTask}
              >
                Next Task
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
      )}
    </div>
  );
};

export default WritingTest;
