import React, { useState } from 'react';
import './Practice.css';

const ListeningPractice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What is the main purpose of the conversation?',
      options: [
        'A. To discuss a project',
        'B. To schedule a meeting',
        'C. To make a complaint',
        'D. To request information'
      ],
      correctAnswer: 'B'
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: 'What time did the speaker mention?',
      options: [
        'A. 10:00 AM',
        'B. 2:00 PM',
        'C. 3:30 PM',
        'D. 5:00 PM'
      ],
      correctAnswer: 'C'
    },
    {
      id: 3,
      type: 'short-answer',
      question: 'What is the speaker's main concern?',
      correctAnswer: 'The meeting time'
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: 'What is the speaker's attitude towards the situation?',
      options: [
        'A. Happy',
        'B. Indifferent',
        'C. Concerned',
        'D. Angry'
      ],
      correctAnswer: 'C'
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      if (question.type === 'multiple-choice' && answers[question.id] === question.correctAnswer) {
        score += 1;
      } else if (question.type === 'short-answer' && 
                 answers[question.id]?.toLowerCase() === question.correctAnswer.toLowerCase()) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="practice-test">
      <div className="test-header">
        <h2 className="text-primary mb-4">IELTS Listening Practice Test</h2>
        <p className="lead mb-4">Test your listening skills with these practice questions.</p>
      </div>

      {!showResults ? (
        <div className="test-content">
          <div className="question-container">
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
            <p className="question-text">{questions[currentQuestion].question}</p>

            {questions[currentQuestion].type === 'multiple-choice' && (
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <label key={index} className="option">
                    <input
                      type="radio"
                      name={`question-${questions[currentQuestion].id}`}
                      value={String.fromCharCode(65 + index)}
                      checked={answers[questions[currentQuestion].id] === String.fromCharCode(65 + index)}
                      onChange={() => handleAnswer(questions[currentQuestion].id, String.fromCharCode(65 + index))}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}

            {questions[currentQuestion].type === 'short-answer' && (
              <div className="short-answer">
                <input
                  type="text"
                  value={answers[questions[currentQuestion].id] || ''}
                  onChange={(e) => handleAnswer(questions[currentQuestion].id, e.target.value)}
                  placeholder="Type your answer here"
                />
              </div>
            )}

            <div className="controls">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(prev => prev + 1);
                  } else {
                    handleSubmit();
                  }
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
              </button>
            </div>
          </div>

          <div className="audio-player">
            <audio controls>
              <source src="/audio/ielts-listening-sample.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ) : (
        <div className="results">
          <h3>Test Results</h3>
          <p className="score">Your Score: {calculateScore()}/{questions.length}</p>
          <div className="detailed-results">
            {questions.map((question) => (
              <div key={question.id} className="result-item">
                <h4>Question {question.id}</h4>
                <p className="question-text">{question.question}</p>
                <div className="answer">
                  <strong>Your Answer:</strong> {answers[question.id] || 'Not answered'}
                </div>
                <div className={`correct ${answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                  <strong>Correct Answer:</strong> {question.correctAnswer}
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ListeningPractice;
