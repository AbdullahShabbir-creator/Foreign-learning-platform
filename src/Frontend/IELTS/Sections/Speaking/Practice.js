import React, { useState } from 'react';
import './Practice.css';

const SpeakingPractice = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const parts = [
    {
      id: 1,
      title: 'Part 1 - Introduction and Interview',
      description: 'The examiner will ask you general questions about yourself and a range of familiar topics.',
      topics: [
        {
          id: 1,
          question: 'Tell me about your hometown.',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
        },
        {
          id: 2,
          question: 'What do you like to do in your free time?',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Part 2 - Long Turn',
      description: 'You will be given a task card and one minute to prepare your response.',
      topics: [
        {
          id: 3,
          question: 'Describe a place you have visited that you found particularly beautiful.',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
        },
        {
          id: 4,
          question: 'Describe a book that has influenced you.',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Part 3 - Two-way Discussion',
      description: 'You will be asked further questions related to the topic in Part 2.',
      topics: [
        {
          id: 5,
          question: 'What are the advantages and disadvantages of tourism?',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
        },
        {
          id: 6,
          question: 'How do books influence our thinking?',
          criteria: [
            'Fluency and coherence',
            'Lexical resource',
            'Grammatical range and accuracy',
            'Pronunciation'
          ]
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
    parts.forEach(part => {
      part.topics.forEach(topic => {
        if (answers[topic.id]) {
          score += 1;
        }
      });
    });
    return score;
  };

  return (
    <div className="practice-test">
      <div className="test-header">
        <h2 className="text-primary mb-4">IELTS Speaking Practice Test</h2>
        <p className="lead mb-4">Practice your speaking skills with these IELTS speaking tasks.</p>
      </div>

      {!showResults ? (
        <div className="test-content">
          <div className="speaking-part">
            <h3>{parts[currentPart].title}</h3>
            <div className="part-description">
              <p>{parts[currentPart].description}</p>
              <div className="topics">
                {parts[currentPart].topics.map((topic) => (
                  <div key={topic.id} className="topic">
                    <h4>Question {topic.id}</h4>
                    <p className="question-text">{topic.question}</p>
                    <div className="criteria">
                      <h5>Scoring Criteria:</h5>
                      <ul>
                        {topic.criteria.map((crit, index) => (
                          <li key={index}>{crit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="speaking-area">
                      <div className="recording-controls">
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-mic"></i> Start Recording
                        </button>
                        <button className="btn btn-outline-danger">
                          <i className="bi bi-stop-circle"></i> Stop Recording
                        </button>
                      </div>
                      <div className="playback-controls">
                        <button className="btn btn-outline-success">
                          <i className="bi bi-play-circle"></i> Play Recording
                        </button>
                      </div>
                      <div className="transcript-area">
                        <h5>Transcript:</h5>
                        <textarea
                          value={answers[topic.id] || ''}
                          onChange={(e) => handleAnswer(topic.id, e.target.value)}
                          placeholder="Your response will be transcribed here..."
                          rows={5}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="controls">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentPart(prev => Math.max(0, prev - 1))}
                disabled={currentPart === 0}
              >
                Previous Part
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (currentPart < parts.length - 1) {
                    setCurrentPart(prev => prev + 1);
                  } else {
                    handleSubmit();
                  }
                }}
              >
                {currentPart < parts.length - 1 ? 'Next Part' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="results">
          <h3>Test Results</h3>
          <p className="score">Your Score: {calculateScore()}/{parts.flatMap(p => p.topics).length}</p>
          <div className="detailed-results">
            {parts.flatMap(part => part.topics).map((topic) => (
              <div key={topic.id} className="result-item">
                <h4>Question {topic.id}</h4>
                <p className="question-text">{topic.question}</p>
                <div className="transcript">
                  <h5>Transcript:</h5>
                  <p>{answers[topic.id] || 'No response recorded'}</p>
                </div>
                <div className="criteria">
                  <h5>Scoring Criteria:</h5>
                  <ul>
                    {topic.criteria.map((crit, index) => (
                      <li key={index}>{crit}</li>
                    ))}
                  </ul>
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

export default SpeakingPractice;
