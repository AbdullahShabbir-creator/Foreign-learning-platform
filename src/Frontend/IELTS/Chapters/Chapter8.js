import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter8 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 8 of your IELTS preparation! In this chapter, we'll focus on time management strategies to help you perform at your best during the test.</p>
      
      <h3 className="mt-4">The Importance of Time Management in IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Effective time management is crucial for success in the IELTS test for several reasons:</p>
          <ul>
            <li>The test has strict time limits for each section</li>
            <li>You need to complete all questions within the given time</li>
            <li>Running out of time can significantly impact your score</li>
            <li>Time pressure can increase stress and affect performance</li>
          </ul>
          
          <table className="table table-bordered mt-3">
            <thead className="table-light">
              <tr>
                <th>Section</th>
                <th>Duration</th>
                <th>Number of Questions/Tasks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Listening</td>
                <td>30 minutes + 10 minutes transfer time</td>
                <td>40 questions</td>
              </tr>
              <tr>
                <td>Reading</td>
                <td>60 minutes</td>
                <td>40 questions</td>
              </tr>
              <tr>
                <td>Writing</td>
                <td>60 minutes</td>
                <td>2 tasks</td>
              </tr>
              <tr>
                <td>Speaking</td>
                <td>11-14 minutes</td>
                <td>3 parts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Time Management for the Listening Section</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Before the Audio Starts</h5>
          <ul>
            <li>Use the time given to read the questions thoroughly</li>
            <li>Underline key words in the questions</li>
            <li>Predict what kind of information you need to listen for (e.g., names, numbers, dates)</li>
            <li>Look ahead to upcoming questions so you know what to expect</li>
          </ul>
          
          <h5 className="mt-3">During Listening</h5>
          <ul>
            <li>Write answers as you hear them – don't wait until the end</li>
            <li>If you miss an answer, move on immediately – don't dwell on it</li>
            <li>Watch for signpost words that indicate important information is coming</li>
            <li>Use abbreviations in your notes if needed</li>
          </ul>
          
          <h5 className="mt-3">Transfer Time</h5>
          <ul>
            <li>Use the 10 minutes to transfer your answers neatly to the answer sheet</li>
            <li>Double-check your answers, especially for spelling</li>
            <li>Make sure you've answered every question – even guessing is better than leaving blanks</li>
            <li>Check that you've followed instructions (e.g., word limits)</li>
          </ul>

          <div className="alert alert-info mt-3">
            <p><strong>Timing Breakdown:</strong> Allow approximately 45 seconds per question (30 minutes ÷ 40 questions = 45 seconds)</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Time Management for the Reading Section</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Strategic Approach</h5>
          <ol>
            <li><strong>Skim the passage first</strong> (1-2 minutes per passage) to get the main idea</li>
            <li><strong>Read the questions</strong>, underlining key words</li>
            <li><strong>Scan the passage</strong> for specific information to answer each question</li>
            <li><strong>Answer the questions</strong> you find easiest first</li>
            <li><strong>Move on</strong> if a question takes too long</li>
          </ol>
          
          <h5 className="mt-3">Question Type Strategies</h5>
          <ul>
            <li><strong>Multiple choice:</strong> Eliminate wrong options to save time</li>
            <li><strong>Matching:</strong> Cross off options as you use them</li>
            <li><strong>True/False/Not Given:</strong> Don't overthink or bring in outside knowledge</li>
            <li><strong>Completion tasks:</strong> Check word limits and grammar carefully</li>
          </ul>
          
          <div className="alert alert-warning mt-3">
            <p><strong>Common Time Wasters:</strong></p>
            <ul>
              <li>Reading the entire passage word by word</li>
              <li>Spending too long on difficult questions</li>
              <li>Re-reading the same section repeatedly</li>
              <li>Not managing time equally across all three passages</li>
            </ul>
          </div>

          <div className="alert alert-info mt-3">
            <p><strong>Timing Breakdown:</strong></p>
            <ul>
              <li>Approximately 20 minutes per passage (60 minutes ÷ 3 passages)</li>
              <li>About 1.5 minutes per question (60 minutes ÷ 40 questions)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Time Management for the Writing Section</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Task 1 (20 minutes)</h5>
          <ul>
            <li><strong>Planning:</strong> 3-5 minutes</li>
            <li><strong>Writing:</strong> 12-15 minutes</li>
            <li><strong>Reviewing:</strong> 2-3 minutes</li>
          </ul>
          
          <h5 className="mt-3">Task 2 (40 minutes)</h5>
          <ul>
            <li><strong>Planning:</strong> 5-7 minutes</li>
            <li><strong>Writing:</strong> 30 minutes</li>
            <li><strong>Reviewing:</strong> 3-5 minutes</li>
          </ul>
          
          <div className="alert alert-info mt-3">
            <p><strong>Planning is crucial!</strong> Don't skip it. A well-structured essay written in less time will score higher than a longer but disorganized one.</p>
          </div>
          
          <h5 className="mt-3">Effective Planning</h5>
          <ul>
            <li>Analyze the task carefully to ensure you understand what's required</li>
            <li>Brainstorm ideas and select the strongest points</li>
            <li>Create a quick outline with your main ideas and supporting points</li>
            <li>Think about appropriate vocabulary and grammatical structures</li>
          </ul>
          
          <h5 className="mt-3">During Writing</h5>
          <ul>
            <li>Write concisely but ensure you meet the minimum word count</li>
            <li>Follow your plan to maintain structure and coherence</li>
            <li>Don't waste time counting words precisely – estimate</li>
            <li>Use a variety of sentence structures but keep them clear</li>
          </ul>
          
          <h5 className="mt-3">Review Stage</h5>
          <ul>
            <li>Check for grammar and spelling errors</li>
            <li>Ensure your ideas flow logically</li>
            <li>Verify you've completed all parts of the task</li>
            <li>Make sure your handwriting is legible</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Time Management for the Speaking Section</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Part 1: Introduction and Interview (4-5 minutes)</h5>
          <ul>
            <li>Answer promptly without long pauses</li>
            <li>Give appropriately detailed answers (2-3 sentences per question)</li>
            <li>Don't give one-word answers, but also don't speak for too long on one question</li>
          </ul>
          
          <h5 className="mt-3">Part 2: Individual Long Turn (3-4 minutes)</h5>
          <ul>
            <li><strong>Preparation (1 minute):</strong> Use all the preparation time to make notes</li>
            <li><strong>Speaking (1-2 minutes):</strong> Cover all points on the card</li>
            <li>Pace yourself to fill the full 2 minutes</li>
            <li>If you finish early, expand on one of your points</li>
          </ul>
          
          <h5 className="mt-3">Part 3: Discussion (4-5 minutes)</h5>
          <ul>
            <li>Take a moment to think if needed, but don't leave too much silence</li>
            <li>Use phrases like "That's an interesting question..." to buy thinking time</li>
            <li>Keep your answers relevant and focused</li>
            <li>Develop your ideas with examples and explanations</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">General Time Management Tips</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Before the Test</h5>
          <ul>
            <li>Practice with timed mock tests to build stamina</li>
            <li>Learn to pace yourself for each section</li>
            <li>Wear a watch on test day (analog watches are usually allowed)</li>
            <li>Get enough sleep the night before the test</li>
          </ul>
          
          <h5 className="mt-3">During the Test</h5>
          <ul>
            <li>Keep track of time throughout each section</li>
            <li>Always attempt every question – there's no penalty for wrong answers</li>
            <li>Move on from difficult questions and return to them if time permits</li>
            <li>Use any remaining time to check your answers</li>
          </ul>
          
          <h5 className="mt-3">Managing Test Anxiety</h5>
          <ul>
            <li>Practice deep breathing if you feel overwhelmed</li>
            <li>Focus on the current task, not on how much time remains</li>
            <li>If you're stuck, move on rather than letting anxiety build</li>
            <li>Remember that one difficult question won't determine your entire score</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-success mt-4">
        <h4>Time Management Practice Exercise</h4>
        <p>For your next practice test, try using these time allocations:</p>
        <p><strong>Reading Test:</strong></p>
        <ul>
          <li>Passage 1: Set a timer for 18 minutes</li>
          <li>Passage 2: Set a timer for 18 minutes</li>
          <li>Passage 3: Set a timer for 24 minutes (often the most difficult)</li>
        </ul>
        <p><strong>Writing Test:</strong></p>
        <ul>
          <li>Task 1: Set a timer for 20 minutes (including planning and review)</li>
          <li>Task 2: Set a timer for 40 minutes (including planning and review)</li>
        </ul>
        <p>After completing the practice test, reflect on:</p>
        <ul>
          <li>Which sections did you complete within the time limit?</li>
          <li>Where did you run out of time?</li>
          <li>What strategies could help you work more efficiently?</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={8}
      title="Time Management Strategies"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter8;
