import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter9 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 9 of your IELTS preparation! In this chapter, we'll focus on developing effective test-day strategies to help you perform at your best.</p>
      
      <h3 className="mt-4">Before Test Day</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Know Your Test Center</h5>
          <ul>
            <li>Confirm the exact location of your test center</li>
            <li>Plan your journey in advance, allowing extra time for delays</li>
            <li>If possible, visit the test center before the test day</li>
            <li>Check what identification documents you need to bring</li>
          </ul>
          
          <h5 className="mt-3">2. Prepare Physically</h5>
          <ul>
            <li>Adjust your sleep schedule in the days before the test</li>
            <li>Aim for at least 7-8 hours of sleep the night before</li>
            <li>Stay hydrated and maintain regular meals</li>
            <li>Avoid excessive caffeine or new foods that might upset your stomach</li>
            <li>Consider light exercise to reduce stress</li>
          </ul>
          
          <h5 className="mt-3">3. Mental Preparation</h5>
          <ul>
            <li>Visualize yourself completing each section successfully</li>
            <li>Practice relaxation techniques like deep breathing</li>
            <li>Maintain a positive mindset about the test</li>
            <li>Avoid cramming the night before – review key strategies instead</li>
            <li>Prepare everything you need the evening before</li>
          </ul>
          
          <div className="alert alert-info mt-3">
            <h5>What to Bring</h5>
            <ul>
              <li>Original, valid passport or national identity card</li>
              <li>Bottle of water (if allowed by your test center)</li>
              <li>Analog watch (digital watches may not be permitted)</li>
              <li>Comfortable, layered clothing (test rooms can be too hot or cold)</li>
            </ul>
            <p className="mb-0"><strong>Note:</strong> Personal items are usually not allowed in the test room, including phones, notes, and dictionaries. Check your test center's specific rules.</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">On Test Day</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Morning Routine</h5>
          <ul>
            <li>Wake up with plenty of time to spare</li>
            <li>Eat a balanced breakfast with protein and complex carbohydrates</li>
            <li>Review key strategies briefly, but avoid intensive studying</li>
            <li>Use positive affirmations to build confidence</li>
            <li>Leave home early to account for potential delays</li>
          </ul>
          
          <h5 className="mt-3">2. At the Test Center</h5>
          <ul>
            <li>Arrive 45-60 minutes before your scheduled time</li>
            <li>Complete registration procedures calmly</li>
            <li>Use the restroom before the test begins</li>
            <li>Listen carefully to all instructions from test administrators</li>
            <li>If you have questions about procedures, ask before the test starts</li>
          </ul>
          
          <div className="alert alert-warning mt-3">
            <p><strong>Important:</strong> Remember that the Listening, Reading, and Writing tests are conducted in one sitting with no breaks in between. Plan your energy accordingly.</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">During the Test</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Section-Specific Strategies</h5>
          
          <div className="mt-3">
            <h6><strong>Listening</strong></h6>
            <ul>
              <li>Focus intently during the audio – you only hear it once</li>
              <li>Write answers directly onto the question paper</li>
              <li>If you miss an answer, leave it and focus on the next question</li>
              <li>Use the 10-minute transfer time wisely to check and copy answers</li>
              <li>Double-check spelling and grammar in your answers</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Reading</strong></h6>
            <ul>
              <li>Don't panic if the first passage seems difficult</li>
              <li>Manage your time across all three passages (about 20 minutes each)</li>
              <li>Answer easier questions first to build confidence</li>
              <li>Guess answers for any questions you can't solve – no penalties for wrong answers</li>
              <li>Transfer answers to the answer sheet as you go (no extra time given)</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Writing</strong></h6>
            <ul>
              <li>Read task requirements carefully – understand exactly what's being asked</li>
              <li>Plan both essays before writing (5 minutes for Task 1, 7 minutes for Task 2)</li>
              <li>Always provide an introduction and conclusion</li>
              <li>Write clearly and legibly – messy handwriting can affect your score</li>
              <li>If you're running short on time, ensure you complete Task 2 (it's worth more)</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Speaking</strong></h6>
            <ul>
              <li>Smile and be polite when greeting the examiner</li>
              <li>Speak clearly and at a natural pace – not too fast or too slow</li>
              <li>Use the preparation time in Part 2 to make detailed notes</li>
              <li>Ask for clarification if you don't understand a question</li>
              <li>Don't worry about your accent – clarity is more important than sounding like a native speaker</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Managing Test Anxiety</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Recognize the Signs of Test Anxiety</h5>
          <p>Test anxiety can manifest as:</p>
          <ul>
            <li>Racing thoughts or "mind blanking"</li>
            <li>Physical symptoms (rapid heartbeat, sweaty palms, shortness of breath)</li>
            <li>Negative self-talk ("I can't do this," "I'm going to fail")</li>
            <li>Difficulty concentrating</li>
            <li>Feeling overwhelmed by the test material</li>
          </ul>
          
          <h5 className="mt-3">Quick Anxiety Management Techniques</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title">Deep Breathing</h6>
                  <ol>
                    <li>Breathe in slowly through your nose for 4 counts</li>
                    <li>Hold for 2 counts</li>
                    <li>Exhale slowly through your mouth for 6 counts</li>
                    <li>Repeat 3-5 times</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title">Progressive Muscle Relaxation</h6>
                  <ol>
                    <li>Tense your shoulders for 5 seconds</li>
                    <li>Release and feel the tension flow away</li>
                    <li>Repeat with hands, jaw, or any tense area</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title">Mental Reset</h6>
                  <ol>
                    <li>Acknowledge your anxiety: "I notice I'm feeling anxious"</li>
                    <li>Remind yourself: "This is just a test of my current skills"</li>
                    <li>Focus on the present question only</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title">Positive Self-Talk</h6>
                  <p>Replace negative thoughts with:</p>
                  <ul>
                    <li>"I've prepared for this"</li>
                    <li>"I can handle this challenge"</li>
                    <li>"I'll focus on one question at a time"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">What to Do if Things Go Wrong</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Problem</th>
                  <th>Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>You miss a question in Listening</td>
                  <td>Don't panic or dwell on it. Focus on the next question. Return to it during transfer time if possible.</td>
                </tr>
                <tr>
                  <td>You're running out of time in Reading</td>
                  <td>Quickly scan remaining questions and answer those that can be solved quickly. For remaining questions, make educated guesses.</td>
                </tr>
                <tr>
                  <td>You misunderstood a Writing task</td>
                  <td>If you realize early, restart. If you're halfway through, try to adjust your essay to address the actual prompt without starting over.</td>
                </tr>
                <tr>
                  <td>Your mind goes blank in Speaking</td>
                  <td>Pause, take a breath, and ask for the question to be repeated. Use simple phrases like "Let me think about that" to buy time.</td>
                </tr>
                <tr>
                  <td>You finish a section early</td>
                  <td>Use the extra time to review your answers thoroughly, checking for errors or opportunities to improve.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="alert alert-success mt-4">
        <h4>Final Reminders</h4>
        <ul>
          <li>Stay positive – confidence affects performance</li>
          <li>Remember your preparation – trust in the work you've done</li>
          <li>Focus on one question at a time – don't get overwhelmed by the whole test</li>
          <li>If you make a mistake, let it go and move on</li>
          <li>Your IELTS score doesn't define your English ability or your worth as a person</li>
          <li>You can always retake the test if needed</li>
        </ul>
        <p className="mb-0">Most importantly, remember that millions of people have successfully completed IELTS before you. With proper preparation and the right mindset, you can too!</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={9}
      title="Test Day Strategies"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter9;
