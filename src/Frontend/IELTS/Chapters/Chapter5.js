import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter5 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 5 of your IELTS preparation! In this chapter, we'll focus on the Speaking section of the IELTS test.</p>
      
      <h3 className="mt-4">IELTS Speaking Overview</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS Speaking test is a face-to-face interview with an examiner lasting 11-14 minutes. It is the same format for both Academic and General Training tests.</p>
          
          <p>The test is divided into three parts:</p>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Part</th>
                <th>Format</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Part 1: Introduction and Interview</td>
                <td>General questions about yourself, your home, family, job, studies, interests</td>
                <td>4-5 minutes</td>
              </tr>
              <tr>
                <td>Part 2: Individual Long Turn</td>
                <td>Speak on a given topic using a task card (1 minute preparation, 2 minutes speaking)</td>
                <td>3-4 minutes</td>
              </tr>
              <tr>
                <td>Part 3: Two-way Discussion</td>
                <td>More abstract questions thematically linked to Part 2</td>
                <td>4-5 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Assessment Criteria</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Your speaking performance is assessed on four criteria:</p>
          <ol>
            <li><strong>Fluency and Coherence:</strong> How smoothly you speak, with minimal hesitation and appropriate connectives</li>
            <li><strong>Lexical Resource:</strong> The range and accuracy of your vocabulary</li>
            <li><strong>Grammatical Range and Accuracy:</strong> The range and accurate use of grammar</li>
            <li><strong>Pronunciation:</strong> How clear your speech is, with appropriate intonation and stress</li>
          </ol>
        </div>
      </div>
      
      <h3 className="mt-4">Part 1: Introduction and Interview</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The examiner will introduce themselves and ask for your identification. They will then ask general questions about familiar topics.</p>
          
          <h5 className="mt-3">Common Part 1 Topics</h5>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Home/Accommodation</li>
                <li>Hometown</li>
                <li>Family</li>
                <li>Work/Studies</li>
                <li>Hobbies/Free time</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Food</li>
                <li>Weather/Seasons</li>
                <li>Transportation</li>
                <li>Music/Books/Movies</li>
                <li>Sports/Exercise</li>
              </ul>
            </div>
          </div>
          
          <h5 className="mt-3">Sample Questions and Responses</h5>
          <div className="border p-3">
            <p><strong>Q: Where are you from?</strong></p>
            <p><strong>Basic Answer:</strong> I'm from Beijing.</p>
            <p><strong>Better Answer:</strong> I come from Beijing, which is the capital city of China. It's a very large and bustling metropolis with a rich history and culture.</p>
            
            <p className="mt-2"><strong>Q: Do you work or are you a student?</strong></p>
            <p><strong>Basic Answer:</strong> I'm a student.</p>
            <p><strong>Better Answer:</strong> I'm currently a third-year undergraduate student majoring in Computer Science. I find it really fascinating because it combines mathematical theory with practical problem-solving skills.</p>
          </div>
          
          <div className="alert alert-info mt-3">
            <p>Aim to give extended answers (2-3 sentences) but don't speak for too long on each question. Remember to provide reasons and examples to support your answers.</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Part 2: Individual Long Turn</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In this part, you'll be given a task card with a topic and some points to cover. You'll have one minute to prepare, then you need to speak for 1-2 minutes on the topic.</p>
          
          <h5 className="mt-3">Sample Task Card</h5>
          <div className="border p-3 mb-3">
            <p>Describe a book you have recently read.</p>
            <p>You should say:</p>
            <ul>
              <li>what kind of book it is</li>
              <li>what it is about</li>
              <li>why you decided to read it</li>
              <li>and explain why you liked or disliked it</li>
            </ul>
          </div>
          
          <h5 className="mt-3">Preparation Strategies</h5>
          <ul>
            <li>Use your 1-minute preparation time to make brief notes</li>
            <li>Cover all the points mentioned on the card</li>
            <li>Structure your talk with an introduction, body, and conclusion</li>
            <li>Include specific details and examples</li>
            <li>Use a range of vocabulary and grammatical structures</li>
            <li>Practice with a timer to ensure you can speak for the full 2 minutes</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Part 3: Two-way Discussion</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The examiner will ask you more abstract questions related to the topic from Part 2. This tests your ability to express and justify opinions, analyze, discuss, and speculate about issues.</p>
          
          <h5 className="mt-3">Following the Book Example from Part 2, Sample Part 3 Questions</h5>
          <ul>
            <li>How have reading habits changed in your country in recent years?</li>
            <li>Do you think electronic books will eventually replace paper books?</li>
            <li>What kinds of books are most popular in your country?</li>
            <li>Why do you think some people prefer watching film adaptations rather than reading books?</li>
          </ul>
          
          <div className="alert alert-warning mt-3">
            <p>Part 3 questions are more challenging than Part 1. They require you to give opinions, make comparisons, and discuss abstract ideas. Don't worry if you need a moment to think - you can use phrases like "That's an interesting question..." or "Let me think about that..."</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Speaking Strategies</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>For Better Fluency</h5>
          <ul>
            <li>Use fillers appropriately (well, you know, I mean)</li>
            <li>Use linking words (however, nevertheless, furthermore)</li>
            <li>Practice speaking at a natural pace, not too fast or too slow</li>
            <li>If you make a mistake, correct yourself and move on</li>
          </ul>
          
          <h5 className="mt-3">For Better Vocabulary</h5>
          <ul>
            <li>Use precise words rather than general ones</li>
            <li>Include idiomatic expressions naturally</li>
            <li>Use collocations correctly (heavy rain, strong coffee)</li>
            <li>Avoid repetition by using synonyms</li>
          </ul>
          
          <h5 className="mt-3">For Better Grammar</h5>
          <ul>
            <li>Use a mix of simple and complex sentence structures</li>
            <li>Use a range of tenses appropriately</li>
            <li>Use conditional sentences when appropriate</li>
            <li>Include passive voice where relevant</li>
          </ul>
          
          <h5 className="mt-3">For Better Pronunciation</h5>
          <ul>
            <li>Focus on clear articulation of sounds</li>
            <li>Pay attention to word stress and sentence intonation</li>
            <li>Link words naturally in connected speech</li>
            <li>Emphasize important words to convey meaning</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Tips for Success</h4>
        <ul>
          <li>Speak clearly and at a natural pace</li>
          <li>Give extended answers but stay on topic</li>
          <li>Use examples from personal experience</li>
          <li>Listen carefully to the questions</li>
          <li>Ask for clarification if you don't understand a question</li>
          <li>Practice speaking English regularly, record yourself if possible</li>
          <li>Don't memorize scripted answers - examiners are trained to recognize this</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={5}
      title="IELTS Speaking Skills"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter5;
