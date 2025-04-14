import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter1 = () => {
  const chapterContent = (
    <>
      <p>Welcome to your IELTS preparation journey! In this chapter, we'll introduce you to the IELTS exam format and structure.</p>
      
      <h3 className="mt-4">IELTS Test Format</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS exam consists of four sections:</p>
          <ol>
            <li><strong>Listening</strong> (30 minutes) - 4 sections with 10 questions each</li>
            <li><strong>Reading</strong> (60 minutes) - 3 passages with 40 questions in total</li>
            <li><strong>Writing</strong> (60 minutes) - 2 tasks: short essay and graph/data interpretation</li>
            <li><strong>Speaking</strong> (11-14 minutes) - Face-to-face interview with an examiner</li>
          </ol>
          <p>The total test time is approximately 2 hours and 45 minutes.</p>
        </div>
      </div>

      <h3 className="mt-4">Academic vs General Training</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>Academic Module</strong>: For students seeking admission to undergraduate or postgraduate courses.</p>
          <p><strong>General Training Module</strong>: For those immigrating to English-speaking countries or taking non-academic training programs.</p>
          <p>The Listening and Speaking sections are the same for both modules, while Reading and Writing sections differ.</p>
        </div>
      </div>
      
      <h3 className="mt-4">Scoring System</h3>
      <div className="alert alert-info mt-4">
        <h4>IELTS Band Scores</h4>
        <p>IELTS results are reported on a 9-band scale:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Band</th>
              <th>Skill Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9</td>
              <td>Expert user</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Very good user</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Good user</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Competent user</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Modest user</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Limited user</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Extremely limited user</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Intermittent user</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Non-user</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Did not attempt the test</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-4">Preparation Tips</h3>
      <ul>
        <li>Familiarize yourself with the test format and question types</li>
        <li>Practice with past papers and sample questions</li>
        <li>Work on your time management skills</li>
        <li>Improve your vocabulary and grammar</li>
        <li>Listen to English podcasts and watch videos to improve listening skills</li>
        <li>Read English newspapers, articles, and books regularly</li>
        <li>Practice writing essays and get feedback</li>
        <li>Speak in English as much as possible</li>
      </ul>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={1}
      title="Introduction to IELTS"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter1;
