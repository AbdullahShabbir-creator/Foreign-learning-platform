import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter2 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 2 of your IELTS preparation! In this chapter, we'll focus on the Listening section of the IELTS test.</p>
      
      <h3 className="mt-4">IELTS Listening Overview</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS Listening test consists of four sections with a total of 40 questions:</p>
          <ul>
            <li><strong>Section 1:</strong> A conversation between two people in an everyday social context</li>
            <li><strong>Section 2:</strong> A monologue in an everyday social context</li>
            <li><strong>Section 3:</strong> A conversation between up to four people in an educational or training context</li>
            <li><strong>Section 4:</strong> A university-style lecture or academic monologue</li>
          </ul>
          <p>You will hear the recording once only, and the questions follow the order of the recording.</p>
        </div>
      </div>

      <h3 className="mt-4">Question Types</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>You may encounter various question types in the Listening section:</p>
          <ul>
            <li>Multiple choice</li>
            <li>Matching</li>
            <li>Plan/map/diagram labeling</li>
            <li>Form/note/table/flow-chart/summary completion</li>
            <li>Sentence completion</li>
            <li>Short-answer questions</li>
          </ul>
        </div>
      </div>
      
      <h3 className="mt-4">Effective Listening Strategies</h3>
      <ol>
        <li><strong>Read instructions carefully</strong> - Make sure you understand what the task requires</li>
        <li><strong>Preview the questions</strong> - Quickly read through them before the recording starts</li>
        <li><strong>Identify key words</strong> - Underline or circle important words in the questions</li>
        <li><strong>Listen for signpost words</strong> - Words like "firstly," "however," "in conclusion" help you follow the speaker</li>
        <li><strong>Watch for distractors</strong> - The speaker might mention incorrect answers before giving the correct one</li>
        <li><strong>Be aware of spelling</strong> - Check your spelling when transferring answers to the answer sheet</li>
      </ol>

      <div className="alert alert-warning mt-4">
        <h4>Common Pitfalls</h4>
        <ul>
          <li>Losing concentration during the recording</li>
          <li>Missing answers because you're still thinking about a previous question</li>
          <li>Not following instructions regarding word limits</li>
          <li>Incorrect spelling or grammar in answers</li>
          <li>Not managing time effectively when transferring answers to the answer sheet</li>
        </ul>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Below is a sample IELTS Listening practice recording. Listen to it and answer the following questions:</p>
          <p>For this exercise, imagine you're listening to a conversation between a student and a librarian about library services.</p>
          
          <div className="mt-3">
            <p><strong>Questions 1-5:</strong> Complete the form below.</p>
            <p>Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.</p>
            
            <div className="border p-3">
              <p><strong>Library Registration Form</strong></p>
              <p>Student Name: Sarah _______</p>
              <p>Student ID Number: _______</p>
              <p>Course: _______ Studies</p>
              <p>Duration of library card: _______ months</p>
              <p>Special access requested: _______ Collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Tips for Improving Listening Skills</h4>
        <ul>
          <li>Listen to English radio programs, podcasts, and news broadcasts</li>
          <li>Watch English movies and TV shows with subtitles</li>
          <li>Practice listening to a variety of accents (British, American, Australian, etc.)</li>
          <li>Take notes while listening to develop your note-taking skills</li>
          <li>Practice with official IELTS sample materials and past papers</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={2}
      title="IELTS Listening Skills"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter2;
