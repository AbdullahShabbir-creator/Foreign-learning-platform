import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter4 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 4 of your IELTS preparation! In this chapter, we'll focus on the Writing section of the IELTS test.</p>
      
      <h3 className="mt-4">IELTS Writing Overview</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS Writing test consists of two tasks with a total duration of 60 minutes. The format differs slightly between Academic and General Training:</p>
          
          <h5 className="mt-3">Academic Writing</h5>
          <ul>
            <li><strong>Task 1:</strong> Describe and interpret a graph, table, chart, or diagram (minimum 150 words)</li>
            <li><strong>Task 2:</strong> Write an essay in response to a point of view, argument or problem (minimum 250 words)</li>
          </ul>
          
          <h5 className="mt-3">General Training Writing</h5>
          <ul>
            <li><strong>Task 1:</strong> Write a letter requesting information or explaining a situation (minimum 150 words)</li>
            <li><strong>Task 2:</strong> Write an essay in response to a point of view, argument or problem (minimum 250 words)</li>
          </ul>
          
          <p className="mt-3">Task 2 carries more weight than Task 1 in determining your final writing band score.</p>
        </div>
      </div>

      <h3 className="mt-4">Assessment Criteria</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Your writing is assessed on these four criteria:</p>
          <ol>
            <li><strong>Task Achievement/Response:</strong> How well you address all parts of the task with relevant, fully extended, and supported ideas</li>
            <li><strong>Coherence and Cohesion:</strong> How well you organize your writing with logical progression, clear paragraphing, and appropriate linking words</li>
            <li><strong>Lexical Resource:</strong> The range and accuracy of your vocabulary</li>
            <li><strong>Grammatical Range and Accuracy:</strong> The range and accurate use of grammar</li>
          </ol>
        </div>
      </div>
      
      <h3 className="mt-4">Academic Writing Task 1</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Structure for Task 1 (Graph/Chart/Table)</h5>
          <ol>
            <li><strong>Introduction:</strong> Paraphrase the question and give an overview of the main features</li>
            <li><strong>Body Paragraph 1:</strong> Describe the first main feature with supporting data</li>
            <li><strong>Body Paragraph 2:</strong> Describe the second main feature with supporting data</li>
            <li><strong>Body Paragraph 3:</strong> (if needed) Describe additional important features</li>
          </ol>
          
          <h5 className="mt-3">Useful Language for Task 1</h5>
          <div className="row">
            <div className="col-md-6">
              <p><strong>For trends:</strong></p>
              <ul>
                <li>increase / decrease / rise / fall / grow / decline</li>
                <li>steadily / gradually / sharply / dramatically</li>
                <li>peak / reach a high/low point / remain stable</li>
              </ul>
            </div>
            <div className="col-md-6">
              <p><strong>For comparisons:</strong></p>
              <ul>
                <li>higher than / lower than / similar to</li>
                <li>the highest / the lowest / significantly more/less</li>
                <li>whereas / while / in contrast / compared to</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Academic Writing Task 2 & General Training Task 2</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Common Essay Types</h5>
          <ul>
            <li><strong>Opinion:</strong> Do you agree or disagree with a statement?</li>
            <li><strong>Discussion:</strong> Discuss both sides of an argument and give your opinion</li>
            <li><strong>Advantage/Disadvantage:</strong> Discuss the benefits and drawbacks of something</li>
            <li><strong>Problem/Solution:</strong> Explain problems and suggest solutions</li>
            <li><strong>Two-part Question:</strong> Answer two related questions about a topic</li>
          </ul>
          
          <h5 className="mt-3">Essay Structure</h5>
          <ol>
            <li><strong>Introduction:</strong> Paraphrase the question, state your position (if required), and outline what your essay will cover</li>
            <li><strong>Body Paragraph 1:</strong> First main idea with supporting points and examples</li>
            <li><strong>Body Paragraph 2:</strong> Second main idea with supporting points and examples</li>
            <li><strong>Body Paragraph 3:</strong> (optional) Third main idea or counter-argument</li>
            <li><strong>Conclusion:</strong> Summarize your main points and restate your position</li>
          </ol>
        </div>
      </div>

      <h3 className="mt-4">General Training Writing Task 1</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Types of Letters</h5>
          <ul>
            <li><strong>Formal:</strong> Job applications, complaint letters, letters to authorities</li>
            <li><strong>Semi-formal:</strong> Letters to people you don't know well</li>
            <li><strong>Informal:</strong> Letters to friends and family</li>
          </ul>
          
          <h5 className="mt-3">Letter Structure</h5>
          <ol>
            <li><strong>Greeting:</strong> Dear Sir/Madam (formal), Dear Mr./Mrs. Smith (semi-formal), Dear John (informal)</li>
            <li><strong>Opening Paragraph:</strong> State the purpose of your letter</li>
            <li><strong>Body Paragraphs:</strong> Cover each point requested in the task</li>
            <li><strong>Closing Paragraph:</strong> Summarize and/or indicate desired outcome</li>
            <li><strong>Sign-off:</strong> Yours faithfully (formal), Yours sincerely (semi-formal), Best wishes/Regards (informal)</li>
          </ol>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <h4>Common Mistakes to Avoid</h4>
        <ul>
          <li>Not addressing all parts of the task</li>
          <li>Writing too few words or far too many words</li>
          <li>Using memorized phrases and templates that don't fit the specific task</li>
          <li>Including irrelevant information</li>
          <li>Poor paragraph organization and structure</li>
          <li>Not checking for grammar and spelling errors</li>
          <li>Using overly informal language in formal writing</li>
        </ul>
      </div>

      <h3 className="mt-4">Sample Question and Response Outline</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>Task 2 Question:</strong></p>
          <div className="border p-3 mb-3">
            <p>Some people believe that children should be allowed to stay at home and play until they are six or seven years old, rather than going to school. Others believe that children should begin their formal education at a very early age.</p>
            <p>Discuss both views and give your own opinion.</p>
          </div>
          
          <p><strong>Response Outline:</strong></p>
          <ul>
            <li><strong>Introduction:</strong> Paraphrase the question, state that both views have merits, and you'll discuss your opinion</li>
            <li><strong>Body Paragraph 1:</strong> Arguments for delaying formal education (focus on play, emotional development, etc.)</li>
            <li><strong>Body Paragraph 2:</strong> Arguments for early education (early learning advantages, social skills, etc.)</li>
            <li><strong>Body Paragraph 3:</strong> Your opinion with supporting reasons</li>
            <li><strong>Conclusion:</strong> Summarize key points and restate your position</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Tips for Success</h4>
        <ul>
          <li>Practice time management - spend about 20 minutes on Task 1 and 40 minutes on Task 2</li>
          <li>Plan your answer before you start writing</li>
          <li>Use a range of vocabulary, avoiding repetition</li>
          <li>Use a variety of grammatical structures and sentence types</li>
          <li>Leave a few minutes to check your work at the end</li>
          <li>Practice writing within the time limit regularly</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={4}
      title="IELTS Writing Skills"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter4;
