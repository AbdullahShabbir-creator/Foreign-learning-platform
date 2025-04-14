import React, { useState } from 'react';
import './Practice.css';

const ReadingPractice = () => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const passages = [
    {
      id: 1,
      title: "The Benefits of Regular Exercise",
      text: `Regular exercise has been shown to have numerous benefits for both physical and mental health. 
      It can help prevent chronic diseases, improve mood, and enhance overall quality of life. 
      According to a study published in the Journal of Sports Medicine, people who engage in regular 
      physical activity have a lower risk of developing heart disease, diabetes, and certain types of cancer.
      Additionally, exercise has been proven to reduce stress levels and improve cognitive function.
      The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic 
      physical activity throughout the week for adults aged 18-64.",
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'According to the passage, what is one benefit of regular exercise?',
          options: [
            'A. Increased risk of heart disease',
            'B. Lower risk of developing chronic diseases',
            'C. Higher stress levels',
            'D. Decreased cognitive function'
          ],
          correctAnswer: 'B'
        },
        {
          id: 2,
          type: 'short-answer',
          question: 'How many minutes of moderate-intensity aerobic physical activity does the World Health Organization recommend for adults aged 18-64?',
          correctAnswer: '150 minutes'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'Which of the following is NOT mentioned as a benefit of exercise in the passage?',
          options: [
            'A. Prevention of chronic diseases',
            'B. Improvement of mood',
            'C. Enhancement of quality of life',
            'D. Increased risk of cancer'
          ],
          correctAnswer: 'D'
        }
      ]
    },
    {
      id: 2,
      title: "The Impact of Technology on Communication",
      text: `The rapid advancement of technology has significantly transformed the way we communicate. 
      Social media platforms have made it easier than ever to connect with people around the world. 
      However, this convenience comes with its own set of challenges. A study by the University of California 
      found that while social media can enhance social connections, it can also lead to feelings of isolation 
      and decreased face-to-face interactions. The study suggests that a balanced approach to technology 
      use is essential for maintaining healthy relationships and mental well-being.",
      questions: [
        {
          id: 4,
          type: 'multiple-choice',
          question: 'What has significantly transformed the way we communicate according to the passage?',
          options: [
            'A. Social media platforms',
            'B. Face-to-face interactions',
            'C. Decreased technology use',
            'D. Reduced social connections'
          ],
          correctAnswer: 'A'
        },
        {
          id: 5,
          type: 'short-answer',
          question: 'What did the University of California study find about social media?',
          correctAnswer: 'It can enhance social connections but also lead to feelings of isolation'
        },
        {
          id: 6,
          type: 'multiple-choice',
          question: 'What does the passage suggest is essential for maintaining healthy relationships?',
          options: [
            'A. Increased social media use',
            'B. Decreased technology use',
            'C. A balanced approach to technology use',
            'D. Complete avoidance of technology'
          ],
          correctAnswer: 'C'
        }
      ]
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
    passages.forEach(passage => {
      passage.questions.forEach(question => {
        if (question.type === 'multiple-choice' && answers[question.id] === question.correctAnswer) {
          score += 1;
        } else if (question.type === 'short-answer' && 
                 answers[question.id]?.toLowerCase() === question.correctAnswer.toLowerCase()) {
          score += 1;
        }
      });
    });
    return score;
  };

  return (
    <div className="practice-test">
      <div className="test-header">
        <h2 className="text-primary mb-4">IELTS Reading Practice Test</h2>
        <p className="lead mb-4">Test your reading comprehension skills with these practice passages.</p>
      </div>

      {!showResults ? (
        <div className="test-content">
          <div className="passage-container">
            <h3>Passage {currentPassage + 1} of {passages.length}</h3>
            <h4 className="passage-title">{passages[currentPassage].title}</h4>
            <div className="passage-text">
              {passages[currentPassage].text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <div className="questions">
              {passages[currentPassage].questions.map((question) => (
                <div key={question.id} className="question">
                  <h5>Question {question.id}</h5>
                  <p className="question-text">{question.question}</p>

                  {question.type === 'multiple-choice' && (
                    <div className="options">
                      {question.options.map((option, index) => (
                        <label key={index} className="option">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={String.fromCharCode(65 + index)}
                            checked={answers[question.id] === String.fromCharCode(65 + index)}
                            onChange={() => handleAnswer(question.id, String.fromCharCode(65 + index))}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'short-answer' && (
                    <div className="short-answer">
                      <input
                        type="text"
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        placeholder="Type your answer here"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="controls">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentPassage(prev => Math.max(0, prev - 1))}
                disabled={currentPassage === 0}
              >
                Previous Passage
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (currentPassage < passages.length - 1) {
                    setCurrentPassage(prev => prev + 1);
                  } else {
                    handleSubmit();
                  }
                }}
              >
                {currentPassage < passages.length - 1 ? 'Next Passage' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="results">
          <h3>Test Results</h3>
          <p className="score">Your Score: {calculateScore()}/{passages.flatMap(p => p.questions).length}</p>
          <div className="detailed-results">
            {passages.flatMap(passage => passage.questions).map((question) => (
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

export default ReadingPractice;
