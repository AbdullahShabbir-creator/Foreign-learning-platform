import React, { useState } from 'react';
import './Practice.css';

const WritingPractice = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const tasks = [
    {
      id: 1,
      type: 'task-1',
      title: 'Task 1 - Line Graph Analysis',
      description: 'Write a report analyzing the following line graph that shows the changes in the number of international students in three different universities over a period of 10 years.',
      requirements: [
        'Write at least 150 words',
        'Use appropriate academic vocabulary',
        'Include an introduction, overview, and specific details',
        'Use appropriate connecting words and phrases'
      ],
      criteria: [
        'Task achievement (25%)',
        'Coherence and cohesion (25%)',
        'Lexical resource (25%)',
        'Grammatical range and accuracy (25%)'
      ]
    },
    {
      id: 2,
      type: 'task-2',
      title: 'Task 2 - Discussion Essay',
      description: 'Write a discussion essay about the advantages and disadvantages of remote learning. Provide your opinion and support it with relevant examples.',
      requirements: [
        'Write at least 250 words',
        'Use appropriate academic vocabulary',
        'Include an introduction, body paragraphs, and conclusion',
        'Use appropriate linking words and phrases'
      ],
      criteria: [
        'Task response (25%)',
        'Coherence and cohesion (25%)',
        'Lexical resource (25%)',
        'Grammatical range and accuracy (25%)'
      ]
    }
  ];

  const handleAnswer = (taskId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [taskId]: answer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    // For writing, we'll use a simple word count as a basic score
    let score = 0;
    tasks.forEach(task => {
      const wordCount = answers[task.id]?.split(' ').filter(Boolean).length || 0;
      if (task.type === 'task-1' && wordCount >= 150) {
        score += 1;
      } else if (task.type === 'task-2' && wordCount >= 250) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="practice-test">
      <div className="test-header">
        <h2 className="text-primary mb-4">IELTS Writing Practice Test</h2>
        <p className="lead mb-4">Practice your writing skills with these IELTS writing tasks.</p>
      </div>

      {!showResults ? (
        <div className="test-content">
          <div className="writing-task">
            <h3>{tasks[currentTask].title}</h3>
            <div className="task-description">
              <p>{tasks[currentTask].description}</p>
              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  {tasks[currentTask].requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="criteria">
                <h4>Scoring Criteria:</h4>
                <ul>
                  {tasks[currentTask].criteria.map((crit, index) => (
                    <li key={index}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="writing-area">
              <textarea
                value={answers[tasks[currentTask].id] || ''}
                onChange={(e) => handleAnswer(tasks[currentTask].id, e.target.value)}
                placeholder="Start writing your response here..."
                rows={15}
              />
              <div className="word-count">
                Word count: {answers[tasks[currentTask].id]?.split(' ').filter(Boolean).length || 0}
              </div>
            </div>

            <div className="controls">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentTask(prev => Math.max(0, prev - 1))}
                disabled={currentTask === 0}
              >
                Previous Task
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (currentTask < tasks.length - 1) {
                    setCurrentTask(prev => prev + 1);
                  } else {
                    handleSubmit();
                  }
                }}
              >
                {currentTask < tasks.length - 1 ? 'Next Task' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="results">
          <h3>Test Results</h3>
          <p className="score">Your Score: {calculateScore()}/{tasks.length}</p>
          <div className="detailed-results">
            {tasks.map((task) => (
              <div key={task.id} className="result-item">
                <h4>{task.title}</h4>
                <div className="word-count">
                  Word count: {answers[task.id]?.split(' ').filter(Boolean).length || 0}
                </div>
                <div className={`correct ${answers[task.id]?.split(' ').filter(Boolean).length >= (task.type === 'task-1' ? 150 : 250) ? 'correct' : 'incorrect'}`}>
                  {task.type === 'task-1' ? 'Minimum 150 words required' : 'Minimum 250 words required'}
                </div>
                <div className="your-response">
                  <h5>Your Response:</h5>
                  <p>{answers[task.id] || 'No response submitted'}</p>
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

export default WritingPractice;
