import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter3 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 3 of your IELTS preparation! In this chapter, we'll focus on the Reading section of the IELTS test.</p>
      
      <h3 className="mt-4">IELTS Reading Overview</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS Reading test consists of three passages with a total of 40 questions. You have 60 minutes to complete the test.</p>
          
          <h5 className="mt-3">Academic vs General Training</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Academic</th>
                <th>General Training</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three long academic texts from books, journals, magazines, and newspapers</td>
                <td>Extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines</td>
              </tr>
              <tr>
                <td>Appropriate for university entrance</td>
                <td>More focused on everyday, survival English</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Question Types</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>You may encounter various question types in the Reading section:</p>
          <ul>
            <li><strong>Multiple choice</strong> - Select the correct answer from options</li>
            <li><strong>Identifying information</strong> - TRUE/FALSE/NOT GIVEN questions</li>
            <li><strong>Identifying writer's views/claims</strong> - YES/NO/NOT GIVEN questions</li>
            <li><strong>Matching information</strong> - Match statements to paragraphs</li>
            <li><strong>Matching headings</strong> - Match headings to paragraphs</li>
            <li><strong>Matching features</strong> - Match a list of options to statements</li>
            <li><strong>Matching sentence endings</strong> - Complete sentences by matching endings</li>
            <li><strong>Sentence completion</strong> - Complete sentences with words from the text</li>
            <li><strong>Summary/note/table/flow-chart completion</strong> - Complete with words from the text</li>
            <li><strong>Diagram label completion</strong> - Label a diagram using words from the text</li>
            <li><strong>Short-answer questions</strong> - Answer questions with words from the text</li>
          </ul>
        </div>
      </div>
      
      <h3 className="mt-4">Effective Reading Strategies</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Skimming and Scanning</h5>
          <p><strong>Skimming:</strong> Reading quickly to get the main idea of a text</p>
          <ul>
            <li>Read the title, headings, and first sentence of each paragraph</li>
            <li>Look for keywords and repeated words</li>
            <li>Don't worry about understanding every word</li>
          </ul>
          
          <p><strong>Scanning:</strong> Reading quickly to find specific information</p>
          <ul>
            <li>Look for names, dates, numbers, and other specific details</li>
            <li>Use the questions to guide your search</li>
            <li>Move your eyes quickly over the text until you find what you need</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Approach to Different Question Types</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>TRUE/FALSE/NOT GIVEN Questions</h5>
          <ul>
            <li><strong>TRUE</strong> - The statement matches the information in the text</li>
            <li><strong>FALSE</strong> - The statement contradicts the information in the text</li>
            <li><strong>NOT GIVEN</strong> - The information is not mentioned in the text</li>
          </ul>
          
          <h5 className="mt-3">Matching Headings</h5>
          <ul>
            <li>Read the list of headings first to understand what to look for</li>
            <li>Identify the main idea of each paragraph</li>
            <li>Match each paragraph to the most appropriate heading</li>
          </ul>
          
          <h5 className="mt-3">Multiple Choice</h5>
          <ul>
            <li>Read the question stem carefully</li>
            <li>Predict the answer before looking at the options</li>
            <li>Eliminate obviously wrong answers</li>
            <li>Be careful of distractors that are partially correct</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <h4>Common Pitfalls</h4>
        <ul>
          <li>Spending too much time on one passage or question</li>
          <li>Confusing TRUE/FALSE with YES/NO questions</li>
          <li>Not following word limits for answers</li>
          <li>Bringing in outside knowledge instead of relying on the text</li>
          <li>Spelling errors in answers</li>
        </ul>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Read the following passage and answer the questions:</p>
          
          <div className="border p-3 mb-3">
            <h5>The Impact of Sleep on Learning</h5>
            <p>Sleep plays a vital role in learning and memory consolidation. Research has shown that sleep helps to stabilize and strengthen the neural connections that form during the day's learning experiences. In fact, studies demonstrate that individuals who sleep after learning new information retain that information better than those who don't.</p>
            <p>One particularly interesting finding is that different sleep stages appear to benefit different types of learning. For example, REM (Rapid Eye Movement) sleep, which is characterized by fast brain activity and dreaming, seems particularly important for procedural memory—the memory of how to perform tasks, such as riding a bicycle or playing a musical instrument. On the other hand, slow-wave sleep, a deeper stage of sleep, appears more critical for declarative memory—the memory of facts and events.</p>
            <p>Despite the importance of sleep for learning, many students sacrifice sleep to study more. This strategy may be counterproductive. Not only does lack of sleep impair attention and concentration, but it also reduces the brain's ability to consolidate what has been learned. A better approach might be to study efficiently during the day and ensure adequate sleep at night.</p>
          </div>
          
          <p><strong>Answer TRUE, FALSE, or NOT GIVEN for the following statements:</strong></p>
          <ol>
            <li>Sleep helps strengthen neural connections formed during learning.</li>
            <li>REM sleep is more important than slow-wave sleep for all types of memory.</li>
            <li>Most students get enough sleep during exam periods.</li>
            <li>Lack of sleep can impair concentration.</li>
          </ol>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Tips for Improving Reading Skills</h4>
        <ul>
          <li>Read a variety of English texts regularly (newspapers, magazines, academic articles)</li>
          <li>Practice timed reading exercises to improve speed</li>
          <li>Work on expanding your vocabulary</li>
          <li>Practice identifying main ideas and supporting details</li>
          <li>Take practice tests under exam conditions</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={3}
      title="IELTS Reading Skills"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter3;
